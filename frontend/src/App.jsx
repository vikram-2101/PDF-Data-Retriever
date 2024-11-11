// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import FileUpload from "./components/FileUpload";

const App = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get("/api/pdf/pdfs");
        setPdfs(response.data);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      }
    };

    fetchPdfs();
  }, []);

  return (
    <div>
      <h1>PDF Data Retriever</h1>
      <FileUpload />
      <h2>Uploaded PDFs</h2>
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf._id}>
            <h3>{pdf.title}</h3>
            <p>{pdf.content}.</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
