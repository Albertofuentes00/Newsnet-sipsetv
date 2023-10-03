
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa'
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const EditarGuion = () => {
  const [Datos, SetDatos] = useState([]);
  const [Redaccion, SetRedaccion] = useState([]);

  const {id} = useParams()

const InsertarRedaccion = () =>{
  var parametros;
  console.log("La redaccion es:" + Redaccion.toString());
  try {
    parametros = {descripcion:Redaccion.trim(),fknota:id};
    axios.post('https://localhost:7201/Redaccion/Post', parametros).then(function(respuesta){
    console.log(respuesta.data.result);
  })
  .catch(function(error){
    console.log(error);
  });
  } catch (error) {
    console.log(error);
  }
}

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

            <button type="button" className="btn btn-primary" >
              <FaPlusSquare size={20} color="white" /> Agregar Celda
            </button>
            
            <button type="button" className="btn btn-danger">
              <FaMinusSquare size={20} color="white" /> Quitar Celda
            </button>
          </form>
        </div>
        <br />
        <div>
          <div className="textarea-container">
          <table id='tabla-nota' onChange={(e)=> SetRedaccion(e.target.value)}>
                            <thead>
                                <tr>
				                        <th >Anotacion</th>
                            	   <th >Descripcion</th>
                                </tr>
                            </thead>
                            <tbody contentEditable='true'>
                                <tr>
                                <td>INSERTO MARTHA</td>
                                <td>Inserto Alondra Expositor particpante de la feria "Colectivo multicultural CANCUN" </td>
                                </tr>
                                <tr>
                                <td>INSERTO MARTHA</td>
                                <td>INSERTO 11:26 ES UN PUNTO 12:11 NOS AYUDO LO MISMO </td>
                                </tr>
                            </tbody>
                        </table>
          </div>
    </div>
      </div>
      <br />
    </form>
  </div>
);
};
export default EditarGuion;

