import React, {useState} from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer() {
    
  const pdfUrl = 'https://revistaseug.ugr.es/downloads/SOBRE_APA7_ejemplos_ESPA%C3%91OL.pdf'; // Reemplaza con la URL o ruta de tu archivo PDF

  return (
    <div>
      <div>
        <iframe title="PDF Viewer" src={pdfUrl} width="100%" height="700px" />
      </div>
    </div>
  );
}

export default PDFViewer;
