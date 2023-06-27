import React from "react";

import { GiCancel } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'



function BuscarNotas(){

    return( 
    
    <div className="Auth-form-container">
        <form className="Auth-form-Search">
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Buscar nota</h3>
            <h2 className="Text-helper">Ingresa los datos que necesites para buscar una nota</h2>
            <div className="Menu-form">
                <label>Título o palabra clave</label>
                <input
                    type="user"
                    className="form-control mt-1"
                    placeholder="Título o palabra clave"
                />

                <div className= 'Grid'>
                    <label>Categoría</label>
                    <select class="form-control mt-1" placeholder="Categoria" type="user"/>
                </div>
                <div className= 'Grid'>
                    <label>Reportero</label>
                    <select class="form-control mt-1"  placeholder="Reportero" type="user"/>                
                </div>
                <div className="Grid">
                    <label>Reportero</label>
                    <select class="form-control mt-1"  placeholder="Reportero" type="user"/>
                </div>
            </div>

            <div className="FromDateToDate">
                <div className= 'Grid'>
                    <label>Del <input type="date" className="form-control mt-1"placeholder="Selecciona la fecha"/> </label>
                </div>

                <div className="Grid">
                    <label>Al <input type="date" className="form-control mt-1"placeholder="Selecciona la fecha"/> </label>
                </div>
            </div>
                
        </div>

        <div>
            <button type="button" class="btn btn-primary"> <FaSearch size={20} color="white"/> Buscar </button>
            <button type="button" class="btn btn-danger"> <GiCancel size={20} color="white"/> Cancelar </button>
        </div>
        
        </form>
    </div>

    )

}


export default BuscarNotas