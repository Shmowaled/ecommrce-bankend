const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
  },
  lastname: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'Invalid email'],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Za-z0-9]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function(v) {
        return /[a-z]/.test(v) && /[A-Z]/.test(v) && /[0-9]/.test(v) && /[!@#$%^&*]/.test(v);
      },
      message: 'Password must contain uppercase, lowercase, number, and special character.',
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

module.exports = mongoose.model('User', UserSchema);