import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";


const ListaCategorias=()=>{
    const [Datos, SetDatos] = useState([]);
    const [iD_Categoria, setID_Categoria] = useState('');
    const [nomCategoria, setNomCategoria] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');
  
    useEffect(()=>{
        GetDatos();
    },[]);
  
    const GetDatos = async ()=>{
        const respuesta = await axios.get('https://localhost:7201/Categoria/Get');
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
    }
  
    const OpenModal = (op,iD_Categoria,nomCategoria) =>{
      setID_Categoria('');
      setNomCategoria('');
      setOperation(op);
      if(op === 1){
        setTitle('Registrar Categoria')
      }
      else if(op === 2){
        setTitle('Actualizar Categoria')
        setID_Categoria(iD_Categoria);
        setNomCategoria(nomCategoria);
      }
      window.setTimeout(function(){
        document.getElementById('nombre').focus();
      },500);
    }
    const Validar = () =>{
      var parametros;
      var id;
      if(nomCategoria.trim()===''){
        show_alerta('Escribe el nombre','warning');
      }
      else{
        if(operation === 1){
          parametros = {Categoria:nomCategoria.trim()};
            axios.post('https://localhost:7201/Categoria/Post', parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetDatos();
          })
          .catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log(error);
          });
  
        }
        else{
          id = {idCategoria:iD_Categoria}
          parametros = {Categoria:nomCategoria.trim()};
          axios.put('https://localhost:7201/Categoria/Put/' + iD_Categoria, parametros).then(function(respuesta){
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
    const deleteDatos = (iD_Categoria,nomCategoria) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'¿Seguro que quieres borrar ' + nomCategoria +'?',
        icon: 'question', text:'No se podrá recuperar despues',
        showCancelButton:true,confirmButtonText:"Sí, Eliminar",cancelbuttonText:'Cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          setID_Categoria(iD_Categoria);
          axios.delete('https://localhost:7201/Categoria/Delete/' + iD_Categoria).then(function(respuesta){
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
                    <div>
                        <h3>Lista de categorías</h3>
                    </div>
        
                    <div>
                                <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault'  type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nueva Categoría</button>
                    </div>
                    <br />
        
                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No. Categoría</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody>

                            {Datos.map((Datos,i) =>(
                    <tr key={Datos.iD_Categoria}>
                      <td>{(i+1)}</td>
                      <td>{Datos.nomCategoria}</td>
                      <td>
                        <button onClick={()=> OpenModal(2,Datos.iD_Categoria,Datos.nomCategoria)} 
                        className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modaldefault'>
                        <i className="fa-solid fa-edit"></i> Editar</button>

                        &nbsp;
                        <button onClick={()=> deleteDatos(Datos.iD_Categoria,Datos.nomCategoria)} className="btn btn-danger">
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
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Nombre de la categoria" value={nomCategoria}
                onChange={(e)=> setNomCategoria(e.target.value)}></input>
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


export default ListaCategorias