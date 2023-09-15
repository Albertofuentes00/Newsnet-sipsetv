import React from "react";

import { Link } from "react-router-dom";

function Registro(){

    return(

        <section>
                 <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Bienvenido/bienvenida a la familia SIPSE</h3>
          <h6>Llena los datos requeridos para registrarte en la plataforma</h6>
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input 
                className="form-control mt-1"
                placeholder="sampletext@email.com"
            />
          </div>

          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>

          <div className="form-group mt-3">
            <label>Confirmar contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Rewrite Password"
            />
          </div>


            <div className="d-grid gap-2 mt-3">
                <div className="Button-form">
                <Link to='/'>
                    <button type="submit" className="btn btn-primary">
                        Regresar 
                    </button>
                </Link>
                <button type="submit" className="btn btn-success">
                        Registrar 
                    </button>

                </div>

            </div>        

        </div>
      </form>
    </div>
    </section>


    )
}



export default Registro
