import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {pdfUrl && (
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      )}
      {pdfUrl && (
        <p>
          Page {pageNumber} of {numPages}
        </p>
      )}
    </div>
  );
}

