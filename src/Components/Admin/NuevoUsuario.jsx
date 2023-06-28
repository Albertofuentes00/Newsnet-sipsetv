import React from "react"
import { Outlet, Link } from "react-router-dom"


function NuevoUsuario(){

    <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Nuevo Usuario</h3>
            <h2>Ingresa los datos requeridos para crear un nuevo usuario</h2>

            <div className= 'Grid'>
                <label>Nombre</label>
               <input
                type="user"
                className="form-control mt-1"
                placeholder="Ingrese el nombre"/>

               
                <label>Apellidos</label>
                <input
                  type="user"
                  className="form-control mt-1"
                  placeholder="Ingrese los apellidos"
                />
            </div>

            
          <div class= 'Grid'>
              <label>Username</label>
                  <input
                    type="user"
                    className="form-control mt-1"
                    placeholder="Ingrese el username"
                  />

              <label>Contraseña</label>
                    <input
                    type="user"
                    className="form-control mt-1"
                    placeholder="Ingrese la contraseña"/>
          </div>


            <div className="d-grid gap-2 mt-3">
              <Link to='MainMenu'>
                <button type="submit" className="btn btn-primary">
                  Cerrar 
                </button>
              </Link>
            </div>


          </div>
        </form>
    <Outlet/>
  </div>



}


export default NuevoUsuario
