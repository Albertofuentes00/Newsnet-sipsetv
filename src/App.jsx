import logo from './logo.svg';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import { Routes, Route } from 'react-router-dom';

import Auth from "./Auth"
import Menu from './Components/MainMenu/MainMenu';

import logosipse from './images/noticias.png'
import Beto from './images/LOGO_Scale.png'

import Texto from './Components/Texto'

import Datetime from './Components/Datetime/DatetimeText'
import Login from './Components/LoginView/LoginView';
import Bitacora from './Components/Bitacora/BitacoraView';
import NuevaNota from './Components/Bitacora/CrearNota';
import Escaletas from './Components/Escaletas/EscaletasView';
import NuevaEscaleta from './Components/Escaletas/CrearEscaleta';
import GuionesNotas from './Components/Notas/NotasGuiones';
import NuevoGuion from './Components/Notas/CrearGuion';
import Dashboard from './Components/Admin/Dashboard';

import EscaletaMove from './Components/Escaletas/EscaletaOpen';
import CrearUsuario from './Components/Admin/NuevoUsuario';
import React, {useState} from 'react';

// import { Link } from 'react-router-dom';

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


         {/* <EscaletaMove /> */}

            {/* <Dashboard /> */}

        {/* <Dashboard /> */}

        {/* <Escaletas/> */}

         {/* <Bitacora />  */}

          {/* <GuionesNotas /> */}

          {/* <NuevaNota/>  */}

        {/* <MiFormulario/> */}

        {/* <VerEscaleta /> */}

          {/* <Menu />  */}

          
        <CrearUsuario />


       <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path='MainMenu' element={<Menu/>}/>

            <Route path="Escaletas" element={<Escaletas />}/>
            <Route path='NuevaEscaleta' element={<NuevaEscaleta/>}></Route>
            <Route path="Bitacora" element={<Bitacora />}/>
            <Route path="Notas" element={<GuionesNotas/>}/>
            <Route path='CrearNota' element={<NuevaNota/>}/>

            <Route path='Admin' element={<Dashboard />} />
            <Route path='ListaUsuarios' element={<CrearUsuario />} />
      </Routes>




      </body>

      

      <footer className='App-footer'>
          <h5>Televisora de Cancún SA de CV. © 2023 Todos los derechos reservados </h5>
          <div>
            <h7>Powered by</h7>
            <h6> <img src={Beto} className='Logo-BT' alt="logo" />  Beto & Tommy</h6>
          </div>
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
