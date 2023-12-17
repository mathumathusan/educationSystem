const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  schoolname: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String
  },
  verification: {
    type:String, // Using Buffer to store file data
     // Store content type (e.g., 'image/jpeg', 'application/pdf')
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneno: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

const School = mongoose.model('School', schoolSchema);

module.exports = School;
