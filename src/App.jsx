import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route ,Link} from 'react-router-dom';
import Menu from './Components/MainMenu/MainMenu';
import PdfViewer from './Components/pdftest';

/* IMAGES */
import SIPSENewsLogo from './images/noticias.png';
import NewsnetLogo from './images/white-logo.png';
import Beto from './images/LOGO_Scale.png';
import Tommy from './images/LOGO_Tommy.png';
import Leni from './images/LeniWizard.gif';
import Welcome from './Components/Bienvenida';
import Datetime from './Components/Datetime/DatetimeText';
import Login from './Components/LoginView/LoginView';

import MainMenu from './Components/MainMenu/MainMenu';

/* BITACORA SECTION */
import Bitacora from './Components/Bitacora/BitacoraView';

/* ESCALETAS SECTION */
import EscaletasView from './Components/Escaletas/EscaletasView';
import Escaleta from './Components/Escaletas/Escaleta';
import PromptBuilder from './Components/Escaletas/PromptBuilder';
/* NOTAS SECTION */
import GuionesNotas from './Components/Notas/Redacciones';
import LeerGuion from './Components/Notas/VerRedaccion';
import NotasPendientes from './Components/Notas/NotasPendientes';

/* ADMIN SECTION */
import Dashboard from './Components/Admin/Dashboard';
import ListaUsuarios from './Components/Admin/ListaUsuarios';
import ListaProgramas from './Components/Admin/ListaProgramas';
import ListaCategorias from './Components/Admin/ListaCategorias';
import ListaFormatos from './Components/Admin/ListaFormatos';
import ListaRoles from './Components/Admin/ListaRoles';
import ListaFuentes from './Components/Admin/ListaFuentes';
import Main from './Components/MainMenu/Main';

/* HELP SECTION */
import HelpMenu from './Components/Ayuda/HelpDashboard';
import About from './Components/Ayuda/AboutNewsnet';
import AdminHelp from './Components/Ayuda/AdminHelp';

import BitacoraHelp from './Components/Ayuda/BitacoraHelp';
import GuionesHelp from './Components/Ayuda/GuionesHelp';
import EscaletasHelp from './Components/Ayuda/EscaletasHelp';

import React from 'react';
import Introduccion from './Components/Ayuda/Introduction';
import EditarGuion from './Components/Notas/EditarRedaccion';
import Default from './Components/Default';

function App() {
  const LimpiarSession = () => {
    sessionStorage.removeItem('selectedButton');
  };


  function cambiarClase() {
    const elementos = document.querySelectorAll('.darkb-active');
    elementos.forEach((elemento) => {
      elemento.classList.remove('darkb-active');
      elemento.classList.add('darkb');
    });
  }
  

  function loginwindow() {
    const rutaActual = window.location.pathname;
    if (rutaActual != '/') {
      return (
        <div className="options">
          <Link to="/HelpDashboard/Introduccion">
            <a onClick={() => {LimpiarSession(); cambiarClase()}} href="#">
              Ayuda
            </a>
          </Link>
          <Link to="/UserManual">
            <a onClick={() => {LimpiarSession(); cambiarClase()}} href="#">
              {' '}
              Manual de estilo
            </a>
          </Link>
          <a
            className="links"
            onClick={() => {
              LimpiarSession();
              cerrarsesion();
            }}
          >
            Cerrar Sesión
          </a>
        </div>
      );
    } else {
      return (
        <div className="options">
          <Link to="/UserManual">
            <a href="#"> Manual de estilo</a>
          </Link>
        </div>
      );
    }
  }

  const cerrarsesion = () => {
    document.cookie =
      'Usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/MainMenu';
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <Link to="/Main" onClick={() => cambiarClase()}>
          <img src={SIPSENewsLogo} alt="logo" />
          <span className="separator"></span>
          <img src={NewsnetLogo} alt="logo" />
          </Link>
          
       
        </div>

        <div className="DateTime">{loginwindow(true)}</div>
      </header>

      <header className="Datetime-header">
        <div className="Date-text">
          <TextSample/>
        </div>
      </header>

      <body className="App-body">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/UserManual" element={<PdfViewer />} />

          <Route path='Main' element={<Main/>}/>
          <Route path="MainMenu" element={<Menu />}/>
          <Route path="Admin" element={<Dashboard />}>
              <Route path="ListaProgramas" element={<ListaProgramas />} />
              <Route path="ListaCategorias" element={<ListaCategorias />} />
              <Route path="ListaFormatos" element={<ListaFormatos />} />
              <Route path="ListaRoles" element={<ListaRoles />} />
              <Route path="ListaUsuarios" element={<ListaUsuarios />} />
              <Route path="ListaFuentes" element={<ListaFuentes />} />
            </Route>

          <Route path="Escaletas" element={<EscaletasView />} />
            <Route path="Bitacora" element={<Bitacora />} />
            <Route path="Notas" element={<GuionesNotas />} />
            <Route path="Pendientes" element={<NotasPendientes />} />
            <Route path="LeerGuion/:id" element={<LeerGuion />} />
            <Route path="EditarGuion/:id" element={<EditarGuion />} />
            <Route path="Escaleta/:id" element={<Escaleta />} />
            <Route path="Prompt/:id" element={<PromptBuilder />} />
          
          <Route path="HelpDashboard" element={<HelpMenu />}>
            <Route path="Introduccion" element={<Introduccion />} />
            <Route path="BitacoraHelp" element={<BitacoraHelp />} />
            <Route path="EscaletasHelp" element={<EscaletasHelp />} />
            <Route path="GuionesHelp" element={<GuionesHelp />} />
            <Route path="AdminHelp" element={<AdminHelp />} />
            <Route path="About" element={<About />} />
          </Route>
          <Route path="*" element={<Default />}></Route>
        </Routes>
      </body>

      <footer className="App-footer">
        <br />
        <h5>
          Televisora de Cancún SA. de CV. © 2023 Todos los derechos reservados{' '}
        </h5>
        <div>
          <h7>Powered & Developed by UPQROO Software Team</h7>
          <h6> Beto, Tommy & Leni </h6>
          <div>
            <img src={Beto} className="Logo-BT" alt="logo" />
            <img src={Tommy} className="Logo-BT" alt="logo" />
            <img src={Leni} className="Logo-BT" alt="logo" />
          </div>
        </div>
        <br />
      </footer>
    </div>
  );
}

const TextSample = (props) => {
  console.log(props);

  return (
    <div className="Row-Date">
      <div className='Grid'>
       <MainMenu/>
      </div>

      <div className="Grid-bienvenida">
        <Welcome />
        <Datetime />
      </div>
    </div>
  );
};

export default App;
