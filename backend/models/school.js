const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  degree: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('School', schoolSchema);
