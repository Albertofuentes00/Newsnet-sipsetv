import React, { useState, useEffect , useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { show_alerta } from "../../Funciones"


function Prompt() {
  const [DatosEscaleta, SetDatosEscaleta] = useState([]);
  const {id} = useParams()
  const tablaRef = useRef(null);
  useEffect(()=>{
    // GetDatosEscaleta();
    
},[]);

const GetDatosEscaleta = async()=>{
  var pkesc = document.getElementById('notaesc').value;
  try {
      const respuesta = await axios.get('https://localhost:7201/Escaleta/GetByID/'+pkesc);
      console.log(respuesta.data.result);
      SetDatosEscaleta(respuesta.data.result);
      Obtenertabla();
      ConstruirPrompt();
  } catch (error) {
      
  }
}


const Obtenertabla = ()=>{
  try {
    if(DatosEscaleta.tabla != ""){
      return(
  
        <div>
        <div hidden='true' ref={tablaRef} dangerouslySetInnerHTML={{ __html: DatosEscaleta.tabla}} />
        <label>Tabla Cargada...</label>
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
      var contenido = document.createElement('label');
      if(row.cells[6].textContent === '-' || row.cells[6].textContent === ''){
        //Es una indicacion
        titulo.textContent = '*** '+ row.cells[3].textContent + ' ***';
      }else{
        //Es una nota
        titulo.textContent = 'Nota ' + numNota + ' --- ' + row.cells[3].textContent;
        numNota = numNota + 1;
      }
      titulo.classList.add('Texto-prompt');
      hoja.appendChild(titulo);
    })(rows[i]);
  }
};


return (
  <div>
    <input id='notaesc' placeholder="PkEscaleta" />
    <button className='btn btn-success' onClick={() => GetDatosEscaleta()}>Generar</button>
    {Obtenertabla(true)}



    <div className="Auth-form-container">
        <form className="Auth-form-Guion">
          <div className="Auth-form-content">
            <div id='Prompt' className='Hoja-prompt'>



            </div>
          </div>
          <br />
        </form>
      </div>
  </div>
);

}


export default Prompt