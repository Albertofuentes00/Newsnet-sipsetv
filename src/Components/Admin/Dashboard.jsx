import React from "react";
import {FaUsers} from 'react-icons/fa'
import {HiDocumentText} from 'react-icons/hi'
import {FaAngleLeft} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import { BiCameraMovie } from 'react-icons/bi'
import { FaMicrophone } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'
import { FaUserCog } from 'react-icons/fa'

import { Outlet, Link } from "react-router-dom";

import Usuario from "./ListaUsuarios";

function AdminMenu(){

    return(
        <body className="App-body">
        <header>
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
            <Link>
                <button type="button" class='btn btn-primary'>  <FaUserCog size={30} color='white'/> Roles </button>
            </Link>  
        </div>
        </header> 
        
        <Outlet />
        </body>
        
       
        
    )


}

export default AdminMenu