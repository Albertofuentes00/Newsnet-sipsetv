import React from "react";
import Menu from "../MainMenu/MainMenu";



function Login() {
    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar sesion</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="user"
                className="form-control mt-1"
                placeholder="Username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              
              <button type="submit" className="btn btn-primary" component={Menu} to='/Menu'> 
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </div>

    )

}



export default Login