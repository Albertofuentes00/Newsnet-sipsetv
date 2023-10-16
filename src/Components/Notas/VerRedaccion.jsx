import { Link } from "react-router-dom";
import {FaAngleLeft} from 'react-icons/fa';
import {FaPrint} from 'react-icons/fa';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import React, { useRef} from 'react';
import axios from 'axios'
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const LeerGuion=()=>{
    const [Datos, SetDatos] = useState([]);
    const {id} = useParams()
    const [cargado, Setcargado] = useState(0);
    const tablaRef = useRef(null);
    useEffect(()=>{
      GetDatos();
      
  },[]);
  
  const GetDatos = async()=>{
    try {
        const respuesta = await axios.get('https://localhost:7201/Nota/GetByID/'+id);
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
        Setcargado(1);
        falseEditable();
    } catch (error) {
        
    }

  }



  function falseEditable() {
    var table = document.getElementById('tabla-nota');
    var cells = table.getElementsByTagName('tbody');
    for (var i = 0; i < cells.length; i++) {
      cells[i].setAttribute('contenteditable', 'false');
  }
  }

  const mostrar=()=>{
if(cargado === 1){
  return(

    <div className="Row">
                <h6 ><b>Fuente:</b> {Datos.fuente.nombre_Fuente}</h6>
                <h6 ><b>Categoría:</b>{Datos.categoria.nombre_Categoria} </h6>
                <h6><b>Formato:</b>{Datos.formato.nombre_Formato} </h6>
                <h6><b>Reportero:</b>{Datos.usuario.nombre} </h6>
              </div>
  );
}
  }

  function formatFecha(fechaString) {
    const fecha = new Date(fechaString);
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1; 
    const day = fecha.getDate();
    const formattedFecha = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedFecha;
  }






  const Imprimir = () => {
    const elementoAExportar = document.getElementById('miDiv');
    const anchoPagina = 216; // Ancho de una hoja carta en mm (equivalente a 8.5 pulgadas)
    const altoPagina = 279; // Alto de una hoja carta en mm (equivalente a 11 pulgadas)
    const margen = 10; // Márgenes en mm
  
    // Obtener el ancho y alto actual del elemento
    const anchoElemento = elementoAExportar.offsetWidth;
    const altoElemento = elementoAExportar.offsetHeight;
  
    // Calcular la escala para ajustar el ancho y alto del contenido
    const escalaAncho = (anchoPagina - 2 * margen) / anchoElemento;
    const escalaAlto = (altoPagina - 2 * margen) / altoElemento;
    const escala = Math.min(escalaAncho, escalaAlto);
  
    // Calcular las coordenadas para centrar el contenido
    const xPos = margen;
    const yPos = margen;
  
    // Aplicar la escala y las coordenadas al elemento
    elementoAExportar.style.transform = `scale(${escala})`;
    elementoAExportar.style.transformOrigin = 'top left';
    elementoAExportar.style.marginLeft = `${xPos}px`;
    elementoAExportar.style.marginTop = `${yPos}px`;
  
    const escalaHtml2Canvas = 2; // Aumenta la escala para mejorar la resolución
    const calidadImagen = 2.0; // Aumenta la calidad de la imagen generada
  
    html2canvas(elementoAExportar, {
      scale: escalaHtml2Canvas / escala, // Invertir la escala
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', calidadImagen); // Cambia a formato JPEG y ajusta la calidad
      const pdf = new jsPDF({ unit: 'mm', format: [anchoPagina, altoPagina], orientation: 'portrait' });
      pdf.addImage(imgData, 'JPEG', margen, margen, anchoPagina - 2 * margen, altoPagina - 2 * margen);
      pdf.save('documento.pdf');
      console.log('Se imprimió correctamente');
    });
  
    // Restablecer el estado original del elemento
    elementoAExportar.style.transform = 'scale(1)';
    elementoAExportar.style.transformOrigin = 'top left';
    elementoAExportar.style.marginLeft = '0';
    elementoAExportar.style.marginTop = '0';
  };
  
  
  
  
  
  
  
  
  
  


  
    return(
        <div className="Auth-form-container">
        <form className="Auth-form-Guion">
          <div className="Auth-form-content">
            <div className="Row">
              <h3>Redacción</h3>
              <div className="Button-form">
                <Link to='/Notas'>
                  <button type="button" className="btn btn-dark"> <FaAngleLeft size={20} color="white" /> Regresar</button>
                </Link>
                <button type="button" id='btn-imprimir' className="btn btn-primary" onClick={()=>Imprimir()}>  <FaPrint size={20} color="white" /> Imprimir</button>
              </div>
            </div>
            <br />
            <div id="miDiv" className="Imprimir-div">
            <div className="hola">
               <div className="Grid" >
              <div className="Row">
                <h6><b>Título:</b> {Datos.titulo}</h6>
                <h6><b>Fecha:</b> {formatFecha(Datos.fecha)}</h6>
              </div>
              {mostrar()}
               </div>
               <div className="tabla-imprimir" dangerouslySetInnerHTML={{ __html: Datos.redaccion }} />
            </div>
            </div>

          </div>
          <br />
        </form>
      </div>
    )
    
}

 export default LeerGuion



