import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import TVCUNLogo from '../../images/TVCUN_logo.png';
import { API_KEY } from '../API_URL';
import {useNavigate } from 'react-router-dom';

function Login() {
  //Obtener el rol de las cokies
  const navigate = useNavigate();
  const cadena = Cookies.get('Usuario');

  // Realizar una acción basada en la ruta actual
  if (!cadena) {
  } else {
    window.location.href = '/Main';  
  }

  //Consulta el usuario a la base de datos
  const buscarUsuario = async () => {
    try {
      var user = document.getElementById('usuario').value;
      var pass = document.getElementById('contra').value;
      if ((user !== '') & (pass !== '')) {
        const respuesta = await axios.put(
          API_KEY+'/Usuario/Login/' + user + '/' + pass
        );
        // Si obtiene un resultado
        if (respuesta.data.result.length > 0) {
          setTimeout(function () {
            console.log('Espera de 3 segundos');
          }, 8000);
          // Asigna datos del usuario en las cokies
          document.getElementById('outmen').hidden = true;
          document.getElementById('usuario').style.borderColor = 'green';
          document.getElementById('contra').style.borderColor = 'green';
          const pkUsuario = respuesta.data.result[0].pkUsuario;
          const nickName = respuesta.data.result[0].nickName;
          const nombre_Rol = respuesta.data.result[0].rol.nombre_Rol;
          Cookies.set('Usuario', pkUsuario + '/' + nickName + '/' + nombre_Rol);
          // redirige a la vista principal
          window.location.href = '/Main';  
        } else {
          console.log('ninguna coincidencia');
          document.getElementById('usuario').style.borderColor = 'red';
          document.getElementById('contra').style.borderColor = 'red';
          document.getElementById('outmen').innerHTML =
            'El usuario no existe o la contraseña es incorrecta';
          document.getElementById('outmen').hidden = false;
        }
      } else {
        document.getElementById('usuario').style.borderColor = 'red';
        document.getElementById('contra').style.borderColor = 'red';
        document.getElementById('outmen').innerHTML = 'Rellena todos los datos';
        document.getElementById('outmen').hidden = false;
      }
    } catch (error) {
      console.log(error);
      document.getElementById('outmen').innerHTML = 'Error del servidor';
      document.getElementById('outmen').hidden = false;
    }
  };
  return (
    <div className="Login-main">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content"> {/* contenedor del login */}
            <img src={TVCUNLogo} alt="logo" className='tvcunlogo'/>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                id="usuario"
                type="user"
                className="form-control mt-1"
                placeholder="Username"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    document.getElementById('contra').focus();
                  }
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                id="contra"
                type="password"
                className="form-control mt-1"
                placeholder="Contraseña"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    buscarUsuario();
                  }
                }}
              />
            </div>
            <label id="outmen" className="outputred" hidden>
              El usuario no existe
            </label>
            <div className="d-grid gap-2 mt-3">
              <div onClick={() => buscarUsuario()} className="btn btn-primary">
                Ingresar
              </div>
            </div>
            <label>Esta es una version recien implementada, cualquier error favor de reportarlo en sistemas.</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
