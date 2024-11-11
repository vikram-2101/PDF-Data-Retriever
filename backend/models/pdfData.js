// backend/models/PdfData.js
const mongoose = require("mongoose");

const pdfDataSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const PdfData = mongoose.model("PdfData", pdfDataSchema);

module.exports = PdfData;
