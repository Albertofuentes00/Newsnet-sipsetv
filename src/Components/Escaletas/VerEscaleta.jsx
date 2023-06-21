import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragDrop from './DragDrop';
import { FaAngleLeft } from 'react-icons/fa';



function pruebados(){

    return(
        
        <body>
            <div>
            <form className="Auth-form-escaleta">
                <div className="Auth-form-content"> 
                <div> 
                    <form className="Button-form">
                        <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                        <button type="button" class="btn btn-success">  Agregar Nota</button>
                        <button type="button" class="btn btn-primary">  Buscar</button>
                    </form>
                </div>
            </div>
            </form>

            </div>

            <DragDrop />
        </body>

    )




}




export default pruebados