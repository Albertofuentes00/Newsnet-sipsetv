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
        const respuesta = await axios.get('https://localhost:7201/Redaccion/GetNota/'+id);
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
            <h2 className="Auth-form-title">Guión Cancun Vive 03/07/23</h2>
            <br />
            <div>
              <form className="Button-form">
                <Link to='/Notas'>
                  <button type="button" className="btn btn-dark"> <FaAngleLeft size={20} color="white" /> Regresar</button>
                </Link>
                <button type="button" id='btn-imprimir' className="btn btn-primary" >  <FaPrint size={20} color="white" /> Imprimir Guión </button>
              </form>
            </div>
            <br />
            <div className="tabla-imprimir" dangerouslySetInnerHTML={{ __html: Datos.descripcion }} />
          </div>
          <br />
        </form>
      </div>
    )
    
}

 export default LeerGuion



