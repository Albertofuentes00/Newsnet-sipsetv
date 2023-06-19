import logo from './logo.svg';
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Menu from './Components/MainMenu/MainMenu';

import logosipse from './images/noticias.png'
import Texto from './Components/Texto'

import Datetime from './Components/Datetime/DatetimeText'
import Login from './Components/LoginView/LoginView';
import Bitacora from './Components/Bitacora/BitacoraView';
import NuevaNota from './Components/Bitacora/CrearNota';
import MiFormulario from './Components/Menuprueba/MiComponente';
import Escaletas from './Components/Escaletas/EscaletasView';
import NuevaEscaleta from './Components/Escaletas/CrearEscaleta';

//Puede usar function o const para retornar componentes 

function App() {
  return (
    <div className="App">

      <header className='App-header'> 
        <img src={logosipse} className="App-logo-sipse" alt="logo" />

        <div className='DateTime'>
        <TextSample
          name= "Alberto"
          apellidos= "Fuentes"
        />
      </div>

      </header>
    
      <body className="App-body">


        {/* <Escaletas/> */}

        {/* <Bitacora />    */}

         <NuevaNota/> 

        {/* <MiFormulario/> */}

        {/* <Menu />    */}

       {/* < Login/>   */}
        
       {/* <NuevaEscaleta/>  */}

      </body>


      <footer className='App-footer'>
          <h4>Grupo SIPSE 2023 © Todos los derechos reservados </h4>
          <h5>Powered by Beto & Tommy</h5>
      </footer>
    </div>

    

  );
}


const TextSample = (props) => {
  console.log(props)

  return (

    <div className="TextSample">
    <p>Bienvenido: {props.name} {props.apellidos}, <Datetime /> </p>
    </div>
     )

}



export default App;
