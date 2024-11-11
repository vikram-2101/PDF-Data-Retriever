// backend/routes/pdfRoutes.js
const express = require("express");
const multer = require("multer");
const pdfController = require("../controllers/pdfController");

const router = express.Router();

// Set up file storage using multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("pdf"), pdfController.uploadPdf);
router.get("/pdfs", pdfController.getAllPdfs);

module.exports = router;
