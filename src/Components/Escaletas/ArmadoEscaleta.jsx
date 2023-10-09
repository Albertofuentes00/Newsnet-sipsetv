import React, { useState, useEffect } from 'react';
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


function Table() {
  const Save = () => {
    setRows.Save()
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
  const [rows, setRows] = useState([
    
    { id: '1', order: '-', content: '-', title: 'Bienvenida', reportero: '-', format: '-' },
    { id: '2', order: '-', content: '-', title: 'Corte comercial', reportero: '-', format: '-' },
    { id: '3', order: '-',content: '-', title: 'Salida', reportero: '-', format: '-' },
  ]);
  
  const handleAddRow = () => {
    const newRow = {
        id: rows.length + 1,order: '-', content: '-', title: 'INDICACION', reportero: '-', format: '-' 
    };

    setRows([...rows, newRow]);
  };
  

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newRows = [...rows];
    const [removed] = newRows.splice(result.source.index, 1);
    newRows.splice(result.destination.index, 0, removed);

    setRows(newRows);
  };
  

  const handleDragStart = (index) => {
    setDragItem(index);
  };
  
  const handleDragEnter = (e, index) => {
    e.target.style.backgroundColor = "#336699";
    const newRows = [...rows];
    const item = newRows[dragItem];
    newRows.splice(dragItem, 1);
    newRows.splice(index, 0, item);
    setDragItem(index);
    setRows(newRows);
  };
  
  const handleDragLeave = (e) => {
    e.target.style.backgroundColor = "rgb(192, 192, 192)";
  };
  
  const handleDrop = (e) => {
    e.target.style.backgroundColor = "rgb(192, 192, 192)";
  };

  useEffect(() => {
    GetDatos();
  }, []); // Cargar datos del localStorage al cargar el componente




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
      } catch (error) {
        
      }

    }
  
    } catch (error) {
      console.log(error);
    }
    
  }






  return (
          <div className="Auth-form-container">
  <div className="Auth-form-escaleta">
  <div className="Auth-form-content">
      <h3 className="Auth-form-title">Cancun Vive 22-06-23</h3>
      <form className="Button-form">
            <Link to='/Escaletas'>
              <button type="button" class="btn btn-dark"  > <FaAngleLeft size={20} color="white"/> Regresar</button>
            </Link>
              <button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
              <button type='button' class='btn btn-warning'> <FaEdit size={20} color='black'/> Editar Escaleta</button>
              <button type="button" class="btn btn-primary" onClick={handleAddRow} > <BsFillSignpostFill size={20} color='white'/> Agregar Indicación</button>
              
              <button type="button" data-bs-toggle='modal' data-bs-target='#modalselect' class="btn btn-success"> <FaPlusSquare size={20} color='white'/> Agregar Nota</button>
            
            <button type='button' class='btn btn-danger'> <FaFilePdf size={20} color='white'/> Generar PDF </button>
            <button type='button' class='btn btn-danger' color='#530108'> Generar Prompt</button>
      </form>
      <br />

      <div>
         <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="rows">
              {(provided) => (
                <table class="table" >
                    <thead>
                      
                        <tr >
                            <th scope="col">#</th>
                            <th scope='col'>Orden</th>
                            <th scope="col">Conductor</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Reportero</th>
                            <th scope="col">Formato</th>
                            <th scope="col">          </th>
                        </tr>
                    </thead>
                  
                  
                  <tbody
                    
                    >
                    {rows.map((row, index) => (
                      <Draggable key={row.id} draggableId={row.id} index={index}  >
                        {(provided) => (
                          
                          <tr className="dnd"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            draggable
                            key={index}
                            onDragStart={() => handleDragStart(index)}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            onDragLeave={(e) => handleDragLeave(e)}
                            onDrop={(e) => handleDrop(e)}
                            onDragOver={(e) => e.preventDefault()}

                            
                          >
                            <td> {row.id} </td>
                            <td> {row.order} </td>
                            <td>{row.content}</td>
                            <td> {row.title} </td>
                            <td> {row.reportero} </td>
                            <td> {row.format} </td>
                            <td>    
                              <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black" />  Editar</button> 
                              <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                            </td>

                            
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                </table>
              )}
            </Droppable>
          </DragDropContext>
      </div>
  </div>
      <br />

      {/* <ul className="dnd">
                   {list &&
                     list.map((item, index) => (
                     <li
                     draggable
                     key={index}
                     onDragStart={() => handleDragStart(index)}
                     onDragEnter={(e) => handleDragEnter(e, index)}
                     onDragLeave={(e) => handleDragLeave(e)}
                     onDrop={(e) => handleDrop(e)}
                     onDragOver={(e) => e.preventDefault()}
                   >
                     {item}
                   </li>
                 ))}
          </ul> */}




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
                    <th scope="col">Fecha Mes/Dia/Año</th>
                    <th scope="col">     </th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                {Datos.map((Datos,i) =>(
                    <tr key={Datos.pkNota}>
                    <td>{(i+1)}</td>
                    <td>{Datos.titulo}</td>
                    <td>{Datos.nombre_Categoria}</td>
                    <td>{Datos.nombre_Formato}</td>
                    <td>{Datos.fecha.split(' ')[0]}</td>
                    <td>
                    <input type='checkbox'/>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table>   
                </div>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button className="btn btn-success">
              <i className="fa-solid fa-floppy-disk"></i> Agregar
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