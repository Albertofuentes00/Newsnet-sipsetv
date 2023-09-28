import { useEffect, useState } from "react"
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"
import Cookies from 'js-cookie';

function Login() {




  const [Datos, SetDatos] = useState(null);


  const buscarUsuario = async ()=>{
    try{
      var user = document.getElementById("usuario").value
      var pass = document.getElementById("contra").value
      if (user != "" & pass != ""){
        const respuesta = await axios.put('https://localhost:7201/Usuario/Login/' + user +"/"+pass)
        if (respuesta.data.result.length > 0) {
          setTimeout(function() {
            console.log("Espera de 3 segundos");
          }, 8000);
          document.getElementById("outmen").hidden = true;
          document.getElementById("usuario").style.borderColor = 'green'
        document.getElementById("contra").style.borderColor = 'green'
        const pkUsuario = respuesta.data.result[0].pkUsuario;
        const nickName = respuesta.data.result[0].nickName;
        const nombre_Rol = respuesta.data.result[0].rol.nombre_Rol;
        Cookies.set('Usuario',pkUsuario+"/"+nickName+"/"+nombre_Rol);
        window.location.href = '/MainMenu';
          
        } else {
          console.log("ninguna coincidencia")
          document.getElementById("usuario").style.borderColor = 'red';
        document.getElementById("contra").style.borderColor = 'red';
        document.getElementById("outmen").innerHTML = "El usuario no existe o la contraseña es incorrecta";
        document.getElementById("outmen").hidden = false;
        }
      }
      else{
        document.getElementById("usuario").style.borderColor = 'red'
        document.getElementById("contra").style.borderColor = 'red'
        document.getElementById("outmen").innerHTML = "Rellena todos los datos"
        document.getElementById("outmen").hidden = false
      }
    
    }catch(error){
      console.log(error)
      document.getElementById("outmen").innerHTML = "Error del servidor"
        document.getElementById("outmen").hidden = false
    }


    
  
   
    
  }
    return (
      <div className="Login-main">
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  document.getElementById("contra").focus();
                }
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input id="contra"
              type="password"
              className="form-control mt-1"
              placeholder="Contraseña"
              onKeyDown={(e) => {if (e.key === "Enter") {buscarUsuario(); }}}
            />
            
          </div>
          <label id="outmen" className="outputred" hidden>El usuario no existe</label>
          <div className="d-grid gap-2 mt-3">
            
              <div onClick={()=> buscarUsuario()} className="btn btn-primary">
                Ingresar 
              </div>
            
          </div>

        </div>
      </form>
    </div>
      </div>


    )
}



export default Login