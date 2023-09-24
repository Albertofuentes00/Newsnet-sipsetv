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
import SearchEscaleta from "../SearchEscaletas";
import Cookies from 'js-cookie';

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
    try {
      const respuesta = await axios.get('https://localhost:7201/Escaleta/GetPrograma/'+id);
      const respuesta2 = await axios.get('https://localhost:7201/Usuario/Get');
      console.log(respuesta.data.result)
      SetDatos(respuesta.data.result);
      SetUsuarios(respuesta2.data.result);
    } catch (error) {
      console.log(error)
    }
   
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
      if(operation === 1){
        if(horaInicio.trim()===''){
          show_alerta('Escribe la hora de inicio de la escaleta','warning');
        }
      }
      else{
        if(horaInicio.trim()===''){
          show_alerta('Escribe la hora de inicio','warning');
        }
        else if(fecha.trim()===''){
          show_alerta('Escribe la fecha de creacion','warning');
        }
        else{
          
        }
      }
      if(operation === 1){

        try {
          const fechaActual = new Date();
          const año = fechaActual.getFullYear();
          const mes = fechaActual.getMonth() + 1;
          const dia = fechaActual.getDate();
          const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;




          const cadena = Cookies.get('Usuario');
          const partes = cadena.split('/');
          const user = partes[0];
          parametros = {fecha:fechaFormateada,hora_Inicio:horaInicio.trim(),fkPrograma:id,fkUsuario:user};
          axios.post('https://localhost:7201/Escaleta/Post', parametros).then(function(respuesta){
          console.log(respuesta.data.result);
          document.getElementById('btnCerrar').click();
          GetDatos();
        })
        .catch(function(error){
          show_alerta('Error en la solicitud','error');
          console.log(error);
        });
        } catch (error) {
          console.log(error);
        }
      }
      else{
        parametros = {fecha:fecha.trim(),horaInicio:horaInicio.trim(),idPrograma:id,idUsuario:id_Usuario};
        axios.put('https://localhost:7201/Escaleta/Put/' + iD_Escaleta, parametros).then(function(respuesta){
          document.getElementById('btnCerrareditar').click();
          GetDatos();
        })
        .catch(function(error){
          show_alerta('Error en la solicitud','error');
          console.log(error);
        });
  
      }
      console.log("Se termino el consumo de la api");
    }
    const deleteDatos = (PkEscaleta) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'Seguro que quieres borrar esta escaleta?',
        icon: 'question', text:'No se podra recuperar despues',
        showCancelButton:true,confirmButtonText:"si, eliminar",cancelbuttonText:'cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          setID_Escaleta(PkEscaleta);
          axios.delete('https://localhost:7201/Escaleta/Delete/' + PkEscaleta).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetDatos();
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

        <div className="Grid">

          <SearchEscaleta/>

          <div className="Auth-form-table">
            <div className='Auth-Maintable'>
              <div className="Row">
                <h1>Escaletas</h1>
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
                            <th scope="col">Hora de inicio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {Datos.map((Datos,i) =>(
                            <tr>
                                <td>{(i+1)}</td>
                                <td>{Datos.fecha}</td>
                                <td>{Datos.hora_Inicio}</td>
                                <td className="buttons-th"> 
                                  <Link to={'/ArmadoEscaleta/'+ Datos.pkEscaleta} className="acciones" > <FaEye size={20} className="acciones"/></Link>
                                  <button onClick={()=> OpenModal(2,Datos.pkEscaleta,Datos.horaInicio,Datos.fecha,Datos.fkPrograma,Datos.id_Usuario)} data-bs-toggle='modal' data-bs-target='#modaleditar' type="button" className="acciones"> <FaEdit size={20}/></button> 
                                  <button onClick={()=> deleteDatos(Datos.pkEscaleta)} type="button" className="acciones"> <FaTrash size={20}/></button> 
                                </td>
                            </tr>
                    ))}
                </tbody>
                </table> 
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
            <label>Hora de inicio</label>
            <div className='modal-body'>
              <input type='hidden' id='id'></input>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Hora de Inicio" value={horaInicio}
                onChange={(e)=> setHoraInicio(e.target.value)}></input>
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
    </div>
    )
}


export default Escaletas
