import React, { useState } from 'react';


import { FaAngleLeft } from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import {FaFilePdf} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa';
import {BsFillSignpostFill} from 'react-icons/bs';
import { FaTrash } from "react-icons/fa";
import { FaEye } from 'react-icons/fa'

import { Outlet, Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';




// const handleAddRow = () => {
//   const newRow = {
//     id: "New indicator"
//   };
//  setRows([...rows, newRow]);
//   };

    function Table () {

        const Save = () => {
          setRows.Save()
        }

        const [dragItem, setDragItem] = useState();
        const [rows, setRows] = useState([
          
          { id: '1', order: '1', content: 'Javier', title: 'Manifestacion', reportero: 'Iliana', format: 'FT' },
          { id: '2', order: '2' ,content: 'Javier', title: 'Fuga de agua', reportero: 'Iliana', format: 'FT' },
          { id: '3', order: '3', content: 'Javier', title: 'Incendio', reportero: 'Iliana', format: 'TX/IN' },
          { id: '4', order: '4',content: 'Javier', title: 'Trafico', reportero: 'Iliana', format: 'TX' },
        ]);
        
        const handleAddRow = () => {
          const newRow = {
             id: rows.length + 1, content: '-', title: 'INDICACION', reportero: '-', format: '-' 
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
      
        return (
          <div className="Auth-form-container">
  <form className="Auth-form-escaleta">
  <div className="Auth-form-content">
      <h3 className="Auth-form-title">Cancun Vive 22-06-23</h3>
      <form className="Button-form">
            <Link to='/Escaletas'>
              <button type="button" class="btn btn-dark"  > <FaAngleLeft size={20} color="white"/> Regresar</button>
            </Link>
              <button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
              <button type='button' class='btn btn-warning'> <FaEdit size={20} color='black'/> Editar Escaleta</button>
              <button type="button" class="btn btn-primary" onClick={handleAddRow} > <BsFillSignpostFill size={20} color='white'/> Agregar Indicación</button>
              
            <Link to='/AgregarNotas'>
              <button type="button" class="btn btn-success"> <FaPlusSquare size={20} color='white'/> Agregar Nota</button>
            </Link>
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

  
  </form>
</div>
        );
      };



export default Table