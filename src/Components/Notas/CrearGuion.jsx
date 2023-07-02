import React from "react";

import { useState } from "react";


import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa'


// const data = [
//     ['Nombre', 'Edad', 'País'],
//     ['John', 30, 'USA'],
//     ['Alice', 25, 'Canada'],
//     ['Bob', 35, 'UK'],
//   ];  

// const workbook = utils.book_new();
// const worksheet = utils.aoa_to_sheet(data);
// utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// writeFile(workbook, 'output.xlsx');


function NuevoGuion(){


    const ExcelCellInput = () => {
        const [value, setValue] = useState('');
      
        const handleInputChange = (event) => {
          setValue(event.target.value);
        };
    }

    return(
        <div className="Auth-form-container">
        <form className="Auth-form">
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Crear guión</h3>
            <h2 className="Text-helper">Escriba en las cuadrillas a continuación los guiones que desea agregar a la nota </h2>
            <div>
                <form className="Button-form">
                    <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                    <button type="button" class='btn btn-success'> <FaSave size={20} color="white"/> Guardar cambios </button>
                    <button type="button" class="btn btn-primary"> <FaPlusSquare  size={20} color="white"/> Agregar Celda</button>
                    <button type="button" class="btn btn-danger"> <FaMinusSquare  size={20} color="white"/> Quitar Celda</button>

                </form>
            </div>

            <div className="Row">
                <input  type="text"
                        className="excel-cell-input" />
                <input  type="text"
                        className="excel-cell-input"/>
            </div>

        </div>
            <br />
        
        </form>
    </div>
    )
    
}

export default NuevoGuion