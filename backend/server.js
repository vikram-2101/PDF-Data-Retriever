// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const pdfRoutes = require("./routes/pdfRoutes");

const app = express();
const port = 5000;

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/pdfdata")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Middleware
app.use(express.json());

// Routes
app.use("/api/pdf", pdfRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
