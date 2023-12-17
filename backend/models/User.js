const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  subject: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  qualification: {
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
  },
  experience: {
    type: String
  },
  gender: {
    type: String // You might consider using an enum for gender ('male', 'female', 'other')
  },
  isAdmin:{
    type:Boolean
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
