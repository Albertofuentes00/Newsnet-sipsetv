import React from "react"
import { Outlet, Link } from "react-router-dom"


function CrearUsuario(){

    <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Nuevo Usuario</h3>
            <div className="form-group mt-3">
              <label>Nombre</label>
              <input
                type="user"
                className="form-control mt-1"
                placeholder="Ingrese el nombre"
              />
            </div>
            <div className="form-group mt-3">
              <label>Apellidos</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingrese los apellidos"
              />
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
      </div>



}


export default CrearUsuario
