import React from "react";
import { Outlet, Link } from "react-router-dom";

import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'


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
                        <h1>Bitácora de notas</h1>
                    </div>

                    <div>
                        <form className="Button-form">
                            <Link to='/MainMenu'>
                                <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>
                            <Link>
                                <button data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Nota</button>
                            </Link>

                            <Link>
                                <button data-bs-toggle='modal' data-bs-target='#modalsearch' type="button" class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
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
                                    <Link >
                                        <button data-bs-toggle='modal' data-bs-target='#modaledit' type="button" class="btn btn-warning"> <FaEdit size={20} color="black" />  Editar</button> 
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
            </div>
        </form>
    
            <div id='modaldefault' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                                <h3 className="Auth-form-title">Crear nota</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                        <h3 className="Text-helper">Ingresa los datos requeridos para una nueva nota</h3>
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
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"> <GiCancel size={20} color="white"/> Cancelar </button>
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
                                <h3 className="Auth-form-title">Buscar nota</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='modal-body'>
                            <h2 className="Text-helper">Ingresa los datos que necesites para buscar una nota</h2>
                            <br />
                            <div className="Menu-form">
                                <label>Título o palabra clave</label>
                                <input
                                    type="user"
                                    className="form-control mt-1"
                                    placeholder="Título o palabra clave"
                                />
                                <br />
                                <div className= 'Grid'>
                                    <label>Categoría</label>
                                    <select class="form-control mt-1" placeholder="Categoria" type="user">
                                    </select>
                                </div>
                                <div className= 'Grid'>
                                    <label>Reportero</label>
                                    <select class="form-control mt-1"  placeholder="Reportero" type="user">
                                    </select>                
                                </div>
                                <div className="Grid">
                                    <label>Formato</label>
                                    <select class="form-control mt-1"  placeholder="Reportero" type="user">
                                    </select>
                                </div>
                            </div>
                            <div className="FromDateToDate">
                                <div className= 'Grid'>
                                    <label>Buscar entre fechas</label>
                                </div>


                                <div className="Row">
                                    <div className="Grid">
                                        <label> Del </label>
                                    </div>
                                    <div className= 'Grid'>
                                        <input type="date" className="form-control mt-1 date"placeholder="Selecciona la fecha"/>
                                    </div>
                                    <div className= 'Grid' >
                                    <label> Al </label>
                                    </div>
                                    <div className="Grid">
                                        <input type="date" className="form-control mt-1 date"placeholder="Selecciona la fecha"/> 
                                    </div>
                                </div>
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

                <div id='modaledit' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                                <h3 className="Auth-form-title">Editar nota</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                        <h3 className="Text-helper">Ingresa los nuevos datos de la nota a editar y da click en Guardar para finalizar con los cambios</h3>
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


export default Bitacora


{/* <td> {{ nota.iD_Nota }} </td>    */}