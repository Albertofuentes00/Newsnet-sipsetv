import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Menu from './Components/MainMenu/MainMenu';

/* IMAGES */
import SIPSENewsLogo from './images/noticias.png'
import NewsnetLogo from './images/white-logo.png'
import Beto from './images/LOGO_Scale.png'
import Welcome from './Components/Bienvenida';
import Datetime from './Components/Datetime/DatetimeText'
import Login from './Components/LoginView/LoginView';

/* BITACORA SECTION */
import Bitacora from './Components/Bitacora/BitacoraView';
import BuscarNotas from './Components/Bitacora/BuscarNota';

/* ESCALETAS SECTION */
import EscaletaPrograma from './Components/Escaletas/EscaletaPrograma';
import Escaletas from './Components/Escaletas/EscaletasView';
import NuevaEscaleta from './Components/Escaletas/CrearEscaleta';
import BuscarEscaleta from './Components/Escaletas/BuscarEscaleta';
import ArmadoEscaleta from './Components/Escaletas/ArmadoEscaleta';
import SearchBar from './Components/Escaletas/NoteSearchBar';

/* NOTAS SECTION */
import GuionesNotas from './Components/Notas/NotasGuiones';
import NuevoGuion from './Components/Notas/CrearGuion';
import LeerGuion from './Components/Notas/VerNotaGuion';

/* ADMIN SECTION */
import Dashboard from './Components/Admin/Dashboard';
import ListaUsuarios from './Components/Admin/ListaUsuarios';
import ListaProgramas from './Components/Admin/ListaProgramas';
import ListaCategorias from './Components/Admin/ListaCategorias';
import ListaFormatos from './Components/Admin/ListaFormatos';
import ListaRoles from './Components/Admin/ListaRoles';

/* HELP SECTION */
import HelpMenu from './Components/Ayuda/HelpDashboard';
import About from './Components/Ayuda/AboutNewsnet';
import AdminHelp from './Components/Ayuda/AdminHelp';

import BitacoraHelp from './Components/Ayuda/BitacoraHelp';
import GuionesHelp from './Components/Ayuda/GuionesHelp';
import EscaletasHelp from './Components/Ayuda/EscaletasHelp';

import MyComponent from './Components/Notas/EditarGuion';
import React, {useState} from 'react';
import AddNotes from './Components/Escaletas/AgregarNotasEscaletas';
import Introduccion from './Components/Ayuda/Introduction';
import EditarGuion from './Components/Notas/EditarGuion';


function App() {
  return (
    <div className="App">
      <header className='App-header'> 
        <div className='logo'>
            <img src={SIPSENewsLogo} alt="logo" />
            <span className="separator"></span>
            <img src={NewsnetLogo} alt="logo" />
        </div>
        
        <div className='DateTime'>
          <div className="options">
            <Link to='/HelpDashboard/Introduccion'>
               <a href="#">Ayuda</a>
            </Link>
               <a href="#">Cerrar Sesión</a>
          </div>
        </div>

      </header>

      <header className='Datetime-header'>
        <div className='Date-text'>
          <TextSample name= "Alberto" apellidos= "Fuentes"/> 
        </div>
      </header>
    
      <body className="App-body">
       <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='MainMenu' element={<Menu/>}/>
            <Route path="EscaletaPrograma" element={<EscaletaPrograma />}/> 
            <Route path='NuevaEscaleta' element={<NuevaEscaleta/>}></Route>
            <Route path='BuscarEscaleta' element={<BuscarEscaleta/>}  />
            {/* <Route path='AgregarNotas' element={<AddNotes/>} /> */}
            <Route path='ArmadoEscaleta/:id' element={<ArmadoEscaleta/>} />
            <Route path="Bitacora" element={<Bitacora />}/>
            <Route path='BuscarNota' element={<BuscarNotas/>}/>
            <Route path="Notas" element={<GuionesNotas/>}/>
            <Route path='CrearGuion' element={<NuevoGuion/>} />
            <Route path='LeerGuion/:id' element= {<LeerGuion/> } />
            <Route path='EditarGuion/:id' element= {<EditarGuion/>} />

            <Route path='Search' element= { <SearchBar/>}>
              <Route path='AgregarNotas' element={<AddNotes/>} />
            </Route>
            
            
            <Route path='Admin' element={<Dashboard />}>
              <Route path='ListaProgramas' element= {<ListaProgramas/>} />
              <Route path='ListaCategorias' element= {<ListaCategorias/>} />
              <Route path='ListaFormatos' element= {<ListaFormatos/>} />
              <Route path='ListaRoles' element={<ListaRoles/>} />
              <Route path='ListaUsuarios' element={<ListaUsuarios />}/>
          </Route>
          <Route path='HelpDashboard' element={<HelpMenu/>} >
              <Route path='Introduccion' element={<Introduccion/>}/>
              <Route path='BitacoraHelp' element={<BitacoraHelp/>}/>
              <Route path='EscaletasHelp' element={<EscaletasHelp/>}/>
              <Route path='GuionesHelp' element={<GuionesHelp/>}/>
              <Route path='AdminHelp' element={<AdminHelp/>} />
              <Route path='About' element={<About/>} />
          </Route>
          <Route path="Escaletas/:id" element={<Escaletas />}/>
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

    <div className="Row-Date">
      <div className='Grid'>
        <Welcome />
      </div>
      <div className='Grid'>
        <Datetime />
      </div>
        
    </div>
     )

}



export default App;
