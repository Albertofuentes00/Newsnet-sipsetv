import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"
import Cookies from 'js-cookie';

function Login() {


  const buscarUsuario = async ()=>{
    var user = document.getElementById("usuario").value
    var pass = document.getElementById("contra").value
    console.log('https://localhost:7201/Usuario/Login/' + user +"/"+pass)
    if (user != "" & pass != ""){
      const respuesta = await axios.put('https://localhost:7201/Usuario/Login/' + user +"/"+pass)
      console.log(respuesta.data.result.length)
      if (respuesta.data.result.length > 0) { // Verifica si la respuesta es true
        setTimeout(function() {
          console.log("Espera de 3 segundos");
        }, 8000);
        document.getElementById("usuario").style.borderColor = 'green'
      document.getElementById("contra").style.borderColor = 'green'




      Cookies.set('Usuario', user, { expires: 1 / (24 * 60) });
        window.location.href = '/MainMenu';
        
      } else {
        console.log("ninguna coincidencia")
        document.getElementById("usuario").style.borderColor = 'red'
      document.getElementById("contra").style.borderColor = 'red'
      document.getElementById("outmen").innerHTML = "El usuario no existe"
      document.getElementById("outmen").hidden = false
      }
    }
    else{
      document.getElementById("usuario").style.borderColor = 'red'
      document.getElementById("contra").style.borderColor = 'red'
      document.getElementById("outmen").innerHTML = "Rellena todos los datos"
      document.getElementById("outmen").hidden = false
    }
  
  }
    return (
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Iniciar sesion</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input id="usuario"
              type="user"
              className="form-control mt-1"
              placeholder="Username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input id="contra"
              type="password"
              className="form-control mt-1"
              placeholder="Contraseña"
            />
            
          </div>
          <label id="outmen" className="outputred" hidden>El usuario no existe</label>
          <div className="d-grid gap-2 mt-3">
            
              <div onClick={()=> buscarUsuario()} className="btn btn-primary">
                Ingresar 
              </div>
            
          </div>
          <hr class="mx-n3"/>
          <div className="d-grid gap-2 mt-3">
            <Link to='/SignIn'>
              <button className="btn btn-secondary">
                Registrarse 
              </button>
            </Link>

          </div>

        </div>
      </form>
    </div>

    )
}



export default Login