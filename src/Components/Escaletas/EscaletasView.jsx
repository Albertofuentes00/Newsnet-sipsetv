import React from "react";

import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';

import { Outlet, Link } from "react-router-dom";

function Escaletas(){

    return(
        <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h1>Escaletas</h1>
                        <h6>En esta sección puede gestionar las escaletas de un programa, da Click en "Agregar Nueva Escaleta" y "Buscar" para realizar
                            tareas de creacion y busqueda de Escaletas respectivamente, da Click en "Ver" para visualizar y 
                            editar el contenido de la escaleta deseada, da Click "Eliminar" para eliminar dicha escaleta 
                        </h6>
                    </div>

                    <div>
                        <form className="Button-form">
                            <Link to='/MainMenu'>
                                <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>

 		                    <Link to='/NuevaEscaleta'>
                                <button type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Nueva Escaleta</button>                
                    	    </Link>

                            <Link to='/BuscarEscaleta'>
                                <button type="button" class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
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
                                       <Link to='/Prueba'>
                                        <button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
                                       </Link>
                                       <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
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


export default Escaletas
