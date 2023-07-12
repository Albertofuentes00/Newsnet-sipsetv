import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import axios from 'axios'
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"


const ListaUsuarios=()=>{
    const [Datos, SetDatos] = useState([]);
    const [iD_Usuario, setID_Usuario] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [id_Rol, setId_Rol] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');
  
    useEffect(()=>{
        GetDatos();
    },[]);
  
    const GetDatos = async ()=>{
        const respuesta = await axios.get('https://localhost:7201/Usuario/Get');
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
    }
  
    const OpenModal = (op,iD_Usuario,nombre,apellidos,nickName,password,id_Rol) =>{
      setID_Usuario('');
      setNombre('');
      setApellidos('');
      setNickName('');
      setPassword('');
      setId_Rol('');
      setOperation(op);
      if(op === 1){
        setTitle('Registrar Usuario')
      }
      else if(op === 2){
        setTitle('Actualizar Usuario')
        setID_Usuario(iD_Usuario);
        setNombre(nombre);
        setApellidos(apellidos);
        setNickName(nickName);
        setPassword(password);
        setId_Rol(id_Rol);
      }
      window.setTimeout(function(){
        document.getElementById('nombre').focus();
      },500);
    }
    const Validar = () =>{
      var parametros;
      var id;
      if(nombre.trim()===''){
        show_alerta('Escribe el nombre','warning');
      }
      else if(apellidos.trim()===''){
        show_alerta('Escribe los apellidos','warning');
      }
      else if(nickName.trim()===''){
        show_alerta('Escribe el nombre de usuario','warning');
      }
      else if(password.trim()===''){
        show_alerta('Escribe la contraseña','warning');
      }
      else if(id_Rol===''){
        show_alerta('Escoge el cargo del usuario','warning');
      }
  
      else{
        if(operation === 1){
          parametros = {nombre:nombre.trim(),apellidos:apellidos.trim(),nickName:nickName.trim(),password:password.trim(),idRol:id_Rol.trim()};
            axios.post('https://localhost:7201/Usuario/Post', parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetDatos();
          })
          .catch(function(error){
            show_alerta('error en la solicitud','error');
            console.log(error);
          });
  
        }
        else{
          id = {idUsuario:iD_Usuario}
          parametros = {nombre:nombre.trim(),apellidos:apellidos.trim(),nickName:nickName.trim(),password:password.trim(),idRol:id_Rol};
          axios.put('https://localhost:7201/Usuario/Put/' + iD_Usuario, parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetDatos();
          })
          .catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log('el id:' + iD_Usuario);
            console.log(error);
          });
  
        }
        console.log("Se termino el consumo de la api");
      }
    }
    const deleteDatos = (iD_Usuario,nombre) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'Seguro que quieres borrar a ' + nombre +'?',
        icon: 'question', text:'No se podra recuperar despues',
        showCancelButton:true,confirmButtonText:"Sí, Eliminar",cancelbuttonText:'Cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          setID_Usuario(iD_Usuario);
          axios.delete('https://localhost:7201/Usuario/Delete/' + iD_Usuario).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetDatos();
          })
          .catch(function(error){
            show_alerta('error en la solicitud','error');
            console.log('el id:' + iD_Usuario);
            console.log(error);
          });
        }
      });
    }
    return(
        <div className="Auth-form-container">

        <div className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h3>Lista de usuarios</h3>
                    </div>
                                                                        {/* data-bs-toggle='modal' data-bs-target='#modaldefault' */}
                    <div>
                        <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success" > <FaPlusSquare size={20} color="white"/> Nuevo Usuario</button>
                    </div>
                    <br />

                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No. Usuario</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Contraseña</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {Datos.map((Datos,i) =>(
                                <tr key={Datos.iD_Usuario}>
                                <td>{(i+1)}</td>
                                <td>{Datos.nombre}</td>
                                <td>{Datos.apellidos}</td>
                                <td>{Datos.nickName}</td>
                                <td>{Datos.password}</td>
                                <td>{Datos.rol.nomRol}</td>
                                <td>
                                    <button onClick={()=> OpenModal(2,Datos.iD_Usuario,Datos.nombre,Datos.apellidos,Datos.nickName,Datos.password,Datos.id_Rol)} 
                                    className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modaldefault'>
                                    <i className="fa-solid fa-edit"></i> Editar</button>
                                    &nbsp;
                                    <button onClick={()=> deleteDatos(Datos.iD_Usuario,Datos.nombre)} className="btn btn-danger">
                                    <FaTrash size={20} color='white'/> Eliminar</button> 
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>             
                </div>
            </div>
        </div>

        <div id='modaldefault' className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className='h5'>{title}</label>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <input type='hidden' id='id'></input>
              <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Nombre" value={nombre}
                onChange={(e)=> setNombre(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="apellidos" className="form-control" placeholder="Apellidos" value={apellidos}
                onChange={(e)=> setApellidos(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nickName" className="form-control" placeholder="Username" value={nickName}
                onChange={(e)=> setNickName(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input id="password" className="form-control" placeholder="Contraseña" value={password}
                onChange={(e)=> setPassword(e.target.value)}></input>
              </div>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <select required className="form-select" value={id_Rol} onChange={(e)=> setId_Rol(e.target.value)}>
                  {Datos.map(Datos =>(
                      <option value={Datos.id_Rol}>{Datos.rol.nomRol}</option>
                  ))}
                  //          valor que escoge       datos que se muestran
                </select>
              </div>
            </div>
            <div className="modal-footer">
                <div className="col-6 mx-auto">
                        <button onClick={()=> Validar()} className="btn btn-success">
                          <i className="fa-solid fa-floppy-disk"></i> Guardar
                        </button>
                        <button type="button" id='btnCerrar' className="btn btn-danger" data-bs-dismiss='modal'>
                          <i class="fa-solid fa-xmark"></i> Cancelar
                        </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

}


export default ListaUsuarios