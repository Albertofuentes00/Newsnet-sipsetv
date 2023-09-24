import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"
import Cookies from 'js-cookie';


const ListaUsuarios=()=>{


  const [Datos, SetDatos] = useState([]);
  const [Roles, SetRoles] = useState([]);
  const [pkUsuario, setPkUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [nickName, setNickName] = useState('');
  const [user_Password, setUser_Password] = useState('');
  const [fkRol, setFkRol] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(()=>{
      GetDatos();
  },[]);

  const GetDatos = async ()=>{
    try{
      const respuesta = await axios.get('https://localhost:7201/Usuario/Get')
      const respuesta2 = await axios.get('https://localhost:7201/Rol/Get')
      console.log(respuesta.data.result);
      SetDatos(respuesta.data.result);
      SetRoles(respuesta2.data.result);
    }catch(e){

    }
      
  }
  
    const OpenModal = (op,pkUsuario,nombre,apellidos,nickName,user_Password,fkRol) =>{
      setPkUsuario('');
      setNombre('');
      setApellidos('');
      setNickName('');
      setUser_Password('');
      setFkRol('');
      setOperation(op);
      if(op === 1){
        setTitle('Registrar Usuario')
      }
      else if(op === 2){
        setTitle('Actualizar Usuario')
        setPkUsuario(pkUsuario);
        setNombre(nombre);
        setApellidos(apellidos);
        setNickName(nickName);
        setUser_Password(user_Password);
        setFkRol(fkRol);
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
      else if(user_Password.trim()===''){
        show_alerta('Escribe la contraseña','warning');
      }
      else if(fkRol===''){
        show_alerta('Escoge el cargo del usuario','warning');
      }
  
      else{
        if(operation === 1){
          console.log("El rol es" + fkRol.trim());
          parametros = {nombre:nombre.trim(),apellidos:apellidos.trim(),nickName:nickName.trim(),user_password:user_Password.trim(),fkRol:fkRol.trim()};
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
          id = {pkUsuario:pkUsuario}
          parametros = {nombre:nombre.trim(),apellidos:apellidos.trim(),nickName:nickName.trim(),user_Password:user_Password.trim(),fkRol:fkRol};
          axios.put('https://localhost:7201/Usuario/Put/' + pkUsuario, parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetDatos();
          })
          .catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log('el id:' + pkUsuario);
            console.log(error);
          });
  
        }
        console.log("Se termino el consumo de la api");
      }
    }



    const deleteDatos = (pkUsuario,nombre) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'Seguro que quieres borrar a ' + nombre +'?',
        icon: 'question', text:'No se podra recuperar despues',
        showCancelButton:true,confirmButtonText:"Sí, Eliminar",cancelbuttonText:'Cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          try {
            const cadena = Cookies.get('Usuario');
            const partes = cadena.split('/');
            const user = partes[1];
            
            if (nombre === user) {
              show_alerta('No puedes eliminarte a ti mismo');
            } else {
              setPkUsuario(pkUsuario);
              axios.delete('https://localhost:7201/Usuario/Delete/' + pkUsuario).then(function(respuesta){
                document.getElementById('btnCerrar').click();
                GetDatos();
              })
              .catch(function(error){
                show_alerta('error en la solicitud','error');
                console.log('el id:' + pkUsuario);
                console.log(error);
              });
              
            }
          } catch (error) {
            console.log(error);
          }
     
        }
      });
    }

    const buscar = async ()=>{
      try {
        var variable = document.getElementById("Buscador").value
      if (variable == ""){
        GetDatos();
      }else{
        const respuesta = await axios.get('https://localhost:7201/Usuario/Buscar/' + variable)
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      }
    
      } catch (error) {
        console.log(error);
      }
      
    }

    useEffect(() => {
      GetDatos();
    }, []);


    const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = Datos.slice(startIndex, endIndex);


    return(
        <div className="Auth-form-container">

        <div className="Auth-form-table">
            <div className='Auth-Maintable'>
              <div className="Row">
                <h3>Lista de usuarios</h3>

                <div className="Button-form">
                <div className="buscador_admin">
                  <input id="Buscador" type="search" className="inputbus" onChange={()=> buscar()}  placeholder="Buscar..." />
                  <FaSearch size={20} color="gray"/>
                  </div>
                  <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success" > <FaPlusSquare size={20} color="white"/> Nuevo Usuario</button>
                </div>
              </div>

                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Contraseña</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {currentData.map((Datos, i) => (
                  <tr key={Datos.pkUsuario}>
                  <td>{(i+1)}</td>
                  <td>{Datos.nombre}</td>
                  <td>{Datos.apellidos}</td>
                  <td>{Datos.nickName}</td>
                  <td>{Datos.user_Password}</td>
                  <td>{Datos.nombre_Rol}</td>
                  <td>                 
                      <button onClick={()=> OpenModal(2,Datos.pkUsuario,Datos.nombre,Datos.apellidos,Datos.nickName,Datos.user_Password,Datos.fkRol)} 
                      className="acciones" data-bs-toggle='modal' data-bs-target='#modaldefault'>
                      <i className="fa-solid fa-edit"></i> </button>
                      &nbsp;
                      <button onClick={()=> deleteDatos(Datos.pkUsuario,Datos.nombre)} className="acciones">
                      <FaTrash size={20} /> </button> 
                  </td>
                  </tr>
              ))}
                              
                           
                            </tbody>
                        </table> 
                        <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span>Página {currentPage}</span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= Datos.length}
            >
              Siguiente
            </button>
          </div>          
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
              <h2 className="Text-helper">Ingresa los datos requeridos para registrar un usuario en el sistema</h2>
              <input type='hidden' id='id'></input>
              <label> Nombre </label>
              <div className='input-group mb-3'>
                <span className="input-group-text"> <i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Nombre" value={nombre}
                onChange={(e)=> setNombre(e.target.value)}></input>
              </div>
              <label> Apellidos </label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="apellidos" className="form-control" placeholder="Apellidos" value={apellidos}
                onChange={(e)=> setApellidos(e.target.value)}></input>
              </div>
              <label> Username</label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nickName" className="form-control" placeholder="Username" value={nickName}
                onChange={(e)=> setNickName(e.target.value)}></input>
              </div>
              <label> Contraseña </label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input id="password" className="form-control" placeholder="Contraseña" value={user_Password}
                onChange={(e)=> setUser_Password(e.target.value)}></input>
              </div>
              <label> Rol </label>
              <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <select required className="form-select"  value={fkRol} onChange={(e)=> setFkRol(e.target.value)}>
                      <option selected></option>
                  {Roles.map(Roles =>(
                      <option value={Roles.pkRol}>{Roles.nombre_Rol}</option>
                  ))}
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