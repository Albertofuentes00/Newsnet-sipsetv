import { useEffect, useState } from "react"
import axios from 'axios'
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";
import {FaAngleLeft} from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'

import { Link } from "react-router-dom";
import SearchMenu from "../SearchMenu";

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
        try {
            const respuesta = await axios.get('https://localhost:7201/Nota/Get');
            console.log(respuesta.data.result);
            SetDatos(respuesta.data.result);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        
        
        <div className="Auth-form-container">

        <div className="Grid">

            <SearchMenu />

            <form className="Auth-form-table">
            <div className='Auth-Maintable'>

                <div className="Row">
                    <h1>Bitácora de notas</h1>
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
                                    <td>{Datos.categoria.nombre_Categoria}</td>
                                    <td>{Datos.formato.nombre_Formato}</td>
                                    <td>{Datos.usuario.nombre}</td>
                                    <td>{Datos.fecha}</td>
                                    <td className="buttons-th"> 
                                        <Link to={'/LeerGuion/'+ Datos.iD_Nota}>
                                            <button type="button" className="acciones">  <FaEye size={20}/></button>
                                        </Link>

                                        <Link to={'/EditarGuion/' + Datos.iD_Nota}>
                                        <button type="button" className="acciones"> <FaEdit size={20}/></button> 
                                        </Link>
                                        <button type="button" className="acciones"> <FaTrash size={20} /></button> 
                                    </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        
                    
                </div>
            </div>
        </form>
        
        </div>

    </div>

    )
}

export default GuionesNotas