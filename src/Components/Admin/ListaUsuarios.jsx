import React from "react";
import { Link, Outlet } from "react-router-dom";

import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function ListaUsuarios(){

    return(
<div className="Auth-form-container">

<form className="Auth-form-table">
    <div className='Auth-Maintable'>
            <div>
                <h3>Lista de usuarios</h3>
            </div>

            <div>
                <form className="Button-form">
         <Link to='NuevoUsuario'>
                        <button type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Usuario</button>
                    </Link>
                </form>
            </div>
            <br />

        <div className="Auth-form-container-Main">
            
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
                            <td scope="row">1</td>          
                            <td>Javier</td>
                            <td>Brito</td>
                            <td>jbrito</td>
                            <td>12345</td>
                            <td className="buttons-th"> 
                                <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black"/> Editar</button> 
                                <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>Iliana</td>
                            <td>Pluma</td>
                            <td>lilpluma</td>
                            <td>2468</td>
                            <td className="buttons-th">
                                <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black"/> Editar</button> 
                                <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white'/> Eliminar</button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            
        </div>
        <Outlet/>


    </div>
</form>
</div>
    )

}


export default ListaUsuarios