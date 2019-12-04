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
  }
}, {
  timestamps: true,
});

VisitSchema.methods.toJson = function(){
  return {
    _id: this._id,
    user_id: this.user_id,
    symptoms: this.symptoms,
    diagnosis: this.diagnosis, 
    notes: this.notes
  }
}
module.exports = mongoose.model('Visit', VisitSchema);