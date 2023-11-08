import { FaAngleLeft } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { show_alerta } from '../../Funciones';
import { API_KEY } from '../API_URL';

const EditarGuion = () => {
  const [Datos, SetDatos] = useState([]);
  const tablaRef = useRef(null);
  const [verdad, setverdad] = useState('');
  const [cargado, Setcargado] = useState(0);

  const Autoguardado = () => {
    const tablaContenido = tablaRef.current.innerHTML;
    try {
      const parametros = { Vredaccion: tablaContenido };
      axios
        .patch(API_KEY+'/Nota/PutRedaccion/' + id, parametros)
        .then(function (respuesta) {
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

  const { id } = useParams();

  const InsertarRedaccion = () => {
    const tablaContenido = tablaRef.current.innerHTML;

    try {
      const parametros = { Vredaccion: tablaContenido };
      axios
        .patch(API_KEY+'/Nota/PutRedaccion/' + id, parametros)
        .then(function (respuesta) {
          console.log(respuesta.data.result);

          show_alerta('Los datos se guardaron correctamente', 'Guardado');
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarFila = () => {
    const tabla = document.getElementById('tabla-nota');
    const nuevaFila = tabla.insertRow();
    nuevaFila.onclick = function () {
      seleccionarFila(this);
    };

    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    celda1.innerHTML = '';
    celda2.innerHTML = '';
    nuevaFila.onpaste = function (event) {
      handlePaste(event, this);
    };


  };





  const seleccionarFila = (fila) => {
    if (fila.classList.contains('selected')) {
      fila.classList.remove('selected');
    } else {
      fila.classList.add('selected');
    }
  };

  useEffect(() => {
    GetDatos();
    try {
      const intervalo = setInterval(Autoguardado, 300000);


      const handleSuprKeyPress = (event) => {
        if (event.key === 'Delete') {
          handleQuitarCeldaClick();
        } else if (event.key === 'F4') {
          agregarFila();
        } else {
        }
      };

      document.addEventListener('keydown', handleSuprKeyPress);
      return () => {
        document.removeEventListener('keydown', handleSuprKeyPress);
        clearInterval(intervalo);
      };
    } catch (error) {}
  }, []);

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
      if (Datos.redaccion === '') {
        return (
          <div ref={tablaRef}>
            <table id="tabla-nota">
              <thead>
                <tr>
                  <th>Anotación</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody contentEditable="true">
                <tr>
                  <td onPaste={handlePaste}></td>
                  <td onPaste={handlePaste}></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      } else {
        return (
          <div
            ref={tablaRef}
            dangerouslySetInnerHTML={{ __html: Datos.redaccion }}
          />
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  const GetDatos = async () => {
    try {
      const respuesta = await axios.get(API_KEY + '/Nota/GetByID/' + id);
      const elemento = document.querySelector('.Auth-form-Escaletabotones');
      const threshold = elemento ? elemento.offsetTop : 0;
  
      Setcargado(1);
  
      window.addEventListener('scroll', () => {
        if (elemento && window.scrollY >= threshold) {
          elemento.style.position = 'sticky';
          elemento.style.top = '0';
        } else if (elemento) {
          elemento.style.position = 'static';
        }
      });
  
      if (respuesta.data.result) {
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
        setverdad(1);
        console.log(verdad);
  
      
      } else {
        console.log('No se encontraron datos');
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };
  

  useEffect(() => {
    const tabla = document.getElementById('tabla-nota');
    if (tabla) {
      const filas = tabla.getElementsByTagName('tr');
      for (let i = 2; i < filas.length; i++) {
        filas[i].addEventListener('click', handleRowClick);
      }
    } else {
      console.log('No se encontró la tabla-nota');
    }
  }, [Datos.redaccion]);

  const mostrar = () => {
    if (cargado === 1) {
      return (
        <div className="redaccion-nota">
          <h5>Redactar guión de: </h5>
          <b><h7> <u>Título:</u> {Datos.titulo}</h7></b>
          <br></br>
          <b><h7> <u>Formato:</u> {Datos.formato.nombre_Formato}</h7></b>
        </div>
      );
    }
  };

  function goBack() {
    window.history.back();
  }


  function handlePaste(event) {
    event.preventDefault();
    const text = (event.clipboardData || window.clipboardData).getData('text/plain');
    document.execCommand('inserttext', false, text);
  }

  return (
    <div className="Auth-form-container">
      <div className="Grid">
        <div className="Auth-form-Escaletabotones">
          <div className="Row">
            {mostrar()}

            <div className="button-form">
              <button
                onClick={() => goBack()}
                type="button"
                className="btn btn-dark"
              >
                <FaAngleLeft size={20} color="white" /> Regresar
              </button>

              <button
                type="button"
                className="btn btn-success"
                onClick={() => InsertarRedaccion()}
              >
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
          <div>
            <div class="tooltip-container">
              <button
                id="agregar-celda"
                type="button"
                className="BtnAddIndicacion"
                onClick={agregarFila}
              >
                <FaPlusSquare size={20} color="black" /> Agregar Celda
              </button>
              <div class="tooltip-text">
                Agrega una fila de celdas al guión actual
              </div>
            </div>

            <div class="tooltip-container">
              <button
                id="quitar-celda"
                type="button"
                className="BtnEliminar"
                onClick={handleQuitarCeldaClick}
              >
                <FaMinusSquare size={20} color="black" /> Quitar Celdas
              </button>
              <div class="tooltip-text">Elimina las filas sombreadas</div>
            </div>
          </div>
        </div>

        <form className="Auth-form-Guion">
          <div className="Auth-form-content">
            <div>
              {Datos.length > 0 && (
                <div>
                  <h3>{Datos[0].nota.titulo}</h3>
                </div>
              )}
            </div>

            <br />

            <div>
              <div className="tabla-notaStyle">{validacion(true)}</div>
            </div>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};
export default EditarGuion;
