import React, { useState } from 'react';
import PdfViewer from './PdfViewer';

export const AddBookPdf = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setPdfFile(file);

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await fetch('http://localhost:3001/api/book/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('File uploaded:', data.url);

      setPdfUrl(data.url);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h3>Upload a PDF</h3>
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
}
