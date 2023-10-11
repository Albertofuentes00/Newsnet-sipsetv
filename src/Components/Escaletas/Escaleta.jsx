import React, { useState, useEffect , useRef} from 'react';
import axios from 'axios';
import { FaAngleLeft } from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import {FaFilePdf} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa';
import {BsFillSignpostFill} from 'react-icons/bs';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { show_alerta } from "../../Funciones"


function Table() {


  const [DatosEscaleta, SetDatosEscaleta] = useState([]);
  const [filasSeleccionadas, setFilasSeleccionadas] = useState([]);
  const {id} = useParams()
  const tablaRef = useRef(null);
  const [cargado, Setcargado] = useState(0);
  useEffect(()=>{
    GetDatosEscaleta();
    
},[]);

const GetDatosEscaleta = async()=>{
  try {
      const respuesta = await axios.get('https://localhost:7201/Escaleta/GetByID/'+id);
      console.log(respuesta.data.result);
      SetDatosEscaleta(respuesta.data.result);
      Setcargado(1);
  } catch (error) {
      
  }
}

  const [fechaFI, setFechaFI] = useState(getFechaActualFI);
  const [fechaFF, setFechaFF] = useState(getFechaActualFF);

  function getFechaActualFI() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  function getFechaActualFF() {
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 1); // Suma 1 día para obtener la fecha de mañana

    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

  const tabla = document.getElementById('table');

  
  const [dragItem, setDragItem] = useState();
  const [Datos, SetDatos] = useState([]);
  // const [cargado, Setcargado] = useState(0);

  const handleDragStart = (index) => {
    setDragItem(index);
  };

  useEffect(() => {
    GetDatos();
  }, []); 
  const GetDatos = async()=>{
    try {
      const respuesta = await axios.get('https://localhost:7201/Nota/Get');
      SetDatos(respuesta.data.result);
    } catch (error) {
      console.log(error)
    }   
  }

  const buscar = async ()=>{
    try {
      var variable = document.getElementById("Buscador").value;
      var fechaFI = document.getElementById("FI").value;
      var fechaFF = document.getElementById("FF").value;
      if (variable == ""){
      try {
        const respuesta = await axios.get('https://localhost:7201/Nota/BuscarDefault/' + fechaFI+"/"+fechaFF)

        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) {
        
      }
     
      }else{
      try {
        const respuesta = await axios.get('https://localhost:7201/Nota/Buscar/' + variable+"/"+fechaFI+"/"+fechaFF)

        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) 
      {

      }
    }
    } catch (error) {
      console.log(error);
    }
    
  }

  const mostrar=()=>{
    if(cargado === 1){
      return(
    
        <div className='Grid'>
        <div className='Row'>
          <h6><b>Programa:</b> {DatosEscaleta.programa.nombre_Programa} </h6>
          <h6><b>Fecha:</b> {DatosEscaleta.fecha.split(' ')[0]}</h6>
        </div>
        <div className='Row'>
          <h6><b>Usuario:</b> {DatosEscaleta.usuario.nombre}</h6>
          <h6><b>Hora de inicio:</b> {DatosEscaleta.hora_Inicio}</h6>
        </div>
      </div>
      );
    }
  }

      function validacion() {
        try { 
          if (DatosEscaleta.tabla === "") {
            return (
              <div ref={tablaRef}>

           </div>
            );
          } 
          else {
            return(
              <div ref={tablaRef}  dangerouslySetInnerHTML={{ __html: DatosEscaleta.tabla}} />
            );
          }
        } catch (error) {
          console.log(error);
        }
         
        }
try {
    const list = document.getElementById("sortable-list");
        let draggedItem = null;

        list.addEventListener("dragstart", function (event) {
            draggedItem = event.target;
            event.target.classList.add("grabbed");
            event.target.style.opacity = 0.5;
        });

        list.addEventListener("dragend", function (event) {
            event.target.style.opacity = "";
            event.target.classList.remove("grabbed");
        });

        list.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        list.addEventListener("dragenter", function (event) {
            if (event.target.tagName === "LI") {
                event.target.classList.add("dragged-over");
            }
        });

        list.addEventListener("dragleave", function (event) {
            if (event.target.tagName === "LI") {
                event.target.classList.remove("dragged-over");
            }
        });

        list.addEventListener("drop", function (event) {
            event.preventDefault();
            if (event.target.tagName === "LI") {
                event.target.classList.remove("dragged-over");

                const rect = event.target.getBoundingClientRect();
                const offsetY = event.clientY - rect.top - rect.height / 2;
                const isAfter = offsetY > 0;

                if (isAfter) {
                    list.insertBefore(draggedItem, event.target.nextSibling);
                } else {
                    list.insertBefore(draggedItem, event.target);
                }
            }
        });
} catch (error) {
    
}
        

  return (
          <div className="Auth-form-container">
  <div className="Auth-form-escaleta">
  <div className="Auth-form-content">
    <div className='Row'>
      <h1>Escaleta</h1>
      <div>
        <Link to='/Escaletas'>
          <button type="button" class="btn btn-dark"  > <FaAngleLeft size={20} color="white"/> Regresar</button>
        </Link>
          <button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
          <button type='button' class='btn btn-warning'> <FaEdit size={20} color='black'/> Editar Escaleta</button>
          <button type='button' class='btn btn-danger'> <FaFilePdf size={20} color='white'/> Generar PDF </button>
      </div>
      <br />
    </div>

      <br />

      <div className="Button-form">
              <button type="button" class="btn btn-primary" > <BsFillSignpostFill size={20} color='white'/> Agregar Indicación</button>          
              <button type="button" data-bs-toggle='modal' data-bs-target='#modalselect' class="btn btn-success"> <FaPlusSquare size={20} color='white'/> Agregar Nota</button>
      </div>

      <div class="container">

      {mostrar()}
        <div ref={tablaRef}  dangerouslySetInnerHTML={{ __html: DatosEscaleta.tabla}} />
    </div>

  </div>
      <br />

<div id='modalselect' className='modal fade' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content-notas'>
          <div className='modal-header'>
            <label className='h5'> </label>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          
            <h4> Agregar notas a escaleta </h4>
            <div className="Auth-form-searchbar">
      <div className="Row-searchbar">
        <div className="Row">
          <div className='buscador_admin'>
          <input id="Buscador" type="search" className="inputbus" placeholder="Buscar..." onKeyDown={(e) => {if (e.key === "Enter") {buscar(); }}}/>
          </div>
        </div>
        <div className="Row">
          <div className="Grid">
            <label> Fecha Inicial</label>
            <input
              id="FI"
              type="date"
              className="input-search"
              value={fechaFI}
              onChange={(e) => setFechaFI(e.target.value)}
            />
            <div className="Grid">
              <label> Fecha Final</label>
              <input id="FF" type="date" className="input-search" value={fechaFF}
              onChange={(e) => setFechaFF(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="Grid"></div>
          <button className="btn btn-primary" onClick={()=> buscar()}>
            <FaSearch size={20} color="white" /> Buscar
          </button>
        </div>
      </div>
    </div>
            <div className='modal-body-table'>
		 <div className="Auth-form-container-Main">
                    
     <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th> 
                    <th scope="col">Título</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Formato</th>
                    <th scope="col">Reportero</th>
                    <th scope="col">Fecha Mes/Dia/Año</th>
                    <th scope="col">Seleccionar</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                {Datos.map((Datos,i) =>(
                    <tr key={Datos.pkNota}>
                    <td>{Datos.pkNota}</td>
                    <td>{Datos.titulo}</td>
                    <td>{Datos.nombre_Categoria}</td>
                    <td>{Datos.nombre_Formato}</td>
                    <td>{Datos.nombre}</td>
                    <td>{Datos.fecha.split(' ')[0]}</td>
                    <td>
                    <input type="checkbox" className='check-box-nota'
                />
                    </td>
                    </tr>
                ))}
                </tbody>
              </table>   
                </div>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button id='AgregarNota' className="btn btn-success">
              <i className="fa-solid fa-floppy-disk" ></i> Agregar
              </button>
              <br />
            </div>
        </div>
      </div>
    </div>


  
  </div>
</div>
        );
      };



export default Table