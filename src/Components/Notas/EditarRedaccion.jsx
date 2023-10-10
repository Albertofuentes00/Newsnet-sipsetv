
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


  const quitarFila = () => {
    const tabla = document.getElementById('tabla-nota');
    const filasSeleccionadas = tabla.querySelectorAll('tr.selected');
    if (filasSeleccionadas.length > 0) {   
      filasSeleccionadas.forEach((fila) => {
        tabla.deleteRow(fila.rowIndex);
      });
    } else {
      show_alerta('No hay filas seleccionadas para eliminar', 'Aviso');
    }
  };

  const handleQuitarCeldaClick = () => {
    quitarFila();
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
  nuevaFila.onclick = function() {
    seleccionarFila(this);
  };

  const celda1 = nuevaFila.insertCell(0);
  const celda2 = nuevaFila.insertCell(1);
  celda1.innerHTML = '';
  celda2.innerHTML = '';
  };
  const seleccionarFila = (fila) => {
    if (fila.classList.contains('selected')) {
      fila.classList.remove('selected');
    } else {
      fila.classList.add('selected');
    }
  };


  useEffect(()=>{


    
    GetDatos();
    try {
      const intervalo = setInterval(Autoguardado, 6000000);

      const handleSuprKeyPress = (event) => {
        if (event.key === 'Delete' ) {
          handleQuitarCeldaClick();
        }
        else if(event.key === 'F4'){
          agregarFila();
        }
        else{

        }
      };

      document.addEventListener('keydown', handleSuprKeyPress);
    return () =>  {
      document.removeEventListener('keydown', 
      handleSuprKeyPress); 
      clearInterval(intervalo);
    }
    
    } catch (error) {
      
    }
   
},[]);


const handleRowClick = (event) => {
  const fila = event.currentTarget; 
  if (fila.classList.contains('selected')) {
    fila.classList.remove('selected');
  } else {
    fila.classList.add('selected');
  }
};

function validacion() {
  try { 
    if (Datos.redaccion === "") {
      return (
        <div ref={tablaRef}>
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
        </div>

      );
    } 
    else {
      return(
        <div ref={tablaRef}  dangerouslySetInnerHTML={{ __html: Datos.redaccion }} />
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
      console.log(respuesta.data.result);
      SetDatos(respuesta.data.result);
      setverdad(1);
      console.log(verdad);

      const tabla = document.getElementById('tabla-nota');
      const filas = tabla.getElementsByTagName('tr');
      for (let i = 2; i < filas.length; i++) {
        
        filas[i].addEventListener('click', handleRowClick);
      }
    } else {
      console.log('No se encontraron datos');
    }
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};



return (
  <div className="Auth-form-container">
    <form className="Auth-form-Guion">
      <div className="Auth-form-content">
        <div className='Row'>
          <h2>Redactar guión</h2>
          <div className='button-form'>
            <Link to="/Notas">
                <button type="button" className="btn btn-dark">
                  <FaAngleLeft size={20} color="white" /> Regresar
                </button>
            </Link>

            <button type="button" className="btn btn-success" onClick={()=> InsertarRedaccion()}>
              <FaSave size={20} color="white" /> Guardar cambios
            </button>
          </div>
        </div>

        <div>
        {Datos.length > 0 && (
       <div>
            <h3>{Datos[0].nota.titulo}</h3>
    
       </div>

  )}
        </div>
        <br />
        <div>
            <button id='agregar-celda' type="button" className="btn btn-primary" onClick={agregarFila}>
              <FaPlusSquare size={20} color="white" /> Agregar Celda
            </button>
            
            <button id='quitar-celda' type="button" className="btn btn-danger" onClick={handleQuitarCeldaClick}>
              <FaMinusSquare size={20} color="white" /> Quitar Celdas
            </button>
        </div>
        
        <div>
          <div className='tabla-notaStyle' >

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

//hola