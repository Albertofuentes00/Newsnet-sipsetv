import { FaAngleLeft } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React, { useRef } from 'react';
import axios from 'axios';
import html2pdf from 'html2pdf.js';

const LeerGuion = () => {
  const [Datos, SetDatos] = useState([]);
  const { id } = useParams();
  const [cargado, Setcargado] = useState(0);
  useEffect(() => {
    GetDatos();
  }, []);

  const GetDatos = async () => {
    try {
      const respuesta = await axios.get(
        'https://localhost:7201/Nota/GetByID/' + id
      );
      console.log(respuesta.data.result);
      SetDatos(respuesta.data.result);
      Setcargado(1);
      falseEditable();
    } catch (error) {}
  };

  function falseEditable() {
    var table = document.getElementById('tabla-nota');
    var cells = table.getElementsByTagName('tbody');
    for (var i = 0; i < cells.length; i++) {
      cells[i].setAttribute('contenteditable', 'false');
    }
  }

  const mostrar = () => {
    if (cargado === 1) {
      return (
        <div className="Row">
          <h6>
            <b>Fuente:</b> {Datos.fuente.nombre_Fuente}
          </h6>
          <h6>
            <b>Categoría:</b>
            {Datos.categoria.nombre_Categoria}{' '}
          </h6>
          <h6>
            <b>Formato:</b>
            {Datos.formato.nombre_Formato}{' '}
          </h6>
          <h6>
            <b>Reportero:</b>
            {Datos.usuario.nombre}{' '}
          </h6>
        </div>
      );
    }
  };

  function formatFecha(fechaString) {
    const fecha = new Date(fechaString);
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1;
    const day = fecha.getDate();
    const formattedFecha = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return formattedFecha;
  }

  const contentRef = useRef(null);
  const handleDownloadPDF = () => {
    const content = contentRef.current;
    const opt = {
      margin: 10,
      filename: 'Nota.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

  html2pdf(content, opt);

};

  
function goBack() {
  window.history.back();
}
  
  
  
  
  


  
    return(
        <div className="Auth-form-container">
        <form className="Auth-form-Guion">
          <div className="Auth-form-content">
            <div className="Row">
              <h3>Redacción</h3>
              <div className="Button-form">
                  <button onClick={()=> goBack()} type="button" className="btn btn-dark"> <FaAngleLeft size={20} color="white" /> Regresar</button>
                <button type="button" id='btn-imprimir' className="btn btn-danger" onClick={handleDownloadPDF}>  <FaFilePdf size={20} color="white" /> Generar PDF</button>
              </div>
            </div>
            <br />
            <div id="miDiv" className="Imprimir-div">
            <div ref={contentRef} className="hola">
              <div className="Grid">
                <div className="Row">
                  <h6>
                    <b>Título:</b> {Datos.titulo}
                  </h6>
                  <h6>
                    <b>Fecha:</b> {formatFecha(Datos.fecha)}
                  </h6>
                </div>
                {mostrar()}
              </div>
              <div
                className="tabla-imprimir"
                dangerouslySetInnerHTML={{ __html: Datos.redaccion }}
              />
            </div>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default LeerGuion;
