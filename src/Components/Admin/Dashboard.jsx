import React from "react";
import {FaUsers} from 'react-icons/fa'
import {HiDocumentText} from 'react-icons/hi'
import {FaAngleLeft} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import { BiCameraMovie } from 'react-icons/bi'
import { FaMicrophone } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'

import { Outlet, Link } from "react-router-dom";

import Usuario from "./ListaUsuarios";

function AdminMenu(){

    return(
        
        <div className="MenuHeader">
            <Link to='/MainMenu'>
                <button type="button" class="btn btn-dark"> <FaAngleLeft size={30} color="white" /> Regresar</button>
            </Link>
            <Link to='/Admin/ListaUsuarios'>
                <button type="button" class="btn btn-primary"> <FaUsers size={30} color="white" /> Usuarios</button>
            </Link>
            <Link>
                <button type='button' class='btn btn-primary'> <BiCameraMovie size={30} color="white" /> Programas </button>
            </Link>
            <Link>
                <button type='button' class='btn btn-primary'> <BiCategory size={30} color="white" />  Categorías </button>
            </Link>
            <Link>
                <button type="button" class='btn btn-primary'> <FaMicrophone size={30} color="white" /> Formatos </button>
            </Link>

            <Outlet/>
        </div>
    )

    // function Usuario(){

    //     return(
    //         <div className="Auth-form-container-Main">
    //         <form className='Table-form'>
    //         <table class="table">
    //                 <thead>
    //                     <tr>
    //                         <th scope="col">No. Usuario</th>
    //                         <th scope="col">User</th>
    //                         <th scope="col">Nombre</th>
    //                         <th scope="col">Apellidos</th>
    //                         <th scope="col">     </th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <td scope="row">1</td>
    //                         <td>brito</td>
    //                         <td>Javier</td>
    //                         <td>Brito</td>
    //                         <td className="buttons-th"> 
    //                              <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black" />  Editar</button> 
    //                              <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
    //                         </td>
    //                     </tr>
    //                 </tbody>
    //             </table>
                
    //         </form>
    //     </div>


    //     )
    // }


}

export default AdminMenu