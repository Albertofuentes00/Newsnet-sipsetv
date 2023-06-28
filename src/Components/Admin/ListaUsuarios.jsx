import React from "react";
import { Link, Outlet } from "react-router-dom";

import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function ListaUsuarios(){

    return(
        <body>
             <div>
                <h3>Lista de Usuarios</h3>
            </div>

            <div>
                <form className="Button-form">
                    <Link to='NuevoUsuario'>
                        <button type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Usuario</button>
                    </Link>

                    <Link to='BuscarUsuario'>
                        <button type="button" class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
                    </Link>
                </form>
            </div>

        <div className="Auth-form-container-Main">
            <form className='Table-form'>
            <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No. Usuario</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">User</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">     </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>          {/* <td> {{ nota.iD_Nota }} </td>    */}
                            <td>Javier</td>
                            <td>Brito</td>
                            <td>jbrito</td>
                            <td>12345</td>
                            <td className="buttons-th"> 
                                 <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black" />  Editar</button> 
                                 <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </form>
        </div>
        <Outlet/>
        </body>
    )

}


export default ListaUsuarios