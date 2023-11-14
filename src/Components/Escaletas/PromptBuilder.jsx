import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { show_alerta } from '../../Funciones';
import { API_KEY } from '../API_URL';
import { FaFilePdf } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';

function Prompt() {
  // Inicializacion de variables
  const [DatosEscaleta, SetDatosEscaleta] = useState([]);
  const { id } = useParams();
  const tablaRef = useRef(null);
  const [cargado, Setcargado] = useState(false);
  useEffect(() => {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Desactivar el scroll
  window.scrollTo(0, 0);
    GetDatosEscaleta();
    setTimeout(() => {
      closeModal();
    }, 3000);
  }, []);


  const GetDatosEscaleta = async () => {  // Obtiene los datos de la API 
    try {
      // const respuesta = await axios.get('https://localhost:7201/Escaleta/GetByID/'+pkesc);
      const respuesta = await axios.get(
        API_KEY + '/Escaleta/GetByID/' + id
      );
      console.log(respuesta.data.result);
      SetDatosEscaleta(respuesta.data.result);
      Setcargado(1);
    } catch (error) {}
  };

  useEffect(() => {
    try {
      if (cargado) {
        GetRedacciones();
        // Setcargado(false); // Elimina esta línea
      }
    } catch (error) {}
  }, [cargado]);

  const GetRedacciones = async () => {// Obtiene las redacciones de las notas
    if (cargado === 1) {
      try {
        var table = document.getElementById('sortable-table');
        var rows = table.getElementsByTagName('tr');
        var hojanotas = document.getElementById('Notas');
        let acumuladoRedacciones = '';
        var tabla;
        for (var i = 1; i < rows.length; i++) {
          const row = rows[i];

          if (
            row.cells[5].textContent !== '-' &&
            row.cells[5].textContent !== ''
          ) {
            const response = await axios.get(
              API_KEY + '/Nota/GetByID/' + row.cells[5].textContent
            );
            console.log(response.data.result);
            tabla = response.data.result;
            if (tabla.redaccion === '') {
              var t =
                '<table id="tabla-nota"><thead><tr><th>Anotación</th><th>Descripción</th></tr></thead><tbody contenteditable="true"><tr><td></td><td>Sin redacción</td></tr></tbody></table>';
              acumuladoRedacciones += t;
            } else {
              acumuladoRedacciones += tabla.redaccion;
            }
          }
        }
        hojanotas.innerHTML = acumuladoRedacciones;
        asignarIdUnicoALasTablas();
      } catch (error) {
        console.log(error);
        show_alerta('Error al generar prompter');
      }
    }
  };

  function asignarIdUnicoALasTablas() { 
    const notasDiv = document.getElementById('Notas');

    if (notasDiv) {
      const tablas = notasDiv.querySelectorAll('table');

      tablas.forEach((tabla, index) => {
        const nuevoId = `tabla-Nota-${index + 1}`;
        tabla.id = nuevoId;
      });
    }
    setTimeout(() => {
      ConstruirPrompt();
    }, 3000);
  }

  const Obtenertabla = () => {
    try {
      if (DatosEscaleta.tabla !== '') {
        return (
          <div id="Escaleta">
            <div
              hidden="true"
              ref={tablaRef}
              dangerouslySetInnerHTML={{ __html: DatosEscaleta.tabla }}
            />
          </div>
        );
      }
    } catch (error) {}
  };

  const ConstruirPrompt = () => {
    var table = document.getElementById('sortable-table');
    var rows = table.getElementsByTagName('tr');
    var hoja = document.getElementById('Prompt');
    var numNota = 1;
    for (var i = 1; i < rows.length; i++) {
      (function (row) {
        var titulo = document.createElement('label');
        const contenidoColumnaDerecha = [];
        if (
          row.cells[5].textContent === '-' ||
          row.cells[5].textContent === ''
        ) {
          //Es una indicacion
          titulo.textContent = '--- ' + row.cells[2].textContent + ' ---';

          hoja.appendChild(titulo);
          titulo.classList.add('Texto-prompt');
        } else {
          //Es una nota
          titulo.textContent =
            row.cells[1].textContent +
            ' ' +
            'NOTA ' +
            numNota +
            ' ' +
            row.cells[4].textContent +
            ' .- ' +
            row.cells[2].textContent;
          if (row.cells[4].textContent === 'TX') {
            var Nota = document.getElementById('tabla-Nota-' + numNota);
            const filas = Nota.querySelectorAll('tr');
            filas.forEach((fila) => {
              const celdas = fila.querySelectorAll('td');
              if (celdas.length >= 2) {
                contenidoColumnaDerecha.push(celdas[1].textContent);
              }
            });
            var contenidoTexto = contenidoColumnaDerecha.join('\n');
            var contenido = document.createElement('label');
            contenido.textContent = contenidoTexto;
            contenido.classList.add('Nota-prompt');
          } else {
            var Nota = document.getElementById('tabla-Nota-' + numNota);
            const firstRow = Nota.rows[1];
            const segundaColumna = firstRow.cells[1];
            var contenido = document.createElement('label');
            contenido.textContent = segundaColumna.textContent;
            contenido.classList.add('Nota-prompt');
          }
          numNota = numNota + 1;
          hoja.appendChild(titulo);
          hoja.appendChild(contenido);
          titulo.classList.add('Nota-titulo-prompt');
        }
      })(rows[i]);
    }
    show_alerta('Prompter cargado exitosamente');
  };

  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  const [fechaFI, setFechaFI] = useState(getFechaActualFI);

  function getFechaActualFI() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const contentRef = useRef(null);

  function goBack() {
    window.history.back();
  }

  const contentStyle = {
    margin: '20px', // Puedes ajustar el valor del margen según tus necesidades
  };


  const handleDownloadPDF = useReactToPrint({
    content: () => contentRef.current,
  });



  return (
    <div>
      {Obtenertabla(true)}
      <div hidden="true" id="Notas"></div>

      <div className="Auth-form-container">
        <form className="Auth-form-Guion">
          <div className="Auth-form-content">
          <button type='button' className="btn btn-dark" onClick={()=>goBack()} > <FaAngleLeft size={20} color="white" /> Volver</button>
          <button type='button' className='btn btn-danger' onClick={handleDownloadPDF}><FaFilePdf size={20} /> Opciones de impresión</button>
            <div ref={contentRef} style={contentStyle} id='Prompt' className='Hoja-prompt'>



            </div>
          </div>
          <br />
        </form>
      </div>

      <div id="myModal" class="cargando-modal">
        <main>
          <svg
            class="ip"
            viewBox="0 0 256 128"
            width="256px"
            height="128px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#8000FF" />
                <stop offset="100%" stop-color="#2673fa" />
              </linearGradient>
              <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stop-color="#2673fa" />
                <stop offset="100%" stop-color="#8000FF" />
              </linearGradient>
            </defs>
            <g fill="none" stroke-linecap="round" stroke-width="16">
              <g class="ip__track" stroke="#ddd">
                <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
              </g>
              <g stroke-dasharray="180 656">
                <path
                  class="ip__worm1"
                  stroke="url(#grad1)"
                  stroke-dashoffset="0"
                  d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"
                />
                <path
                  class="ip__worm2"
                  stroke="url(#grad2)"
                  stroke-dashoffset="358"
                  d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"
                />
              </g>
            </g>
          </svg>
        </main>
        <h2 className="Cargando-text">Generando prompter...</h2>
      </div>
    </div>
  );
}

export default Prompt;
