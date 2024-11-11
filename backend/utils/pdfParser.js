// backend/utils/pdfParser.js
const pdf = require("pdf-parse");

const parsePdf = async (fileBuffer) => {
  try {
    const data = await pdf(fileBuffer);
    return data.text; // Extracts text from PDF
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw new Error("Failed to parse PDF.");
  }
};

module.exports = parsePdf;
