const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcryptjs');

  const SymptomSchema = new Schema({
      ID: { 
          required: true,
          type: Number
      },
      Name: {
          required: true,
          type: String
      }
  });

  module.exports = mongoose.model('Symptom', SymptomSchema);