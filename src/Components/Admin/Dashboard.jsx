import React from "react";
import {FaUsers} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'
import { BiCameraMovie } from 'react-icons/bi'
import { FaMicrophone } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'
import { FaUserCog } from 'react-icons/fa'
import { Outlet, Link } from "react-router-dom"
import { FaList } from "react-icons/fa";
import Cookies from "js-cookie";

function AdminMenu(){
    
    const cadena = Cookies.get('Usuario');
    const partes = cadena.split('/');
    const rol = partes[2];
    
    if (rol != "Administrador") {

        window.location.href = '/MainMenu';

      }
      else{
        return(
            <body className="App-body">
            <header className="mainheader">
                <div className="MenuHeader">
                <Link to='/MainMenu'>
                    <button type="button" class="btn btn-dark"> <FaAngleLeft size={30} color="white" /> Regresar</button>
                </Link>
                <Link to='ListaUsuarios'>
                    <button type="button" class="btn btn-primary"> <FaUsers size={30} color="white" /> Usuarios</button>
                </Link >
                <Link to='ListaProgramas'>
                    <button type='button' class='btn btn-primary'> <BiCameraMovie size={30} color="white" /> Programas </button>
                </Link>
                <Link to='ListaCategorias'>
                    <button type='button' class='btn btn-primary'> <BiCategory size={30} color="white" />  Categorías </button>
                </Link>
                <Link to='ListaFormatos'>
                    <button type="button" class='btn btn-primary'> <FaMicrophone size={30} color="white" /> Formatos </button>
                </Link>  
                <Link to='ListaRoles'>
                    <button type="button" class='btn btn-primary'>  <FaUserCog size={30} color='white'/> Roles </button>
                </Link>  
                <Link to='ListaFuentes'>
                    <button type="button" className="btn btn-primary"> <FaList size={30} color="white"/> Fuentes </button>
                </Link>
            </div>
            </header> 
            
            <Outlet />
            </body>
            
           
            
        )
   
      }

    }







export default AdminMenu