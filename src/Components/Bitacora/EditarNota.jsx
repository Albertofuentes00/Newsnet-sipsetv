import React, { useState } from "react";

import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'


function EditarNota() {


    const formatosList = [
        {
            id: 1,
            value: 'TX'
        }, {
            id: 2,
            value: 'INS'
        }, {
            id: 3,
            value: 'FT'
        }
        ];

    const CategoriasList = [
        {
            id: 1, 
            value: 'Noticias'
        }, {
            id: 2, 
            value: 'Deportes'
        }, {
            id: 3,
            value: 'General'
        }
        ];

    const ReporterosList = [
        {
            id: 1,
            value: 'Brito'
        }, {
            id: 2, 
            value: 'Pluma'
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
        

    const [value, onChange] = useState(new Date());



    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Editar nota</h3>
                <h2 className="Text-helper">Ingresa los nuevos datos de la nota a editar y da click en Guardar para finalizar con los cambios</h2>
                <div className="Menu-form">
                    <label>Título</label>
                    <input
                        type="user"
                        className="form-control mt-1"
                        placeholder="Título"
                    />

                    <div className= 'Grid'>
                        <label>Categoría</label>
                        <select class="form-control mt-1" placeholder="Categoria" type="user">
                        <Options options={CategoriasList}/>
                        </select>

                        <br />
                        <label>Reportero</label>
                        <select class="form-control mt-1"  placeholder="Reportero" type="user">
                        <Options options={ReporterosList} />
                        </select>
                    </div>
                    <div class= 'Grid'>

                    </div>
                    <div className= 'Grid'>
                        <label>Formato</label>
                        <select  class="form-control mt-1" placeholder="Formato" type="user">
                        <Options options={formatosList} />
                        </select>
                        <br />
                        <label>Fecha</label>
                        <input type="date" className="form-control mt-1"placeholder="Selecciona la fecha"/>                     
                    </div>
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


export default EditarNota