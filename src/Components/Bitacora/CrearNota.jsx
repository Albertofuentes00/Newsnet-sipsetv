import React, { useState } from "react";


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
                            <option value="">Seleccionar categoría</option>
                        <label>Reportero</label>
                        <select class="form-control mt-1" />
                            <option value="">Seleccionar reportero</option>
                    </div>
                    <div className= 'Grid'>
                        <label>Formato</label>
                        <select value={selectedOption} onChange={handleSelectChange} class="form-control mt-1" />
                            <option value="">Seleccionar formato</option>
                        <label>Fecha</label>
                        <select  class="form-control mt-1" />
                            <option value="">Seleccionar fecha</option>

                        
                    </div>
                </div>

            </div>

            <button type="button" class="btn btn-success"> Guardar </button>
            <button type="button" class="btn btn-danger"> Cancelar </button>
            
            </form>
        </div>
    )
}


export default NuevaNota