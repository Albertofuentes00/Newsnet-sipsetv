import React from "react";
import Welcome from "../Bienvenida";
import { FaList } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa"
import {FaUser} from 'react-icons/fa'
import { Outlet, Link } from "react-router-dom";
import Cookies from 'js-cookie';

function Menu() {


    function botonadmin() {
      try {
        const cadena = Cookies.get('Usuario');
        const partes = cadena.split('/');
        const rol = partes[2];
        
        if (rol === "Administrador") {
          return (
            <li>
              <Link to='/Admin/ListaUsuarios'> 
                <button type="button" className="btn btn-light">
                  <FaUser size={30} color='white' /> Admin
                </button>
              </Link>
            </li>
          );
        } else {
          return null; // No devuelve nada cuando el rol no es "Usuario"
        }
      } catch (error) {
        console.log(error);
      }
       
      }


  

    return (
        <div className="Auth-form-MainMenu">
            <form className='Auth-form-Main'>
                <div className='Main-Welcome' >
                    <h3 className="Auth-form-title"><Welcome 
                        name= "Alberto" 
                        apellidos= "Fuentes"/>
                    </h3>
                    <h4 className='Auth-form-subtitle'>Escoge una opción</h4>
                    <br />
                    <div className= 'Menu-form'>
                        <div class="menu">
                        <ul class="horizontal-list">
                        <li>
                            <Link to='/Bitacora'>
                                <button type="button" class="btn btn-light" > < FaBook size={30} color="white" /> Bitácora</button>
                            </Link>
                        </li>    
                        <li>
                            <Link to='/EscaletaPrograma'>
                                <button type="button" class="btn btn-light" > <FaList size={30} color="white" /> Escaletas</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Notas'>
                                <button type="button" class="btn btn-light" > <FaFileAlt size={30} color="white" /> Notas</button>
                            </Link>
                        </li>
                           {botonadmin(true)}
                        </ul>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}



export default Menu;




