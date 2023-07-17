import { useEffect, useState } from "react"
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from 'react-icons/fa';
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'
import { show_alerta } from "../../Funciones"
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'

const Escaletas=()=>{
    const [Datos, SetDatos] = useState([]);
    const [Usuarios, SetUsuarios] = useState([]);
    const {id} = useParams()
    const [iD_Escaleta,setID_Escaleta] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [fecha, setFecha] = useState('');
    const [id_Programa, setId_Programa] = useState('');
    const [id_Usuario, setId_Usuario] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');
    useEffect(()=>{
      GetDatos();
  },[]);
  
  const GetDatos = async()=>{
      const respuesta = await axios.get('https://localhost:7201/Escaleta/GetPrograma/'+id);
      const respuesta2 = await axios.get('https://localhost:7201/Usuario/Get');
      SetDatos(respuesta.data.result);
      SetUsuarios(respuesta2.data.result);
  }
  const OpenModal = (op,iD_Escaleta,horaInicio,fecha,id_Programa,id_Usuario,id) =>{
      setID_Escaleta('');
      setHoraInicio('');
      setFecha('');
      setId_Programa(id);
      setId_Usuario('');
      setOperation(op);
      if(op === 1){
        setTitle('Crear Escaleta')
      }
      else if(op === 2){
        setTitle('Actualizar Datos de la Escaleta')
        setID_Escaleta(iD_Escaleta);
        setHoraInicio(horaInicio);
        setFecha(fecha);
        setId_Programa(id);
        setId_Usuario(id_Usuario);
      }
      window.setTimeout(function(){
        document.getElementById('nombre').focus();
      },500);
    }
    const Validar = () =>{
      var parametros;
      if(operation===1){
        if(horaInicio.trim()===''){
          show_alerta('Escribe la hora de incio de la escaleta','warning');
        }
        else if(id_Usuario===''){
          show_alerta('Seleccion el usuario','warning');
        }
      }
      else{
        if(horaInicio.trim()===''){
          show_alerta('Escribe la hora de inicio','warning');
        }
        else if(fecha.trim()===''){
          show_alerta('Escribe la fecha de creacion','warning');
        }
        else if(id_Usuario===''){
          show_alerta('Selecciona el usuario','warning');
        }
      }
      if(operation === 1){
        parametros = {horaInicio:horaInicio.trim(),idPrograma:id,idUsuario:id_Usuario.trim()};
          axios.post('https://localhost:7201/Escaleta/Post', parametros).then(function(respuesta){
          console.log(respuesta.data.result);
          document.getElementById('btnCerrar').click();
          GetDatos();
        })
        .catch(function(error){
          show_alerta('error en la solicitud','error');
          console.log(error);
        });
  
      }
      else{
        parametros = {fecha:fecha.trim(),horaInicio:horaInicio.trim(),idPrograma:id,idUsuario:id_Usuario};
        axios.put('https://localhost:7201/Escaleta/Put/' + iD_Escaleta, parametros).then(function(respuesta){
          document.getElementById('btnCerrareditar').click();
          GetDatos();
        })
        .catch(function(error){
          show_alerta('error en la solicitud','error');
          console.log(error);
        });
  
      }
      console.log("Se termino el consumo de la api");
    }
    const deleteDatos = (iD_Escaleta) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'Seguro que quieres borrar esta escaleta?',
        icon: 'question', text:'No se podra recuperar despues',
        showCancelButton:true,confirmButtonText:"si, eliminar",cancelbuttonText:'cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          setID_Escaleta(iD_Escaleta);
          axios.delete('https://localhost:7201/Escaleta/Delete/' + iD_Escaleta).then(function(respuesta){
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
                        <h1>Escaletas</h1>
                    </div>

                    <div>
                        <div className="Button-form">
                            <Link to='/EscaletaPrograma'>
                                <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>

                            <button data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Escaleta</button>

                            <Link >
                                <button  data-bs-toggle='modal' data-bs-target='#modalsearch' type="button" class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
                            </Link>
                        </div>
                    </div>
                    <br />

                <div className="Auth-form-container-Main">
                    
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {Datos.map((Datos,i) =>(
                            <tr>
                                <td>{(i+1)}</td>
                                <td>{Datos.fecha}</td>
                                <td className="buttons-th"> 
                                  <Link to={'/ArmadoEscaleta/'+ Datos.iD_Escaleta} class="btn btn-success"> <FaEye size={20} color="white"/> Ver </Link>
                                  <button onClick={()=> OpenModal(2,Datos.iD_Escaleta,Datos.horaInicio,Datos.fecha,Datos.id_Programa,Datos.id_Usuario)} data-bs-toggle='modal' data-bs-target='#modaleditar' type="button" class="btn btn-warning"> <FaEdit size={20} color="black" />  Editar</button> 
                                  <button onClick={()=> deleteDatos(Datos.iD_Escaleta)} type="button" class="btn btn-danger"> <FaTrash size={20} color='white' /> Eliminar</button> 
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
            <label>Hora de inicio</label>
            <div className='modal-body'>
              <input type='hidden' id='id'></input>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Hora de Inicio" value={horaInicio}
                onChange={(e)=> setHoraInicio(e.target.value)}></input>
              </div>
              <label>Usuario</label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                <select required className="form-select" value={id_Usuario} onChange={(e)=> setId_Usuario(e.target.value)}>
                      <option></option>
                  {Usuarios.map(Usuarios =>(
                      <option value={Usuarios.iD_Usuario}>{Usuarios.nombre}</option>
                  ))}
                </select>
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
      <div id='modaleditar' className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className='h5'>{title}</label>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <label>Hora de inicio</label>
            <div className='modal-body'>
              <input type='hidden' id='id'></input>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="HoraInicio" value={horaInicio}
                onChange={(e)=> setHoraInicio(e.target.value)}></input>
              </div>
              <label>Fecha</label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Fecha" value={fecha}
                onChange={(e)=> setFecha(e.target.value)}></input>
              </div>
              <label>Usuario</label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                <select required className="form-select" value={id_Usuario} onChange={(e)=> setId_Usuario(e.target.value)}>
                      <option></option>
                  {Usuarios.map(Usuarios =>(
                      <option value={Usuarios.iD_Usuario}>{Usuarios.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="d-grid col-6 mx-auto">
                    <button onClick={()=> Validar()} className="btn btn-success">
                      <i className="fa-solid fa-floppy-disk"></i> Guardar
                    </button>
              </div>
            </div>
            <div className="modal-footer">
                    <button type="button" id='btnCerrareditar' className="btn btn-secondary" data-bs-dismiss='modal'>cerrar</button>
            </div>
          </div>
        </div>
      </div>

        <div id='modalsearch' className='modal fade' aria-hidden='true'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h3 className="Auth-form-title">Buscar escaleta</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='modal-body'>
                            <h3 className="Text-helper">Ingresa los datos requeridos para buscar una escaleta existente</h3>
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


export default Escaletas
