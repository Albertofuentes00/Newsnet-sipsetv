import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

import axios from 'axios'
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"


const ListaRoles = () => {
    const [Datos, SetDatos] = useState([]);
  const [iD_Rol, setID_Rol] = useState('');
  const [nomRol, setNomRol] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');

  useEffect(()=>{
      GetDatos();
  },[]);

  const GetDatos = async ()=>{
      const respuesta = await axios.get('https://localhost:7201/Rol/Get');
      console.log(respuesta.data.result);
      SetDatos(respuesta.data.result);
  }

  const OpenModal = (op,iD_Rol,nomRol) =>{
    setID_Rol('');
    setNomRol('');
    setOperation(op);
    if(op === 1){
      setTitle('Registrar Rol')
    }
    else if(op === 2){
      setTitle('Actualizar Rol')
      setID_Rol(iD_Rol);
      setNomRol(nomRol);
    }
    window.setTimeout(function(){
      document.getElementById('nombre').focus();
    },500);
  }
  const Validar = () =>{
    var parametros;
    var id;
    if(nomRol.trim()===''){
      show_alerta('Escribe el nombre','warning');
    }
    else{
      if(operation === 1){
        parametros = {rol:nomRol.trim()};
          axios.post('https://localhost:7201/Rol/Post', parametros).then(function(respuesta){
          document.getElementById('btnCerrar').click();
          GetDatos();
        })
        .catch(function(error){
          show_alerta('error en la solicitud','error');
          console.log(error);
        });

      }
      else{
        id = {idRol:iD_Rol}
        parametros = {rol:nomRol.trim()};
        axios.put('https://localhost:7201/Rol/Put/' + iD_Rol, parametros).then(function(respuesta){
          document.getElementById('btnCerrar').click();
          GetDatos();
        })
        .catch(function(error){
          show_alerta('error en la solicitud','error');
          console.log(error);
        });

      }
      console.log("Se termino el consumo de la api");
    }
  }
  const deleteDatos = (iD_Rol,nomRol) =>{
    const MySwal = whitReactContent(Swal);
    MySwal.fire({
      title:'Seguro que quieres borrar ' + nomRol +'?',
      icon: 'question', text:'No se podra recuperar despues',
      showCancelButton:true,confirmButtonText:"si, eliminar",cancelbuttonText:'cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        setID_Rol(iD_Rol);
        axios.delete('https://localhost:7201/Rol/Delete/' + iD_Rol).then(function(respuesta){
          document.getElementById('btnCerrar').click();
          GetDatos();
        })
        .catch(function(error){
          show_alerta('error en la solicitud','error');
          console.log(error);
        });
      }
    });
  }

    return(
        <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h3>Lista de Roles</h3>
                    </div>
        
                    <div>
                        <form className="Button-form">
                            <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Rol</button>
                        </form>
                    </div>
                    <br />
        
                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"># Rol</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody>
                            {Datos.map((Datos,i) =>(
                                <tr key={Datos.iD_Rol}>
                                <td>{(i+1)}</td>
                                <td>{Datos.nomRol}</td>
                                <td className="buttons-th"> 
                                    <button onClick={()=> deleteDatos(Datos.iD_Rol,Datos.nomRol)} class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        
                    
                </div>
        
        
            </div>
        </form>

            <div id='modaldefault' className='modal fade' aria-hidden='true'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                    <h3 className="Auth-form-title">{title}</h3>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='modal-body'>

                            <div className= 'Grid'>
                            <label>Nombre</label>
                            <input
                            type="user"
                            className="form-control mt-1"
                            placeholder="Ingrese el nombre" value={nomRol}
                            onChange={(e)=> setNomRol(e.target.value)}/>
                        </div>

                        <br />


                        <div className="Button-form">
                        <Link to='/MainMenu'>
                        <button onClick={()=> Validar()} class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
                        </Link>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"> <GiCancel size={20} color="white"/> Cancelar </button>
                        </div>
                                    
                            </div>                
                                        
                        </div>
                    </div>
                </div>
        </div>
    )

}


export default ListaRoles