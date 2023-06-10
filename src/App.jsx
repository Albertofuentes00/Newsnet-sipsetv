import logo from './logo.svg';
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"


import logosipse from './images/noticias.png'

//Puede usar function o const para retornar componentes 

function App() {
  return (
    <div className="App">

      <header className='App-header'> 
        <img src={logosipse} className="App-logo-sipse" alt="logo" />

      </header>
      <body className="App-body">

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
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
              </div>
            </div>
          </form>
        </div>

        <TextSample
          name= "Alberto"
          apellidos= "Fuentes"
          
          />
      </body>


      <footer className='App-footer'>
          <h4>Grupo SIPSE 2023 © Todos los derechos reservados </h4>
          <h5>Powered by Beto & Tommy ...</h5>

      </footer>
    </div>

    

  );
}

// function TextSample (props){
//   return (

//       <div className="TextSample">
//       <p>Sample Text, Bienvenido:</p>
//       </div>
//        )
// }

const TextSample = (props) => {
  console.log(props)
  console.log(today)
  var today = new Date()
  var fecha = today.getDate() + '-' + ( today.getMonth() + 1 ) + '-' + today.getFullYear();
  var hora = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var fechaYHora = fecha + ' ' + hora;

  return (

    <div className="TextSample">
    <p>Bienvenido: {props.name} {props.apellidos} hoy es {actual_date} </p>
    </div>
     )

}

const to_day = new Date();
const day = to_day.getDate();
const month = to_day.getMonth()+1;
const year =  to_day.getFullYear();
const actual_date = String(day+'/'+month+'/'+year);
const new_date = new Date(actual_date);


export default App;
