import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from "react-router-dom";
import {FaAngleLeft} from 'react-icons/fa';
import PDFViewer from './NewPDFviewer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
<script 
src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js">
</script>

class PdfViewer extends React.Component {
 
  render(){
    const { pdfUrl } = "https://ottsincelejo.com/blogwilson/bdavanzada/procedimientos.pdf";

    return (
      <div>
        <div className="Auth-form-PDFViewer">
          <div className="Row">
              <div className="Button-form">
                  <Link to='/'>
                  <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                  </Link>   
                </div>
          </div>
          <div id="canvas_container">
            <PDFViewer/>
          </div>
        </div>
      </div>
      
    );
  

  }
    }
export default PdfViewer


