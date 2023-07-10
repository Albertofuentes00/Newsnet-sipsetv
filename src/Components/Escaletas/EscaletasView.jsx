import React from "react";

import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'

import { Outlet, Link } from "react-router-dom";

function Escaletas(){

    return(
        <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h1>Escaletas</h1>
                    </div>

                    <div>
                        <form className="Button-form">
                            <Link to='/MainMenu'>
                                <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>

 		                    <Link >
                                <button data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Nueva Escaleta</button>                
                    	    </Link>

                            <Link >
                                <button  data-bs-toggle='modal' data-bs-target='#modalsearch' type="button" class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
                            </Link>
                        </form>
                    </div>
                    <br />

                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
				   <th scope="col">#</th>
                            	   <th scope="col">Programa</th>
                            	   <th scope="col">Fecha</th>
                            	   <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                     <td scope="row">1</td>
                            	     <td>SIPSE Noticias edicion matutina</td>
                                     <td>19-06-23</td>
                                     <td className="buttons-th"> 
                            	<Link to='/EscaletasMove'>
                                	<button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
                            	</Link>
                                 <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                            	     </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                            	    <td>SIPSE Noticias edicion vespertina</td>
                                    <td>19-06-23</td>
                                    <td className="buttons-th"> 
                                    <Link to='/PruebaMove'>
                                        <button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
                                    </Link>
                                      <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>Cancun Vive</td>
                                    <td>19-06-23</td>
                                    <td className="buttons-th"> 
                                       
                                        <button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
                                        <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
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
                                <h3 className="Auth-form-title">Crear escaleta</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                        <h3 className="Text-helper">Ingresa los datos requeridos para una nueva escaleta</h3>
                        <br />
                        <div className="Menu-form">
                                        <label>Programa</label>
                                        <select name="programa" className="form-control"></select>
                        </div>
                        <br />
                        <div className= 'Grid'>
                            <label>Fecha</label>
                            <input
                            type="date"
                            className="form-control mt-1"
                            placeholder="Selecciona la fecha"
                            >
                            </input>
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
        

        <div id='modalsearch' className='modal fade' aria-hidden='true'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h3 className="Auth-form-title">Buscar escaleta</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='modal-body'>
                            <h3 className="Text-helper">Ingresa los datos requeridos para buscar una escaleta existente</h3>
                            <br />
                                <div className="Menu-form">
                                    <label>Programa</label>
                                    <select name="programa" className="form-control"></select>
                                </div>
                                <br />
                                <div className= 'Grid'>
                                    <label>Fecha</label>
                                    <input
                                    type="date"
                                    className="form-control mt-1"
                                    placeholder="Selecciona la fecha"
                                    >
                                    </input>
                                </div>
                                <br />
                                <div>
                                    <button type="button" class="btn btn-primary"> <FaSearch size={20} color="white"/> Buscar </button>
                                    <button type="button" class="btn btn-danger"> <GiCancel size={20} color="white"/> Cancelar </button>
                                </div>    
                            </div>
                    </div>
            </div>
        </div>
    </div>
    

    )
}


export default Escaletas
