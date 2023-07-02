import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";


import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa'

function AddNotes() {


    const CheckboxExample = () => {
        const [isChecked, setChecked] = useState(false);
      
        const handleCheckboxChange = () => {
          setChecked(!isChecked);
        };
    }
    return (
        
    <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h3>Agregar notas a Escaleta</h3>
                        <h6>Selecciona las notas que desea colocar en la escaleta
                        </h6>
                    </div>

                    <div>
                        <form className="Button-form">
                            <Link to='/PruebaMove'>
                                <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>
                            <Link to='/CrearNota'>
                                <button type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Notas</button>
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
                                    <td> 
                                        <input
                                        type="checkbox"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>    
                                    <td>Manifestacion</td>
                                    <td>Noticias</td>
                                    <td>TX</td>
                                    <td>Brito</td>
                                    <td>11-06-23</td>
                                    <td> 
                                        <input
                                        type="checkbox"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Manifestacion</td>
                                    <td>Noticias</td>
                                    <td>TX</td>
                                    <td>Brito</td>
                                    <td>11-06-23</td>
                                    <td>
                                        <input
                                        type="checkbox"/>
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


export default AddNotes

