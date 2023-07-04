import React from "react";
import ReactDataGrid from 'react-data-grid';
// import { Toolbar, Data } from 'react-data-grid-addons';


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


function LeerGuion(){


    const ExcelCellInput = () => {
        const [value, setValue] = useState('');
      
        const handleInputChange = (event) => {
          setValue(event.target.value);
        };
    }

    const text1 = "VOZ EN OFF";
    const text2 = 'LA MAÑANA DE ESTE LUNES SE REALIZO A CABO UNA BLABLABLABLABLABLABLA'

    return(
        <div className="Auth-form-container">
        <form className="Auth-form-Guion">
        <div className="Auth-form-content">
            <h2 className="Auth-form-title">Guión Cancun Vive 03/07/23</h2>
            <div className="Row">
                <div className="Grid">
                    <h5> Reportero: reportero  </h5>
                </div>
                <div className="Grid">
                    <h5> Categoria: categoria </h5>
                </div>
                <div className="Grid">
                    <h5> Formato: formato </h5>
                </div>
            </div>
            <br />
            <div>
                <form className="Button-form">
                    <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                </form>
            </div>
            <br />
            <div className="Row-Guion">
                <textarea  type="text"
                        className="excel-cell-input"
                        value={text1}
                        disabled='true'
                        />
                <textarea  type="text"
                        className="excel-cell-input"
                        value={text2} disabled='true' Resize='none'/>
            </div>

        </div>
            <br />
        
        </form>
    </div>
    )
    
}

 export default LeerGuion



