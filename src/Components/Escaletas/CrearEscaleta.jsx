import React, { useState } from "react";
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'


function NuevaEscaleta() {


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
                <h3 className="Auth-form-title">Crear Escaleta</h3>
                <h2 className="Text-helper">Ingresa los datos requeridos para una nueva escaleta</h2>
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
                <button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
                <button type="button" class="btn btn-danger"> <GiCancel size={20} color="white"/> Cancelar </button>
            </div>
            </form>
        </div>

    )
}


export default NuevaEscaleta