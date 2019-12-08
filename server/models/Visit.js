const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcryptjs'),
  SymptomSchema = require('../models/Symptom').schema;

const VisitSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  symptoms: {
      type: [SymptomSchema]
  },
  diagnosis: {
    type: String
  },
  notes: {
    type: String
  },
  priv_notes: {
    type: String
  }
}, {
  timestamps: true,
});
//Client can see this version
VisitSchema.methods.toJson = function(){
  return {
    _id: this._id,
    user_id: this.user_id,
    symptoms: this.symptoms,
    diagnosis: this.diagnosis, 
    notes: this.notes
  }
}
//Only NP is allowed to view private notes
VisitSchema.methods.toNPJson = function(){
  return {
    _id: this._id,
    user_id: this.user_id,
    symptoms: this.symptoms,
    diagnosis: this.diagnosis, 
    notes: this.notes,
    priv_notes: this.priv_notes
  }
}
module.exports = mongoose.model('Visit', VisitSchema);