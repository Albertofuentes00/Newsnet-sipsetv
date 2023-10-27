import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Menu() {
  const [selectedButton, setSelectedButton] = useState(1);

  const changeButtonClass = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };
  function botonadmin() {
    try {
      const cadena = Cookies.get('Usuario');
      const partes = cadena.split('/');
      const rol = partes[2];

      if (rol === 'Administrador') {
        return (
          <div className="horizontal-list">
            <li>
              <Link to="Bitacora" className={selectedButton === 2 ? 'active-menu-btn' : 'linkbtnad2'} id="btn-2" onClick={()=> changeButtonClass(2)} >
                <button type="button" id="darkb" >
                  <FaBook size={25} /> Bitácora
                </button>
              </Link>
            </li>

            <li>
              <Link to="Notas" className={selectedButton === 3 ? 'active-menu-btn' : 'linkbtnad2'} id="btn-3" onClick={()=> changeButtonClass(3)}>
                <button type="button" id="darkb" >
                  {' '}
                  <FaFileAlt size={25} /> Notas
                </button>
              </Link>
            </li>            
            <li>
              <Link to="Escaletas" className={selectedButton === 4 ? 'active-menu-btn' : 'linkbtnad2'} id="btn-4" onClick={()=> changeButtonClass(4)}>
                <button type="button" id="darkb">
                  {' '}
                  <FaList size={25} /> Escaletas
                </button>
              </Link>
            </li>
            <li>
              <Link to="Admin/ListaUsuarios" className={selectedButton === 5 ? 'active-menu-btn' : 'linkbtnad2'} id="btn-5" onClick={()=> changeButtonClass(5)}>
                <button type="button" id="darkb">
                  <FaUser size={25} /> Admin
                </button>
              </Link>
            </li>
          </div>
        );
      } else if (rol === 'Reportero') {
        return (
          <div className="horizontal-list">
            <li>
              <Link to="Bitacora">
                <button type="button" id="darkb">
                  {' '}
                  <FaBook size={25} /> Bitácora
                </button>
              </Link>
            </li>
            <li>
              <Link to="Notas">
                <button type="button" id="darkb">
                  {' '}
                  <FaFileAlt size={25} /> Notas
                </button>
              </Link>
            </li>
          </div>
        );
      } else {
        return (
          <div className="horizontal-list">
            <li>
              <Link to="Bitacora">
                <button type="button" id="darkb">
                  {' '}
                  <FaBook size={25} /> Bitácora
                </button>
              </Link>
            </li>

            <li>
              <Link to="Notas">
                <button type="button" id="darkb">
                  {' '}
                  <FaFileAlt size={25} /> Notas
                </button>
              </Link>
            </li>            
            <li>
              <Link to="Escaletas">
                <button type="button" id="darkb">
                  {' '}
                  <FaList size={25} /> Escaletas
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
    <div class="menu">
    <ul>{botonadmin(true)}</ul>
  </div>
  );
}

export default Menu;
