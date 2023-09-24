import { useEffect, useState } from "react"
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'
import { Link } from "react-router-dom";

import SearchEscaleta from "../SearchEscaletas";

const Escaletas=()=>{
    const [Datos, SetDatos] = useState([]);
  
    useEffect(()=>{
        GetDatos();
    },[]);
  
    const GetDatos = async ()=>{
        const respuesta = await axios.get('https://localhost:7201/Programa/Get');
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
    }


    return(
        <div className="Auth-form-container">


            <div className="Grid">

            <SearchEscaleta/>

            <form className="Auth-form-table">
                <div className='Auth-Maintable'>
                <div className="Row">
                    <h1>Escaletas</h1>
                    <div className="Button-form">
                    <Link to='/MainMenu'>
                        <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                    </Link>
                  </div>
                </div>

                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
				                   <th scope="col">#</th>
                            	   <th scope="col">Programa</th>
                                   <th scope="col">Categoria</th>
                            	   <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {Datos.map((Datos,i) =>(
                                <tr key={Datos.iD_Programa}>
                                <td>{(i+1)}</td>
                                <td>{Datos.nombre_Programa}</td>
                                <td>{Datos.categoria.nombre_Categoria}</td>
                                <td className="buttons-th">
                                <Link to={'/Escaletas/' + Datos.pkPrograma} className="btn btn-success">
                                 <FaEye size={20} color="white" /> Ver
                                </Link>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        
                    
                </div>
            </div>
        </form>
        </div>





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
    </div>
    )
}


export default Escaletas
