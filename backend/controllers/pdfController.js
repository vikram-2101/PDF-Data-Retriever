// backend/controllers/pdfController.js
const PdfData = require("../models/pdfData");
const parsePdf = require("../utils/pdfParser");

const uploadPdf = async (req, res) => {
  try {
    const pdfBuffer = req.file.buffer;
    const text = await parsePdf(pdfBuffer);

    // Save PDF data to MongoDB
    const newPdf = new PdfData({
      title: req.file.originalname,
      content: text,
    });

    await newPdf.save();
    res.status(200).json({ message: "PDF uploaded and data saved" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to upload PDF", error: error.message });
  }
};

const getAllPdfs = async (req, res) => {
  try {
    const pdfs = await PdfData.find();
    res.status(200).json(pdfs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve PDFs", error: error.message });
  }
};

module.exports = { uploadPdf, getAllPdfs };
