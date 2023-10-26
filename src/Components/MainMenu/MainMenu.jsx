import React from 'react';
import Welcome from '../Bienvenida';
import { FaList } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Menu() {
  function botonadmin() {
    try {
      const cadena = Cookies.get('Usuario');
      const partes = cadena.split('/');
      const rol = partes[2];

      if (rol === 'Administrador') {
        return (
          <div className="horizontal-list">
            <li>
              <Link to="/Bitacora">
                <button type="button" id="darkb" class="Main-Button">
                  {' '}
                  <FaBook size={30} /> Bitácora
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Escaletas">
                <button type="button" id="darkb" class="Main-Button">
                  {' '}
                  <FaList size={30} /> Escaletas
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Notas">
                <button type="button" id="darkb" class="Main-Button">
                  {' '}
                  <FaFileAlt size={30} /> Notas
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Admin/ListaUsuarios">
                <button type="button" id="darkb" className="Main-Button">
                  <FaUser size={30} /> Admin
                </button>
              </Link>
            </li>
          </div>
        );
      } else if (rol === 'Reportero') {
        return (
          <div className="horizontal-list">
            <li>
              <Link to="/Bitacora">
                <button type="button" id="darkb" class="Main-Button">
                  {' '}
                  <FaBook size={30} /> Bitácora
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Notas">
                <button type="button" id="darkb" class="Main-Button">
                  {' '}
                  <FaFileAlt size={30} /> Notas
                </button>
              </Link>
            </li>
          </div>
        );
      } else {
        return (
          <div className="horizontal-list">
            <li>
              <Link to="/Bitacora">
                <button type="button" id="darkb" class="Main-Button">
                  {' '}
                  <FaBook size={30} /> Bitácora
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Escaletas">
                <button type="button" id="darkb" class="Main-Button">
                  {' '}
                  <FaList size={30} /> Escaletas
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Notas">
                <button type="button"  id="darkb" class="Main-Button">
                  {' '}
                  <FaFileAlt size={30} /> Notas
                </button>
              </Link>
            </li>
          </div>
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Auth-form-MainMenu">
        <div className="Main-Welcome">
          <h3 className="Auth-form-title">
          LET'S WORK SIPSE TEAM
          </h3>
          <form /* className="Auth-form-Main" */>
          <div className="Menu-form">
            <div class="menu">
              <ul>{botonadmin(true)}</ul>
            </div>
          </div>
          </form>
        </div>
    </div>
  );
}

export default Menu;
