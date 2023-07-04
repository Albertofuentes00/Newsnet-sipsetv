import logo from './logo.svg';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import { Routes, Route } from 'react-router-dom';

import Auth from "./Auth"
import Menu from './Components/MainMenu/MainMenu';

/* IMAGES */
import logosipse from './images/noticias.png'
import Beto from './images/LOGO_Scale.png'

import Texto from './Components/Texto'


import Datetime from './Components/Datetime/DatetimeText'
import Login from './Components/LoginView/LoginView';

/* BITACORA SECTION */
import Bitacora from './Components/Bitacora/BitacoraView';
import NuevaNota from './Components/Bitacora/CrearNota';
import BuscarNotas from './Components/Bitacora/BuscarNota';
import EditarNota from './Components/Bitacora/EditarNota';

/* ESCALETAS SECTION */
import Escaletas from './Components/Escaletas/EscaletasView';
import NuevaEscaleta from './Components/Escaletas/CrearEscaleta';
import EscaletaMove from './Components/Escaletas/EscaletaOpen';
import BuscarEscaleta from './Components/Escaletas/BuscarEscaleta';
import PruebaMove from './Components/Escaletas/PruebaEscaletamove';
import Table from './Components/Escaletas/prueba2';

/* NOTAS SECTION */
import GuionesNotas from './Components/Notas/NotasGuiones';
import NuevoGuion from './Components/Notas/CrearGuion';
import LeerGuion from './Components/Notas/VerNotaGuion';

/* ADMIN SECTION */
import Dashboard from './Components/Admin/Dashboard';

import NewUser from './Components/Admin/NuevoUsuario';
import NewCategory from './Components/Admin/NuevaCategoria';
import NewProgram from './Components/Admin/NuevoPrograma';
import NewFormat from './Components/Admin/NuevoFormato';
import NewRol from './Components/Admin/NuevoRol';

import ListaUsuarios from './Components/Admin/ListaUsuarios';
import ListaProgramas from './Components/Admin/ListaProgramas';
import ListaCategorias from './Components/Admin/ListaCategorias';
import ListaFormatos from './Components/Admin/ListaFormatos';
import ListaRoles from './Components/Admin/ListaRoles';

import DynamicTextAreaComponent from './Components/Notas/PRUEBACELDA';

import React, {useState} from 'react';
import AddNotes from './Components/Escaletas/AgregarNotasEscaletas';


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



       <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='MainMenu' element={<Menu/>}/>

            <Route path="Escaletas" element={<Escaletas />}/>
            <Route path='EscaletasMove' element={<EscaletaMove/>} />
            <Route path='NuevaEscaleta' element={<NuevaEscaleta/>}></Route>
            <Route path='BuscarEscaleta' element={<BuscarEscaleta/>}  />
            <Route path='AgregarNotas' element={<AddNotes/>} />

            <Route path='PruebaMove' element={<PruebaMove/>} />
            <Route path='Prueba' element={<Table/>} />


            <Route path="Bitacora" element={<Bitacora />}/>
            <Route path='CrearNota' element={<NuevaNota/>} />
            <Route path='BuscarNota' element={<BuscarNotas/>}/>
            <Route path='EditarNota' element={<EditarNota/>} />


            <Route path="Notas" element={<GuionesNotas/>}/>
            <Route path='CrearGuion' element={<NuevoGuion/>} />
            <Route path='LeerGuion' element= {<LeerGuion/> } />
            <Route path='PruebaGuion' element= {<DynamicTextAreaComponent/>} />


            <Route path='Admin' element={<Dashboard />}>
              <Route path='ListaProgramas' element= {<ListaProgramas/>} />
              <Route path='ListaCategorias' element= {<ListaCategorias/>} />
              <Route path='ListaFormatos' element= {<ListaFormatos/>} />
              <Route path='ListaRoles' element={<ListaRoles/>} />
              <Route path='ListaUsuarios' element={<ListaUsuarios />}/>
            </Route>
            <Route path='NewUser' element={<NewUser/>} />
            <Route path='NewCategory' element= {<NewCategory/>} />
            <Route path='NewProgram' element= {<NewProgram/>} />
            <Route path='NewFormat' element= {<NewFormat/>} />
            <Route path='NewRol' element= {<NewRol/>}/>
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
