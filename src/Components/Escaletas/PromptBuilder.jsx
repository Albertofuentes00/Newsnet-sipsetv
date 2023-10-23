import React, { useState, useEffect , useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { show_alerta } from "../../Funciones"
import html2pdf from 'html2pdf.js';
import {FaFilePdf} from 'react-icons/fa'


function Prompt() {
  const [DatosEscaleta, SetDatosEscaleta] = useState([]);
  const [DatosRedacciones, SetRedacciones] = useState([]);
  const {id} = useParams()
  const tablaRef = useRef(null);
  const [cargado, Setcargado] = useState(false);
  useEffect(()=>{
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    GetDatosEscaleta();
    //   Obtenertabla();
    //   GetRedacciones();
    // setTimeout(() => {
    //   ConstruirPrompt();
    // }, 2000);
    setTimeout(() => {
      closeModal();
    }, 3000);
},[]);

const GetDatosEscaleta = async()=>{
  try {
      // const respuesta = await axios.get('https://localhost:7201/Escaleta/GetByID/'+pkesc);
      const respuesta = await axios.get('https://localhost:7201/Escaleta/GetByID/'+ id);
      console.log(respuesta.data.result);
      SetDatosEscaleta(respuesta.data.result);
      Setcargado(1);

  } catch (error) {
      
  }

}


useEffect(() => {
  try {
    if (cargado) {
      GetRedacciones();
      // Setcargado(false); // Elimina esta línea
    }
  } catch (error) {
  }
}, [cargado]);


const GetRedacciones = async () => {
  if(cargado === 1){
    try {
      var table = document.getElementById('sortable-table');
      var rows = table.getElementsByTagName('tr');
      var hojanotas = document.getElementById('Notas');
      let acumuladoRedacciones = ''; 
      var tabla;
      for (var i = 1; i < rows.length; i++) {
        const row = rows[i]; 
  
        if (row.cells[6].textContent !== '-' && row.cells[6].textContent !== '') {
  
            const response = await axios.get('https://localhost:7201/Nota/GetByID/' + row.cells[6].textContent);
            console.log(response.data.result);
            tabla = response.data.result;
            if(tabla.redaccion === ''){
               var t = '<table id="tabla-nota"><thead><tr><th>Anotación</th><th>Descripción</th></tr></thead><tbody contenteditable="true"><tr><td></td><td>Sin redacción</td></tr></tbody></table>'
               acumuladoRedacciones += t;
            }else{
              acumuladoRedacciones += tabla.redaccion;
            }
          
        }
      }
      hojanotas.innerHTML = acumuladoRedacciones;
      asignarIdUnicoALasTablas();
    } catch (error) {
      console.log(error);
    }
  }

};

function asignarIdUnicoALasTablas() {

  const notasDiv = document.getElementById("Notas");

  if (notasDiv) {

    const tablas = notasDiv.querySelectorAll("table");


    tablas.forEach((tabla, index) => {
      const nuevoId = `tabla-Nota-${index + 1}`;
      tabla.id = nuevoId;
    });
  }
  setTimeout(() => {
    ConstruirPrompt();
  }, 3000);

}





const Obtenertabla = ()=>{
  try {
    if(DatosEscaleta.tabla != ""){
      return(
  
        <div id='Escaleta'>
        <div hidden='true' ref={tablaRef} dangerouslySetInnerHTML={{ __html: DatosEscaleta.tabla}} />
        </div>
  
      );
   
    }
  } catch (error) {
    
  }

}



const ConstruirPrompt = () => {
    var table = document.getElementById('sortable-table');
    var rows = table.getElementsByTagName('tr');
    var hoja = document.getElementById('Prompt');
    var numNota = 1;
    for (var i = 1; i < rows.length; i++) {
      (function (row) {
        var titulo = document.createElement('label');
        const contenidoColumnaDerecha = [];
        if(row.cells[6].textContent === '-' || row.cells[6].textContent === ''){
          //Es una indicacion
          titulo.textContent = '--- '+ row.cells[3].textContent + ' ---';
          
        hoja.appendChild(titulo);
        titulo.classList.add('Texto-prompt');
        }else{
          //Es una nota
          titulo.textContent = 'NOTA ' + numNota + ' ' + row.cells[5].textContent + ' .- ' + row.cells[3].textContent;
          if(row.cells[5].textContent === 'TXT'){
            var Nota = document.getElementById('tabla-Nota-' + numNota);
            const filas = Nota.querySelectorAll("tr");
           filas.forEach((fila) => {
           const celdas = fila.querySelectorAll("td");
           if (celdas.length >= 2) {
            contenidoColumnaDerecha.push(celdas[1].textContent);
           }
            });
            var contenidoTexto = contenidoColumnaDerecha.join('\n');
            var contenido = document.createElement('label');
            contenido.textContent = contenidoTexto;
            contenido.classList.add('Nota-prompt');
          }
          else{
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
const handleDownloadPDF = () => {
  const content = contentRef.current;
  const opt = {
    margin: 10,
    filename: 'Prompter'+'_'+ fechaFI +'.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf(content, opt);


};

function goBack() {
  window.history.back();
}

return (
  <div>
    {Obtenertabla(true)}
       <div hidden='true'  id='Notas'>

       </div>


    <div className="Auth-form-container">
        <form className="Auth-form-Guion">
          <div className="Auth-form-content">
          <button type='button' onClick={()=>goBack()}>Volver</button>

          <button type='button' class='btn btn-danger' onClick={handleDownloadPDF}> <FaFilePdf size={20} color='white'/> Generar PDF </button>
            <div ref={contentRef} id='Prompt' className='Hoja-prompt'>



            </div>
          </div>
          <br />
        </form>
      </div>





      <div id="myModal" class="cargando-modal">
    
    <main>
    <svg class="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
            <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
        </g>
        <g stroke-dasharray="180 656">
            <path class="ip__worm1" stroke="url(#grad1)" stroke-dashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
            <path class="ip__worm2" stroke="url(#grad2)" stroke-dashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
        </g>
    </g>
</svg>

</main>
<h2 className='Cargando-text'>Generando prompter...</h2>

  </div>




  </div>
);

}


export default Prompt