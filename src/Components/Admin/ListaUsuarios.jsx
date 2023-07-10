import React from "react";
import { Link, Outlet } from "react-router-dom";

import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'


function ListaUsuarios(){

    return(
        <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h3>Lista de usuarios</h3>
                    </div>
                                                                        {/* data-bs-toggle='modal' data-bs-target='#modaldefault' */}
                    <div>
                        <form className="Button-form">                      
                            <Link to='/NewUser'>
                                <button /*onClick={()=> OpenModal(1)}*/ type="button" class="btn btn-success" > <FaPlusSquare size={20} color="white"/> Nuevo Usuario</button>
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
                                    <th scope="col">Rol</th>
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
                                    <td>Admin</td>
                                    <td className="buttons-th"> 
                                        <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>Iliana</td>
                                    <td>Pluma</td>
                                    <td>lilpluma</td>
                                    <td>2468</td>
                                    <td>Reportero</td>
                                    <td className="buttons-th">
                                        <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white'/> Eliminar</button> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    
                </div>
                <Outlet/>


            </div>
        </form>

        <div id='modaldefault' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                                <h3 className="Auth-form-title">Nuevo Usuario</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                        <h3 className="Text-helper">Ingresa los datos requeridos para crear un nuevo usuario</h3>
                        <div className="Menu-form">
                                        <label>Título</label>
                                        <input
                                            type="user"
                                            className="form-control mt-1"
                                            placeholder="Título"
                                        />

                                        <div className= 'Grid'>
                                            <label>Categoría</label>
                                            <select class="form-control mt-1" placeholder="Categoria" type="user">
                                            {/* <Options options={CategoriasList}/> */}
                                            </select>

                                            <br />
                                            <label>Reportero</label>
                                            <select class="form-control mt-1"  placeholder="Reportero" type="user">
                                            {/* <Options options={ReporterosList} /> */}
                                            </select>
                                        </div>
                                    <div class= 'Grid'>

                                    </div>
                                        <div className= 'Grid'>
                                            <label>Formato</label>
                                            <select  class="form-control mt-1" placeholder="Formato" type="user">
                                            {/* <Options options={formatosList} /> */}
                                            </select>
                                            <br />
                                            <label>Fecha</label>
                                            <input type="date" className="form-control mt-1"placeholder="Selecciona la fecha"/>                     
                                        </div>
                                    </div>
                                <br />
                            <div>
                                <button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
                                <button type="button" class="btn btn-danger"> <GiCancel size={20} color="white"/> Cancelar </button>
                            </div>
                                
                        </div>                
                                    
                        </div>
                    </div>
                        <br />
                </div>



    </div>
    )

}


export default ListaUsuarios