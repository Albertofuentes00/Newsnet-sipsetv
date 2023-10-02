
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa'
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const EditarGuion = () => {
  const [textAreas, setTextAreas] = useState(['Texto largo...']);
  const [Datos, SetDatos] = useState([]);
  const [Redaccion, SetRedaccion] = useState([]);
  const [Anotacion, SetAnotacion] = useState('');
  const [Descripcion, SetDescripcion] = useState('');
  const [Fecha, SetFecha] = useState('');
  const [Hora, SetHora] = useState('');
  const [numTextAreas, setNumTextAreas] = useState(1);

  const {id} = useParams()
  useEffect(() => {

    GetDatos();
  }, []);

const GetDatos = async()=>{
  try {
    const respuesta = await axios.get('https://localhost:7201/Redaccion/GetNota/'+id);
    console.log(respuesta.data.result);
    SetAnotacion(respuesta.data.result[0].anotacion);
  SetDescripcion(respuesta.data.result[0].descripcion);
  SetFecha(respuesta.data.result[0].fecha);
  SetHora(respuesta.data.result[0].hora); 

  SetDatos(respuesta.data.result);

  } catch (error) {
    
  }

}


const handleAddTextArea = () => {
  setTextAreas((prevState) => [...prevState, '']);
  setNumTextAreas((prevNum) => prevNum + 1); // Incrementamos el número de textareas
};

const [textareaValue, setTextareaValue] = useState('');

const handleChangeHeight = (large) => {
  const { value } = large.target;
  setTextareaValue(value);
  large.target.style.height = 'auto';
  large.target.style.height = large.target.scrollHeight + 'px';
};

const handleRemoveTextArea = (index) => {
  const updatedTextAreas = [...textAreas];
  updatedTextAreas.splice(index, 1);
  setTextAreas(updatedTextAreas);
};

const handleInput = (event, index) => {
  const { value, scrollHeight } = event.target;
  event.target.style.height = scrollHeight + 'px';
  const updatedTextAreas = [...textAreas];
  updatedTextAreas[index] = value;
  setTextAreas(updatedTextAreas);
};


function ComponenteConHTML({ dato }) {
  return <div dangerouslySetInnerHTML={{ __html: dato }} />;
}



 useEffect(()=>{
      GetDatos();
  },[]);

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

            <button type="button" className="btn btn-success">
              <FaSave size={20} color="white" /> Guardar cambios
            </button>

            <button type="button" className="btn btn-primary" onClick={handleAddTextArea}>
              <FaPlusSquare size={20} color="white" /> Agregar Celda
            </button>
            
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveTextArea()}>
              <FaMinusSquare size={20} color="white" /> Quitar Celda
            </button>
          </form>
        </div>
        <br />
        <div>
      {Datos.map((Dato, index) => (
        <div key={index}>
          <div className="textarea-container">
          <textarea
  className="textarea-left"
  id={`textarea-left-${index}`}
  style={{ width: "300px", resize: "none" }}
  onChange={(e)=> SetAnotacion(e.target.value)}
  value={Dato.anotacion}
/>
<textarea
  className="textarea-right"
  id={`textarea-right-${index}`}
  style={{ width: "300px", resize: "none" }}
  onChange={(e)=> SetDescripcion(e.target.value)}
  value={Dato.descripcion}
/>
<div dangerouslySetInnerHTML={{ __html: Dato.descripcion }} />
          </div>
        </div>
      ))}
      {/* Generamos nuevos textarea-container según el número actual */}
      {Array.from({ length: numTextAreas - 1 }, (_, index) => (
        <div className="textarea-container" key={index + Datos.length}>
          <textarea
            className="textarea-left"
            id={`textarea-left-${index + Datos.length}`}
            style={{ width: "300px", resize: "none" }}
          />
          <textarea
            className="textarea-right"
            id={`textarea-right-${index + Datos.length}`}
            style={{ width: "300px", resize: "none" }}
            
          />
        </div>
      ))}
    </div>
      </div>
      <br />
    </form>
  </div>
);
};
export default EditarGuion;

