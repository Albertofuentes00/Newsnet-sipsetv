import React from "react";

function NuevaNota() {

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
                        <input class="form-control mt-1" />
                        <label>Categoría</label>
                        <input class="form-control mt-1" />
                    </div>
                    <div className= 'Grid'>
                        <label>Formato</label>
                        <input class="form-control mt-1" />
                        <label>Categoría</label>
                        <input class="form-control mt-1" />
                        
                    </div>
                </div>

            </div>

            </form>
        </div>
    )
}


export default NuevaNota