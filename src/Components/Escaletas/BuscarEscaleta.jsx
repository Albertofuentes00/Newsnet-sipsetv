import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiCancel } from 'react-icons/gi'

import { Link } from "react-router-dom";


function BuscarEscaleta() {


    // PRUEBA 2 COMBOBOX

    const programasList = [
        {
            id: 1,
            value: 'Sipse Noticias Edicion Matutina'
        }, {
            id: 2,
            value: 'Sipse Noticias Edicion Vespertina'
        }, {
            id: 3,
            value: 'Cancun Vive'
        }
        ];

        function Options({ options }) {
            return (
                options.map(option => 
                            <option key={option.id} value={option.value}>                                   
                            {option.value}
                            </option>)
                           );
        }
        
        <select
        name="programa"
        className="form-control">
        <Options options={programasList} />
        </select>

    const [value, onChange] = useState(new Date());



    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Buscar Escaleta</h3>
                <h2 className="Text-helper">Ingresa los datos requeridos para buscar una escaleta existente</h2>
                <br />
                <div className="Menu-form">
                    <label>Programa</label>
                    <select name="programa" className="form-control">
                    <Options options={programasList} />
                    </select>
                </div>
                <br />
                <div className= 'Grid'>
                        <label>Fecha</label>
                        <input
                        type="date"
                        className="form-control mt-1"
                        placeholder="Selecciona la fecha"
                        >
                        </input>
                </div>
            </div>
            <br />
            <div>
                <Link to='/Escaletas'>
                    <button type="button" class="btn btn-primary"> <FaSearch size={20} color="white"/> Guardar </button>
                </Link>                
                <Link to='/Escaletas'>
                    <button type="button" class="btn btn-danger"> <GiCancel size={20} color="white"/> Cancelar </button>
                </Link>
            </div>
            </form>
        </div>

    )
}


export default BuscarEscaleta