import React, { useState } from "react";

import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'


function NuevaNota() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Crear nota</h3>
                <h2 className="Text-helper">Ingresa los datos requeridos para una nueva nota</h2>
                <div className="Menu-form">
                    <label>Título</label>
                    <input
                        type="user"
                        className="form-control mt-1"
                        placeholder="Título"
                    />

                    <div className= 'Grid'>
                        <label>Categoría</label>
                        <select  class="form-control mt-1" />
                        <br />
                        <label>Reportero</label>
                        <select class="form-control mt-1" />
                    </div>
                    <br />
                    <div className= 'Grid'>
                        <label>Formato</label>
                        <select  class="form-control mt-1" />
                        <br />
                        <label>Fecha</label>
                        <select  class="form-control mt-1" />                        
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


export default NuevaNota