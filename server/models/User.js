const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcryptjs');
const securityService = require('../security/security')

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    firstName: {type: String},
    lastName: {type: String}
  },
  role:
  {
    type: String,
    required: true,
    default: securityService.roles.REQUIRE_CLIENT
  },
  resetPasswordToken: { type: String},
  resetPasswordExpires: {type: Date}
}, {
  timestamps: true,
});

UserSchema.pre('save', function(next){
  const user = this,
  SALT_FACTOR = 5;
  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt){
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb){
  if(this.password==='*') {cb(null,false);return;}
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err){return cb(err); }
    cb(null, isMatch);
  });
}

UserSchema.methods.toJson = function(){
  return {
    _id: this._id,
    firstName: this.profile.firstName,
    lastName: this.profile.lastName,
    email: this.email,
    role: this.role,
    password: this.password
    // provider: this.provider
  }
}
module.exports = mongoose.model('User', UserSchema);