const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  subscribed: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
