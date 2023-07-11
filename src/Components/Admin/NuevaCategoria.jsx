import React from "react"
import { Outlet, Link } from "react-router-dom"
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'



function NewCategory(){


  return(
    

    <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Nueva Categoria</h3>
            <h6>Ingresa los datos requeridos para crear una nueva categoria</h6>

            <div className= 'Grid'>
                <label>Nombre</label>
               <input
                type="user"
                className="form-control mt-1"
                placeholder="Ingrese el nombre"/>
            </div>

            <br />


            <div className="Button-form">
              <Link to='/MainMenu'>
              <button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
              </Link>
              <button type="button" class="btn btn-danger"> <GiCancel size={20} color="white"/> Cancelar </button>
            </div>



          </div>
        </form>


        

  </div>

  )



}


export default NewCategory
