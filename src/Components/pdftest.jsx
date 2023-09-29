import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from "react-router-dom";
import {FaAngleLeft} from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
<script 
src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js">
</script>

class PdfViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  changePage = (offset) => {
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber + offset,
    }));
  };

  previousPage = () => {
    this.changePage(-1);
  };

  nextPage = () => {
    this.changePage(1);
  };


}

  

  render() 
    const { pageNumber, numPages } = this.state;
    const { pdfUrl } = this.props;

    return (
      <div>
        <div className="Auth-form-table">
        <div className="Row">
              <div className="Button-form">
                  <Link to='/'>
                  <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                  </Link>   
                  <button type='button' class="btn btn-danger" href={pdfUrl} download>Descargar PDF</button> 
                </div>
            </div>
            <div id="canvas_container">
                <canvas id="pdf_renderer">
                <Document
                    file={pdfUrl}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                </canvas>
                <div id="navigation_controls">
                    <button type="button" class="btn btn-dark" id="go_previous"
                    disabled={pageNumber <= 1}
                    onClick={this.previousPage}
                    >Anterior</button>
                    {/* <input id="current_page" value="1" type="number"/> */}
                    <button type="button" class="btn btn-dark" id="go_next"
                    disabled={pageNumber >= numPages}
                    onClick={this.nextPage}
                    >Siguiente</button>
                </div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
            

         
        </div>
      </div>
      
    );
  


export default PdfViewer


