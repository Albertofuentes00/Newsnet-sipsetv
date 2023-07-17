import { useEffect, useState } from "react"
import axios from 'axios'
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'

import { Link } from "react-router-dom";


const GuionesNotas=()=>{
    const [Datos, SetDatos] = useState([]);
    const [iD_Nota, setID_Nota] = useState('');
    const [titulo, setTitulo] = useState('');
    const [id_Categoria, setId_Categoria] = useState('');
    const [id_Formato, setId_Formato] = useState('');
    const [id_Usuario, setId_Usuario] = useState('');
    const [fecha, setFecha] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');
    useEffect(()=>{
        GetDatos();
    },[]);
  
    const GetDatos = async ()=>{
        const respuesta = await axios.get('https://localhost:7201/Nota/Get');
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
    }
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
                            
                            <button  data-bs-toggle='modal' data-bs-target='#modalsearch' type="button" class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
                        </form>
                    </div>
                    <br />

                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Título</th>
                                    <th scope="col">Categoría</th>
                                    <th scope="col">Formato</th>
                                    <th scope="col">Reportero</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {Datos.map((Datos,i) =>(
                                    <tr key={Datos.iD_Nota}>
                                    <td>{(i+1)}</td>
                                    <td>{Datos.titulo}</td>
                                    <td>{Datos.categoria.nomCategoria}</td>
                                    <td>{Datos.formato.nomFormato}</td>
                                    <td>{Datos.usuario.nombre}</td>
                                    <td>{Datos.fecha}</td>
                                    <td className="buttons-th"> 
                                        <Link to={'/LeerGuion/'+ Datos.iD_Nota}>
                                            <button type="button" class='btn btn-success'>  <FaEye size={20} color="white"/> Ver </button>
                                        </Link>

                                        <Link to={'/EditarGuion/' + Datos.iD_Nota}>
                                        <button type="button" class="btn btn-warning"> <FaEdit size={20} color="black" />  Editar</button> 
                                        </Link>
                                        <button type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                                    </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        
                    
                </div>
            </div>
        </form>

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

    </div>

    )
}

export default GuionesNotas