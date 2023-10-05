import { Link } from "react-router-dom";
import {FaAngleLeft} from 'react-icons/fa';
import {FaPrint} from 'react-icons/fa';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import React, { useRef} from 'react';
import axios from 'axios'
// import jsPDF from 'jspdf';

const LeerGuion=()=>{
    const [Datos, SetDatos] = useState([]);
    const {id} = useParams()
    const tablaRef = useRef(null);
    useEffect(()=>{
      GetDatos();
  },[]);
  
  const GetDatos = async()=>{
    try {
        const respuesta = await axios.get('https://localhost:7201/Nota/GetByID/'+id);
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
    } catch (error) {
        
    }

  }

//   const Imprimir = () => {
//     const pdf = new jsPDF();
//     const tablaContenido = tablaRef.current.innerHTML;
//     pdf.html(tablaContenido, {
//       callback: function (pdf) {
//         pdf.save("guion.pdf");
//       },
//     });
//   }

  
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
                <button type="button" id='btn-imprimir' className="btn btn-primary" >  <FaPrint size={20} color="white" /> Imprimir</button>
              </div>
            </div>
            <br />
            <div className="Grid">
              <div className="Row">
                <h6><b>Título:</b> Sample text</h6>
                <h6><b>Fecha:</b> 10/10/2023</h6>
              </div>
              <div className="Row">
                <h6><b>Fuente:</b> TXT</h6>
                <h6><b>Categoría:</b> </h6>
                <h6><b>Formato:</b> </h6>
                <h6><b>Reportero:</b> </h6>
              </div>
            </div>
            <div className="tabla-imprimir" dangerouslySetInnerHTML={{ __html: Datos.redaccion }} />
          </div>
          <br />
        </form>
      </div>
    )
    
}

 export default LeerGuion



