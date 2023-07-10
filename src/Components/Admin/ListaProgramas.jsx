import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";



function ListaProgramas(){

    return(
<div className="Auth-form-container">

<form className="Auth-form-table">
    <div className='Auth-Maintable'>
            <div>
                <h3>Lista de programas</h3>
            </div>

            <div>
                <form className="Button-form">
                    <Link >
                        <button data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Programa</button>
                    </Link>
                </form>
            </div>
            <br />

        <div className="Auth-form-container-Main">
            
            <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No. Programa</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">     </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>          
                            <td>Cancun Vive</td>
                            <td className="buttons-th"> 
                                <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>Sipse Noticias Edicion Matutina</td>
                            <td className="buttons-th">
                                <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white'/> Eliminar</button> 
                            </td>
                        </tr>
			<tr>
                            <td scope="row">2</td>
                            <td>Sipse Noticias Edicion Vespertina</td>
                            <td className="buttons-th">
                                <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white'/> Eliminar</button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            
        </div>
    </div>
</form>
    <div id='modaldefault' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                                <h3 className="Auth-form-title">Nuevo Programa</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                        <h3 className="Text-helper">Ingresa los datos requeridos para crear un nuevo programa</h3>


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
            <br />
        </div>

</div>
    )

}


export default ListaProgramas