
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa'
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const EditarGuion = () => {
  const [Datos, SetDatos] = useState([]);
  const {id} = useParams()
  useEffect(()=>{
    GetDatos();
},[]);

const GetDatos = async()=>{
    const respuesta = await axios.get('https://localhost:7201/Guion/GetNota/'+id);
    console.log(respuesta.data.result);
    SetDatos(respuesta.data.result);
}


const [textAreas, setTextAreas] = useState(['Texto largo...']);
const handleAddTextArea = () => {
  setTextAreas((prevState) => [...prevState, '']);
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
const handleChange = (event, index) => {
  const { value } = event.target;
  const updatedTextAreas = [...textAreas];
  updatedTextAreas[index] = value;
  setTextAreas(updatedTextAreas);
  setTextareaValue(value);
  event.target.style.height = 'auto';
  event.target.style.height = event.target.scrollHeight + 'px';
};
const textareaLeftRef = useRef(null);
const textareaRightRef = useRef(null);

useEffect(() => {
  const textareaLeft = textareaLeftRef.current;
  const textareaRight = textareaRightRef.current;

  const handleTextareaInput = () => {
    textareaRight.style.height = textareaLeft.scrollHeight + 'px';
  };

  const handleTextareaScroll = () => {
    textareaRight.scrollTop = textareaLeft.scrollTop;
  };

  textareaLeft.addEventListener('input', handleTextareaInput);
  textareaLeft.addEventListener('scroll', handleTextareaScroll);

  return () => {
    textareaLeft.removeEventListener('input', handleTextareaInput);
    textareaLeft.removeEventListener('scroll', handleTextareaScroll);
  };
}, []);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form-Guion">
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Editar guión</h2>
          <h3 className="Text-helper">Escriba en las cuadrillas a continuación los guiones que desea agregar a la nota</h3>
          <div>
            <h3>TITULO: SAMPLE TEXT</h3>
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
          {Datos.map((dato, index) => (
  <div key={index}>
    {textAreas.map((text, innerIndex) => (
      <div className="textarea-container" key={innerIndex}>
        <textarea
          className="textarea-left"
          ref={textareaLeftRef}
          id={`textarea-left-${index}-${innerIndex}`}
          style={{ width: "300px", resize: "none" }}
          value={dato.anotacion}
          onChange={(event) => handleChange(event, innerIndex)}
        />

        <textarea
           className="textarea-right"
           ref={textareaRightRef}
          id={`textarea-right-${index}-${innerIndex}`}
          style={{ width: "300px", resize: "none" }}
          value={dato.descripcion}
        />
      </div>
    ))}
  </div>
))}
        </div>
        <br />
      </form>
    </div>
  );
};

export default EditarGuion;