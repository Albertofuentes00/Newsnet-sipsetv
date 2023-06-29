import React from "react";
import { Outlet, Link } from "react-router-dom";


import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa'

function Bitacora() {

    return (
        
    <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h3>Bitácora de notas</h3>
                        <h6>En esta sección hará gestion de la creación, lectura, edición y eliminación de las notas y sus guiones, así como 
                            la búsqueda de una nota en especifico
                        </h6>
                    </div>

                    <div>
                        <form className="Button-form">
                            <Link to='/MainMenu'>
                                <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>
                            <Link to='/CrearNota'>
                                <button type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Nota</button>
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
                                    <Link>
                                        <button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
                                    </Link>
                                    <Link to='/EditarNota' >
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
                                        <button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
                                        <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black"/> Editar</button> 
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

                                        <button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
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


export default Bitacora


{/* <td> {{ nota.iD_Nota }} </td>    */}