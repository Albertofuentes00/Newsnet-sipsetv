import { useEffect, useState } from 'react';
import { FaList } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Menu() {
  const initialSelectedButton = sessionStorage.getItem('selectedButton') || 1;

  const [selectedButton, setSelectedButton] = useState(parseInt(initialSelectedButton));

  // Función para cambiar la clase del botón
  const changeButtonClass = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  useEffect(() => {
    sessionStorage.setItem('selectedButton', selectedButton);
  }, [selectedButton]);

  function botonadmin() {
    try {
      const cadena = Cookies.get('Usuario');
      const partes = cadena.split('/');
      const rol = partes[2];

      if (rol === 'Administrador') {
        return (
          <div className="horizontal-list">
            <li>
              <Link to="Bitacora" className={selectedButton === 2 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(2)} >
                <button type="button" id="darkb">
                  <FaBook size={25} /> Bitácora
                </button>
              </Link>
            </li>

            <li>
              <Link to="Notas" className={selectedButton === 3 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(3)}>
                <button type="button" id="darkb">
                  {' '}
                  <FaFileAlt size={25} /> Notas
                </button>
              </Link>
            </li>            
            <li>
              <Link to="Escaletas" className={selectedButton === 4 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(4)}>
                <button type="button" id="darkb">
                  {' '}
                  <FaList size={25} /> Escaletas
                </button>
              </Link>
            </li>
            <li>
              <Link to="Admin/ListaUsuarios" className={selectedButton === 5 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(5)}>
                <button type="button" id="darkb">
                  <FaUser size={25} /> Admin
                </button>
              </Link>
            </li>
          </div>
        );
      } else if (rol === 'Reportero') {
        return (
          <div className="horizontal-list" > 
            <li>
              <Link to="Bitacora" className={selectedButton === 2 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(2)}>
                <button type="button" id="darkb" className='darkb'>
                  {' '}
                  <FaBook size={25} /> Bitácora
                </button>
              </Link>
            </li>
            <li>
              <Link to="Notas" className={selectedButton === 3 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(3)}>
                <button type="button" id="darkb" className='darkb'>
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
              <Link to="Bitacora" className={selectedButton === 2 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(2)}>
                <button type="button" id="darkb" className='darkb'>
                  {' '}
                  <FaBook size={25} /> Bitácora
                </button>
              </Link>
            </li>

            <li>
              <Link to="Notas" className={selectedButton === 3 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(3)}>
                <button type="button" id="darkb" className='darkb'>
                  {' '}
                  <FaFileAlt size={25} /> Notas
                </button>
              </Link>
            </li>            
            <li>
              <Link to="Escaletas" className={selectedButton === 4 ? 'darkb-active' : 'darkb'} onClick={()=> changeButtonClass(4)}>
                <button type="button" id="darkb" className='darkb'>
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
