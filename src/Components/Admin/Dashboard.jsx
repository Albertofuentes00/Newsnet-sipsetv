import React from "react";
import {FaUsers} from 'react-icons/fa'
import {HiDocumentText} from 'react-icons/hi'
import {BiSolidNews} from 'react-icons/bi'
import {BiSolidCameraMovie} from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";

function Dashboard(){

    return(
        
        <div className="Dashboard">
            <div className="widget">
                <h2> <FaUsers size={20} color=" white" /> Usuarios</h2>
            </div>
            <div className="widget">
                {/* <h2> <BiSolidCameraMovie size={20} color=" white" /> Programas</h2> */}
            </div>
            <div className="widget">
                {/* <h2> <BiSolidNews size={20} color=" white" /> Categorias</h2> */}
            </div>
            <div className="widget">
                <h2> <HiDocumentText size={20} color=" white" /> Formatos</h2>
            </div>
        </div>

        
    )

    function Usuario(){

        return(
            <div className="Auth-form-container-Main">
            <form className='Table-form'>
            <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No. Usuario</th>
                            <th scope="col">User</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">     </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>brito</td>
                            <td>Javier</td>
                            <td>Brito</td>
                            <td className="buttons-th"> 
                                 <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black" />  Editar</button> 
                                 <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </form>
        </div>


        )
    }


}

export default Dashboard