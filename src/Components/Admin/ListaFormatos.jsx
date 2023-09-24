import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";


const ListaFormatos = () =>{
    const [Datos, SetDatos] = useState([]);
    const [pkFormato, setPkFormato] = useState('');
    const [nombre_Formato, setNombre_Formato] = useState('');
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

    const OpenModal = (op,pkFormato, nombre_Formato) =>{
      setPkFormato('');
      setNombre_Formato('');
      setOperation(op);
      if(op === 1){
        setTitle('Registrar Formato')
      }
      else if(op === 2){
        setTitle('Actualizar Formato')
        setPkFormato(pkFormato);
        setNombre_Formato(nombre_Formato);
      }
      window.setTimeout(function(){
        document.getElementById('nombre').focus();
      },500);
    }
    const Validar = () =>{
      var parametros;
      var id;
      if(nombre_Formato.trim()===''){
        show_alerta('Escribe el nombre','warning');
      }
      else{
        if(operation === 1){
          parametros = {nombre_Formato:nombre_Formato.trim()};
          console.log(nombre_Formato.trim());

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
          id = {pkFormato:pkFormato}
          parametros = {nombre_Formato:nombre_Formato.trim()};
          axios.put('https://localhost:7201/Formato/Put/' + pkFormato, parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetFormato();
          })
          .catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log(error);
          }); 

        }
        console.log("Se termino el consumo de la api");
      }
    }
    const deleteDatos = (pkFormato,nombre_Formato) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'¿Seguro que quieres borrar ' + nombre_Formato +'?',
        icon: 'question', text:'No se podrá recuperar despues',
        showCancelButton:true,confirmButtonText:"Sí, Eliminar",cancelbuttonText:'Cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          setPkFormato(pkFormato);
          axios.delete('https://localhost:7201/Formato/Delete/' + pkFormato).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetFormato();
          })
          .catch(function(error){
            show_alerta('Error en la solicitud','error');
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
                <h3>Lista de formatos</h3>
                <div className="Button-form">
                  <input type="text" className="buscador_admin" placeholder="Buscar..." />
                  <button onClick={()=> OpenModal(1)}  data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Formato</button>
                </div>                
              </div>
        
                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No. Formato</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {Datos.map((Datos,i) =>(
                            <tr key={Datos.pkFormato}>
                            <td>{(i+1)}</td>
                            <td>{Datos.nombre_Formato}</td>
                            <td>
                            
                            <button onClick={()=> OpenModal(2,Datos.pkFormato,Datos.nombre_Formato)} className="acciones" data-bs-toggle='modal' data-bs-target='#modaldefault'><i className="fa-solid fa-edit"></i></button>
                            <button onClick={()=> deleteDatos(Datos.pkFormato,Datos.nombre_Formato)} className="acciones"> <FaTrash size={20}/></button> 
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
              <h2 className="Text-helper">Ingresa los datos requeridos para registrar un formato nuevo en el sistema</h2>
              <input type='hidden' id='id'></input>
              <label> Nombre </label>
              <div className="input-group mb-3">
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Formato" value={nombre_Formato}
                onChange={(e)=> setNombre_Formato(e.target.value)}></input>
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


export default ListaFormatos