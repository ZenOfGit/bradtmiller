const mongoose = require('mongoose');

const employerSchema = mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  stateAbr: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Employer', employerSchema);
