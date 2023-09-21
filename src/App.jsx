import './App.css'
import "bootstrap/dist/css/bootstrap.min.css" 

import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Menu from './Components/MainMenu/MainMenu';

/* IMAGES */
import SIPSENewsLogo from './images/noticias.png'
import NewsnetLogo from './images/white-logo.png'
import Beto from './images/LOGO_Scale.png'
import Tommy from './images/LOGO_Tommy.png'
import Welcome from './Components/Bienvenida';
import Datetime from './Components/Datetime/DatetimeText'
import Login from './Components/LoginView/LoginView';
import Registro from './Components/LoginView/Registro';

import SearchMenu from './Components/SearchMenu';
import SearchEscaleta from './Components/SearchEscaletas';

/* BITACORA SECTION */
import Bitacora from './Components/Bitacora/BitacoraView';

/* ESCALETAS SECTION */
import EscaletaPrograma from './Components/Escaletas/EscaletaPrograma';
import Escaletas from './Components/Escaletas/EscaletasView';
import ArmadoEscaleta from './Components/Escaletas/ArmadoEscaleta';


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
import { click } from '@testing-library/user-event/dist/click';


function App() {


  function loginwindow(){
    const rutaActual = window.location.pathname;
    if (rutaActual != '/') {
      return (
      <div className="options">

      <Link to="/MainMenu">
        <a href="#">Menu</a>
      </Link>
      <Link to='/HelpDashboard/Introduccion'>
         <a href="#">Ayuda</a>
      </Link> 
         <a href="#" /*onClick={handleDownloadClick }*/ > Manual de estilo</a>
         <a onClick={()=> cerrarsesion()}>Cerrar Sesión</a>
    </div>
      );
    }else{
      return (
      <div className="options">
         <a href="#" /*onClick={handleDownloadClick }*/ > Manual de estilo</a>
    </div>
      );
    }
  }
 
  //DESCARGA EL MANUAL DE ESTILO AL DAR CLICK
  // const handleDownloadClick = () => {
  //   const fileUrl = '/Descargas';

  //   const link = document.createElement('a');
  //   link.href = fileUrl;
  //   link.download = "/Descargas/manual.doc";

  //   document.body.appendChild(link)
  //   link.click();

  //   document.body.removeChild(link);
  // }
  const cerrarsesion=()=> {
    
    document.cookie = "Usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/MainMenu';
  }


  return (
    <div className="App">
      <header className='App-header'> 
        <div className='logo'>
            <img src={SIPSENewsLogo} alt="logo" />
            <span className="separator"></span>
            <img src={NewsnetLogo} alt="logo" />
        </div>
        
        <div className='DateTime'>
        {loginwindow(true)}
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
          <Route path='/SignIn' element={<Registro/>}/>

          <Route path='MainMenu' element={<Menu/>}/>
            <Route path="EscaletaPrograma" element={<EscaletaPrograma />}/> 
           <Route path='AgregarNotas' element={<AddNotes/>} />
            <Route path='ArmadoEscaleta/:id' element={<ArmadoEscaleta/>} />
            <Route path="Bitacora" element={<Bitacora />}/>

            <Route path="Notas" element={<GuionesNotas/>}/>
            <Route path='CrearGuion' element={<NuevoGuion/>} />
            <Route path='LeerGuion/:id' element= {<LeerGuion/> } />
            <Route path='EditarGuion/:id' element= {<EditarGuion/>} />
            
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
            <h6> <img src={Beto} className='Logo-BT' alt="logo" />  Beto & Tommy <img src={Tommy} className='Logo-BT' alt='logo' /> </h6>
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
