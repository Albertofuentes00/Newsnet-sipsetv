import React, { useState } from 'react';

import { FaAngleLeft } from 'react-icons/fa';

import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import {FaFilePdf} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa';
import {BsFillSignpostFill} from 'react-icons/bs';
import { FaTrash } from "react-icons/fa";
import { FaEye } from 'react-icons/fa'


import { Outlet, Link } from 'react-router-dom';


import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



    function Table () {
        const [rows, setRows] = useState([
          { id: '1', content: 'Row 1' },
          { id: '2', content: 'Row 2' },
          { id: '3', content: 'Row 3' },
          { id: '4', content: 'Row 4' },
        ]);
      
        const handleDragEnd = (result) => {
          if (!result.destination) return;
      
          const newRows = [...rows];
          const [removed] = newRows.splice(result.source.index, 1);
          newRows.splice(result.destination.index, 0, removed);
      
          setRows(newRows);
        };
      
        return (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="rows">
              {(provided) => (
                <table {...provided.droppableProps} ref={provided.innerRef}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Conductor</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Reportero</th>
                            <th scope="col">Formato</th>
                            <th scope="col">     </th>
                        </tr>
                    </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <Draggable key={row.id} draggableId={row.id} index={index}>
                        {(provided) => (
                          <tr
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <td>{row.content}</td>
                            <td>title</td>
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
        );
      };



export default Table