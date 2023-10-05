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
        
    } catch (error) {
        
    }

  }

  const mostrar=()=>{
if(cargado === 1){
  return(

    <div className="Row">
                <h6><b>Fuente:</b> {Datos.fuente.nombre_Fuente}</h6>
                <h6><b>Categoría:</b>{Datos.categoria.nombre_Categoria} </h6>
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
                <h6><b>Título:</b> {Datos.titulo}</h6>
                <h6><b>Fecha:</b> {formatFecha(Datos.fecha)}</h6>
              </div>
              {mostrar()}
            </div>
            <div className="tabla-imprimir" dangerouslySetInnerHTML={{ __html: Datos.redaccion }} />
          </div>
          <br />
        </form>
      </div>
    )
    
}

 export default LeerGuion



