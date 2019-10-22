const mongoose = require('mongoose');

const hobbySchema = mongoose.Schema({
  name: { type: String, required: true },
  sinceAge: { type: String, required: true },
  level: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Hobby', hobbySchema);
