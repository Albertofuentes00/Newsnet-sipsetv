import React from "react";

import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa'

import { Outlet, Link } from "react-router-dom";


function GuionesNotas(){
    
    return (
        
        
        <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h1>Bitácora de notas</h1>
                    </div>

                    <div>
                        <form className="Button-form">
                            <Link to='/MainMenu'>
                                <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>

                            <Link to='/BuscarNota'>
                                <button type="button" class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
                            </Link>
                        </form>
                    </div>
                    <br />

                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No. Nota</th>
                                    <th scope="col">Título</th>
                                    <th scope="col">Categoría</th>
                                    <th scope="col">Formato</th>
                                    <th scope="col">Reportero</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Manifestacion</td>
                                    <td>Noticias</td>
                                    <td>TX</td>
                                    <td>Brito</td>
                                    <td>11-06-23</td>
                                    <td className="buttons-th"> 
                                        <Link to='/LeerGuion'>
                                            <button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
                                        </Link>

                                        <Link to='/PruebaGuion' >
                                        <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black" />  Editar</button> 
                                        </Link>
                                        <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>    
                                    <td>Manifestacion</td>
                                    <td>Noticias</td>
                                    <td>TX</td>
                                    <td>Brito</td>
                                    <td>11-06-23</td>
                                    <td className="buttons-th"> 
					<Link to='/CrearGuion'>
                    <button type="button" class='btn btn-success'>  <FaPlusSquare size={20} color="white"/> Crear guión </button>
                    </Link>
                    
                    
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Manifestacion</td>
                                    <td>Noticias</td>
                                    <td>TX</td>
                                    <td>Brito</td>
                                    <td>11-06-23</td>
                                    <td className="buttons-th">
					<button type="button" class='btn btn-success'>  <FaPlusSquare size={20} color="white"/> Crear guión </button>
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

export default GuionesNotas