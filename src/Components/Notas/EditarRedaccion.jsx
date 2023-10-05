
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa'
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { show_alerta } from "../../Funciones"


const EditarGuion = () => {
  const [Datos, SetDatos] = useState([]);
  const [Redaccion, SetRedaccion] = useState([]);
  const tablaRef = useRef(null);
  const [verdad,setverdad] = useState('');



  const Autoguardado = () => {
    const tablaContenido = tablaRef.current.innerHTML;
    try {
      const parametros = {Vredaccion: tablaContenido };
      axios.patch('https://localhost:7201/Nota/PutRedaccion/' + id, parametros).then(function (respuesta) {
        console.log(respuesta.data.result);

        show_alerta('El autoguardado se ejecuto','Guardado');
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
    GetDatos();
  };


  
  const {id} = useParams()

  const InsertarRedaccion = () => {
    const tablaContenido = tablaRef.current.innerHTML;
    try {
      const parametros = {Vredaccion: tablaContenido };
      axios.patch('https://localhost:7201/Nota/PutRedaccion/' + id, parametros).then(function (respuesta) {
        console.log(respuesta.data.result);

        show_alerta('Los datos se guardaron correctamente','Guardado');
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }



  const agregarFila = () => {
    const tabla = document.getElementById('tabla-nota');
    const nuevaFila = tabla.insertRow();
    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    celda1.innerHTML = '';
    celda2.innerHTML = '';
  };

  useEffect(()=>{
    GetDatos();
    try {
      const intervalo = setInterval(Autoguardado, 6000);

    // Devuelve una función de limpieza para detener el intervalo cuando el componente se desmonta.ffffsd
    return () => clearInterval(intervalo);

    
    } catch (error) {
      
    }
   
},[]);


function validacion() {
  try { 
    if (Datos.redaccion === "") {
      return (
        <table id='tabla-nota' >
        <thead>
          <tr>
            <th>Anotación</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody contentEditable='true'>
          <tr >
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      );
    } 
    else {
      return(
        <div  dangerouslySetInnerHTML={{ __html: Datos.redaccion }} />
      );
    }
  } catch (error) {
    console.log(error);
  }
   
  }



const GetDatos = async () => {
  try {
    const respuesta = await axios.get('https://localhost:7201/Nota/GetByID/' + id);
    
    if (respuesta.data.result) {
      // Si la respuesta contiene datos válidos, actualiza el estado
      console.log(respuesta.data.result);
      SetDatos(respuesta.data.result);
      setverdad(1);
      console.log(verdad);
    } else {
      // Si no hay datos, puedes manejar el caso aquí
      console.log('No se encontraron datos');
    }
  } catch (error) {
    // Maneja el error si ocurre uno
    console.error('Error al obtener datos:', error);
  }
};



return (
  <div className="Auth-form-container">
    <form className="Auth-form-Guion">
      <div className="Auth-form-content">
        <h2 className="Auth-form-title">Crear guión</h2>
        <h3 className="Text-helper">Escriba en las cuadrillas a continuación los guiones que desea agregar a la nota</h3>
        <div>
        {Datos.length > 0 && (
       <div>
            <h3>{Datos[0].nota.titulo}</h3>
    
       </div>

  )}
        </div>
        <br />
        <div>
          <form className="Button-form">
            <Link to="/Notas">
                <button type="button" className="btn btn-dark">
                  <FaAngleLeft size={20} color="white" /> Regresar
                </button>
            </Link>

            <button type="button" className="btn btn-success" onClick={()=> InsertarRedaccion()}>
              <FaSave size={20} color="white" /> Guardar cambios
            </button>

            <button id='agregar-celda' type="button" className="btn btn-primary" onClick={agregarFila}>
              <FaPlusSquare size={20} color="white" /> Agregar Celda
            </button>
            
            <button type="button" className="btn btn-danger">
              <FaMinusSquare size={20} color="white" /> Quitar Celda
            </button>
          </form>
        </div>
        <br />
        <div>

        

          <div className='tabla-notaStyle' ref={tablaRef}>

          {validacion(true)}

          </div>
    </div>
      </div>
      <br />
    </form>
  </div>
);
};
export default EditarGuion;

