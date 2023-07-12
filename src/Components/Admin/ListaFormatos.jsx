import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";


const ListaFormatos = () =>{
    const [Datos, SetDatos] = useState([]);
    const [iD_Formato, setiD_Formato] = useState('');
    const [nomFormato, setNomFormato] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    useEffect(()=>{
        GetFormato();
    },[]);

    const GetFormato = async ()=>{
        const respuesta = await axios.get('https://localhost:7201/Formato/Get');
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
    }

    const OpenModal = (op,iD_Formato, nomFormato) =>{
      setiD_Formato('');
      setNomFormato('');
      setOperation(op);
      if(op === 1){
        setTitle('Registrar Formato')
      }
      else if(op === 2){
        setTitle('Actualizar Formato')
        setiD_Formato(iD_Formato);
        setNomFormato(nomFormato);
      }
      window.setTimeout(function(){
        document.getElementById('nombre').focus();
      },500);
    }
    const Validar = () =>{
      var parametros;
      var id;
      if(nomFormato.trim()===''){
        show_alerta('Escribe el nombre','warning');
      }
      else{
        if(operation === 1){
          parametros = {formato:nomFormato.trim()};
          console.log(nomFormato.trim());

            axios.post('https://localhost:7201/Formato/Post', parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetFormato();
          })
          .catch(function(error){
            show_alerta('error en la solicitud','error');
            console.log(error);
          });

        }
        else{
          id = {idFormato:iD_Formato}
          parametros = {formato:nomFormato.trim()};
          axios.put('https://localhost:7201/Formato/Put/' + iD_Formato, parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetFormato();
          })
          .catch(function(error){
            show_alerta('error en la solicitud','error');
            console.log(error);
          });

        }
        console.log("Se termino el consumo de la api");
      }
    }
    const deleteDatos = (iD_Formato,nomFormato) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'Seguro que quieres borrar ' + nomFormato +'?',
        icon: 'question', text:'No se podra recuperar despues',
        showCancelButton:true,confirmButtonText:"si, eliminar",cancelbuttonText:'cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          setiD_Formato(iD_Formato);
          axios.delete('https://localhost:7201/Formato/Delete/' + iD_Formato).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetFormato();
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
                        <h3>Lista de formatos</h3>
                    </div>
        
                    <div>
                                <button onClick={()=> OpenModal(1)}  data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Formato</button>
                    </div>
                    <br />
        
                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No. Formato</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody>
                            {Datos.map((Datos,i) =>(
                            <tr key={Datos.iD_Formato}>
                            <td>{(i+1)}</td>
                            <td>{Datos.nomFormato}</td>
                            <td>
                            <button onClick={()=> deleteDatos(Datos.iD_Formato,Datos.nomFormato)} class="btn btn-danger"> <FaTrash size={20} color='white'/> Eliminar</button> 
                            <button onClick={()=> OpenModal(2,Datos.iD_Formato,Datos.nomFormato)} className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modaldefault'><i className="fa-solid fa-edit"></i> Editar</button>
                            </td>
                      </tr>
                            ))}
                            </tbody>
                        </table>
                        
                    
                </div>
        
        
            </div>
        </div>

        <div id='modaldefault' className="modal fade" aria-hidden='false'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <label className="h5">{title}</label>
                <button type='button' className="btn-close" data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className="modal-body">
              <input type='hidden' id='id'></input>
              <div className="input-group mb-3">
                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Formato" value={nomFormato}
                onChange={(e)=> setNomFormato(e.target.value)}></input>
              </div>
              <div className="d-grid col-6 mx-auto">
                    <button onClick={()=> Validar()} className="btn btn-success">
                      <i className="fa-solid fa-floppy-disk"></i> Guardar
                    </button>
              </div>
            </div>
            <div className="modal-footer">
                    <button type="button" id='btnCerrar' className="btn btn-secondary" data-bs-dismiss='modal'>cerrar</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )

}


export default ListaFormatos