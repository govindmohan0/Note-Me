// models/pdfModel.js

const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  uploadDate: { type: Date, default: Date.now },
  // add other fields if needed
});

const PDF = mongoose.model('PDF', pdfSchema);

module.exports = PDF;
