import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
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
          show_alerta('Error en la solicitud','error');
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
      showCancelButton:true,confirmButtonText:"Sí, Eliminar",cancelbuttonText:'Cancelar'
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

        <div className="Auth-form-table">
            <div className='Auth-Maintable'>
              <div className="Row">
                <h3>Lista de Roles</h3>
                <div className="Button-form">
                  <input type="text" className="input-search-admin" placeholder="Buscar..." />
                  <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Rol</button>
                </div>        
        </div>
        
                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {Datos.map((Datos,i) =>(
                                <tr key={Datos.iD_Rol}>
                                <td>{(i+1)}</td>
                                <td>{Datos.nombre_Rol}</td>
                                <td> 
                                    <button onClick={()=> deleteDatos(Datos.iD_Rol,Datos.nombre_Rol)} class="btn btn-danger"> <FaTrash size={20} color='white'/> Eliminar</button> 
                                    <button onClick={()=> OpenModal(2,Datos.iD_Rol,Datos.nombre_Rol)} 
                        className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modaldefault'>
                          <i className="fa-solid fa-edit"></i> Editar</button>
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
              <h2 className="Text-helper">Ingresa los datos requeridos para registrar un rol nuevo en el sistema</h2>
              <input type='hidden' id='id'></input>
              <label> Nombre </label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Nombre del rol" value={nomRol}
                onChange={(e)=> setNomRol(e.target.value)}></input>
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


export default ListaRoles