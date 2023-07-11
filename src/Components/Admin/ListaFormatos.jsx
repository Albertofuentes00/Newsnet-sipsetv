import React from "react";
import { Link, Outlet } from "react-router-dom";

import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';


function ListaFormatos(){

    return(
        <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h3>Lista de formatos</h3>
                    </div>
        
                    <div>
                        <form className="Button-form">
                                <button data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Formato</button>
                        </form>
                    </div>
                    <br />
        
                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No. Formato</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>          
                                    <td>TX</td>
                                    <td className="buttons-th"> 
                                        <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>TX/IN</td>
                                    <td className="buttons-th">
                                        <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white'/> Eliminar</button> 
                                    </td>
                                </tr>
                    <tr>
                                    <td scope="row">3</td>
                                    <td>FT</td>
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
                                <h3 className="Auth-form-title">Nuevo Formato</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                        <h3 className="Text-helper">Ingresa los datos requeridos para crear un nuevo formato</h3>


                        <div className= 'Grid'>
                		<label>Nombre</label>
               			<input
                		type="user"
                		className="form-control mt-1"
                		placeholder="Ingrese el nombre"/>
            		</div>

            		<br />


            		<div className="Button-form">
              		<Link to='/MainMenu'>
              		<button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
              		</Link>
              		<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"> <GiCancel size={20} color="white"/> Cancelar </button>
            		</div>
                                
                        </div>                
                                    
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ListaFormatos