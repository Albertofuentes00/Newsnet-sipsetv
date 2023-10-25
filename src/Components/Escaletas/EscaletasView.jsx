import { useEffect, useState } from "react"
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from 'react-icons/fa';
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';
import { show_alerta } from "../../Funciones"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { FaUser } from "react-icons/fa";
import whitReactContent from 'sweetalert2-react-content'
import { BiCameraMovie } from "react-icons/bi";
import Cookies from 'js-cookie';
import { FaSearch } from 'react-icons/fa';

const Escaletas=()=>{
  const [fechaFI, setFechaFI] = useState(getFechaActualFI);
  const [fechaFF, setFechaFF] = useState(getFechaActualFF);

  function getFechaActualFI() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  function getFechaActualFF() {
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 1); // Suma 1 día para obtener la fecha de mañana

    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const [Datos, SetDatos] = useState([]);
  const [Usuarios, SetUsuarios] = useState([]);
  const [Programas, SetPrograma] = useState([]);
  const [pkEscaleta,setPkEscaleta] = useState('');
  const [hora_Inicio, setHora_Inicio] = useState('');
  const [fecha, setFecha] = useState('');
  const [fkPrograma, setFkPrograma] = useState('');
  const [fkUsuario, setFkUsuario] = useState('');
  const [operation, setOperation] = useState(1);
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);
  const [title, setTitle] = useState('');
  useEffect(()=>{
    GetDatos();
  },[]);
  
  const GetDatos = async()=>{
    try {
      const respuesta = await axios.get('https://localhost:7201/Escaleta/GetHoy');
      const respuesta2 = await axios.get('https://localhost:7201/Usuario/Get');
      const respuesta3 = await axios.get('https://localhost:7201/Programa/Get');
      console.log(respuesta.data.result)
      SetDatos(respuesta.data.result);
      SetUsuarios(respuesta2.data.result);
      SetPrograma(respuesta3.data.result);
    } catch (error) {
      console.log(error)
    }
   
  }

  const OpenModal = (op,pkEscaleta,hora_Inicio,fecha,fkPrograma,fkUsuario) =>{
    setPkEscaleta('');
      setHora_Inicio('');
      setFecha('');
      setFkPrograma('');
      setFkUsuario('');
      setOperation(op);
      if(op === 1){
        setTitle('Crear Escaleta')
      }
      else if(op === 2){
        setTitle('Actualizar Datos de la Escaleta')
        setPkEscaleta(pkEscaleta);
        setHora_Inicio(hora_Inicio);
        const fechaObjeto = new Date(fecha);

         const dia = fechaObjeto.getDate();
         const mes = fechaObjeto.getMonth() + 1;
         const año = fechaObjeto.getFullYear();
         const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
        setFecha(fechaFormateada);
        setFkPrograma(fkPrograma);
        setFkUsuario(fkUsuario);
      }
      window.setTimeout(function(){
        document.getElementById('nombre').focus();
      },500);
  }

  const Validar = () =>{
    var parametros;
    setBotonDeshabilitado(true);
    console.log("boton deshabilitado");
    if(operation === 1){
      if(fkPrograma===''){
        show_alerta('Inserte un programa','warning');
      }
      else{
        try {
          const fechaActual = new Date();
          const año = fechaActual.getFullYear();
          const mes = fechaActual.getMonth() + 1;
          const dia = fechaActual.getDate();
          const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
          const cadena = Cookies.get('Usuario');
          const partes = cadena.split('/');
          const user = partes[0];
          var tabla = '';
          parametros = {fecha:fechaFormateada,hora_Inicio:hora_Inicio.trim(),tabla:tabla,fkPrograma:fkPrograma.trim(),fkUsuario:user};
          axios.post('https://localhost:7201/Escaleta/Post', parametros).then(function(respuesta){
          console.log(respuesta.data.result);
          document.getElementById('btnCerrar').click();
          buscar();
          setTimeout(() => {
            setBotonDeshabilitado(false);
          }, 2000);

        })
        .catch(function(error){
          show_alerta('Error en la solicitud','error');
          console.log(error);
          setBotonDeshabilitado(false);
        });
        } catch (error) {
          console.log(error);
          setBotonDeshabilitado(false);
        }
      }
    }
    else if(operation === 2){
      if(hora_Inicio.trim()===''){
        show_alerta('Escribe la hora de inicio','warning');
        setBotonDeshabilitado(false);
      }
      else if(fecha.trim()===''){
        show_alerta('Escribe la fecha de creacion','warning');
        setBotonDeshabilitado(false);
      }
      else if(fkUsuario===''){
        show_alerta('Selecciona un usuario','warning');
        setBotonDeshabilitado(false);
      }
      else if(fkPrograma===''){
        show_alerta('Inserta un programa','warning');
        setBotonDeshabilitado(false);
      }
      else{
        var tabla = '';
        parametros = {fecha:fecha.trim(),hora_Inicio:hora_Inicio.trim(),tabla:tabla,fkPrograma:fkPrograma,fkUsuario:fkUsuario};
        axios.put('https://localhost:7201/Escaleta/Put/' + pkEscaleta, parametros).then(function(respuesta){
          document.getElementById('btnCerrareditar').click();
          buscar();
          setBotonDeshabilitado(false);
        })
        .catch(function(error){
          show_alerta('Error en la solicitud','error');
          console.log(error);
          setBotonDeshabilitado(false);
        });
  
      }
      console.log("Se termino el consumo de la api");
    }
  }
    
    

  const deleteDatos = (PkEscaleta) =>{
    const MySwal = whitReactContent(Swal);
    MySwal.fire({
      title:'Seguro que quieres borrar esta escaleta?',
      icon: 'question', text:'No se podra recuperar despues',
      showCancelButton:true,confirmButtonText:"si, eliminar",cancelbuttonText:'cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
          setPkEscaleta(PkEscaleta);
        axios.delete('https://localhost:7201/Escaleta/Delete/' + PkEscaleta).then(function(respuesta){
          document.getElementById('btnCerrar').click();
          buscar();
        })
        .catch(function(error){
          show_alerta('Error en la solicitud','error');
          console.log(error);
        });
      }
    });
  }

  const buscar = async ()=>{
    try {
      var variable = document.getElementById("Buscador").value;
      var fechaFI = document.getElementById("FI").value;
      var fechaFF = document.getElementById("FF").value;
      console.log('https://localhost:7201/Escaleta/Buscar/' + variable+"/"+fechaFI+"/"+fechaFF);
    if (variable === ""){
      try {
        const respuesta = await axios.get('https://localhost:7201/Escaleta/BuscarDefault/' + fechaFI+"/"+fechaFF)

        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) {
        
      }
      
    }else{
      try {
        const respuesta = await axios.get('https://localhost:7201/Escaleta/Buscar/' + variable+"/"+fechaFI+"/"+fechaFF)

        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) {
        
      }

    }} catch (error) {
      console.log(error);
    }
  }
  return(

      <div className="Auth-form-container">

      <div className="Grid">

        




      <div className="Auth-form-searchbar">
        <div className="Row-searchbar">
          <div className="Row">
            <div className='buscador_admin'>
            <input id="Buscador" type="search" className="inputbus" placeholder="Buscar..." onKeyDown={(e) => {if (e.key === "Enter") {buscar(); }}}/>
            </div>
          </div>
        <div className="Row">
          <div className="Grid">
            <label> Fecha Inicial</label>
            <input
            id="FI"
            type="date"
            className="input-search"
            value={fechaFI}
            onChange={(e) => setFechaFI(e.target.value)}
          />
          <div className="Grid">
            <label> Fecha Final</label>
            <input id="FF" type="date" className="input-search" value={fechaFF}
            onChange={(e) => setFechaFF(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className="Row">
        <div className="Grid"></div>
        <button className="btn btn-primary" onClick={()=> buscar()}>
          <FaSearch size={20} color="white" /> Buscar
        </button>
      </div>
    </div>
  </div>









        <div className="Auth-form-table">
          <div className='Auth-Maintable'>
            <div className="Row">
              <h3>Escaletas</h3>
                <div>
                  <Link to='/MainMenu'>
                      <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                  </Link>
                      <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Escaleta</button>
                </div>
            </div>                    
              <div className="Auth-form-container-Main">
                  
              <table class="table">
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Programa</th>
                          <th scope="col">Fecha Mes/Dia/Año</th>
                          <th scope="col">Hora de inicio</th>
                          <th scope="col">Acciones</th>
                      </tr>
                  </thead>
                  <tbody className="table-group-divider">
                  {Datos.map((Datos,i) =>(
                          <tr>
                              <td>{(i+1)}</td>
                              <td>{Datos.nombre_Programa}</td>
                              <td>{Datos.fecha.split(' ')[0]}</td>
                              <td>{Datos.hora_Inicio}</td>
                              <td className="buttons-th"> 
                                <Link to={'/Escaleta/'+ Datos.pkEscaleta} className="acciones" > <FaEye size={20} className="acciones"/></Link>
                                <button onClick={()=> OpenModal(2,Datos.pkEscaleta,Datos.hora_Inicio,Datos.fecha,Datos.fkPrograma,Datos.fkUsuario)} data-bs-toggle='modal' data-bs-target='#modaleditar' type="button" className="acciones"> <FaEdit size={20}/></button> 
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
            <label className="modal-title">Crear Escaleta</label>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <br />
          <h6>Ingresa los datos requeridos para crear una nueva escaleta</h6>
          <div className='modal-body'>

            <div className="Row">
              <div class="col">
              <label> Programa </label>
                <div className='input-group mb-3'>
                  <span className="input-group-text"><i> <BiCameraMovie size={20} color="black" /> </i></span>
                  <select required className="form-select" value={fkPrograma} onChange={(e)=> setFkPrograma(e.target.value)}>
                      <option></option>
                      {Programas.map(Programas =>(
                      <option value={Programas.pkPrograma}>{Programas.nombre_Programa}</option>
                      ))}
                  </select>
                </div>
              </div>

              <div class='col'>
                <label>Hora de inicio</label>
                <input type='hidden' id='id'></input>
                <div className='input-group mb-3'>
                <span className="input-group-text"><i className="fa-solid fa-caret-right"></i></span>
                <input type='time' id="nombre" className="form-control" placeholder="Hora de Inicio" value={hora_Inicio}
                onChange={(e)=> setHora_Inicio(e.target.value)}></input>
                </div>
              </div>
            </div>

          </div>
          
            <div className="Button-form">
              <div className='Row'>
                  <button onClick={()=> Validar()} className="btn btn-success">
                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                  </button>
                  <button type="button" id='btnCerrar' className="btn btn-danger" data-bs-dismiss='modal'>
                    <i className="fa-solid fa-circle-xmark"/>Cancelar
                  </button>
              </div>
            </div>
          

        </div>
      </div>
    </div>
    <div id='modaleditar' className='modal fade' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content-edit'>
          <div className='modal-header'>
            <label className="modal-title">Editar Escaleta</label>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <br />
          <h6>Escribe los nuevos datos para sobreescribir en la escaleta seleccionada</h6>
          <div className='modal-body'>

            <div className="Row">
              <div class='col'>
                <label>Hora de inicio</label>
                <input type='hidden' id='id'></input>
                <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-clock"></i></span>
                <input type='time' id="nombre" className="form-control" placeholder="HoraInicio" value={hora_Inicio}
                onChange={(e)=> setHora_Inicio(e.target.value)}></input>
                </div>
              </div>

              <div class='col'>
                <label>Fecha</label>
                <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-calendar-days"></i></span>
                <input
                  className="form-control"
                  placeholder="Fecha"
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={fecha}
                  onChange={(e)=> setFecha(e.target.value)}
                />
                </div>
              </div>
            </div>

            
            <div className="Row">
              <div class='col'>
                <label>Usuario</label>
                <div className='input-group mb-3'>
                <span className="input-group-text"><i> <FaUser size={20} color="black" /></i></span>
                <select required className="form-select" value={fkUsuario} onChange={(e)=> setFkUsuario(e.target.value)}>
                  <option></option>
                {Usuarios.map(Usuarios =>(
                  <option value={Usuarios.pkUsuario}>{Usuarios.nombre}</option>
                ))}
                </select>
                </div>
              </div>

              <div class='col'>
                <label>Programa</label>
                <div className='input-group mb-3'>
                  <span className="input-group-text"><i> <BiCameraMovie size={20} color="black" /></i></span>
                    <select required className="form-select" value={fkPrograma} onChange={(e)=> setFkPrograma(e.target.value)}>
                        <option></option>
                        {Programas.map(Programas =>(
                        <option value={Programas.pkPrograma}>{Programas.nombre_Programa}</option>
                      ))}
                    </select>
                  </div>
              </div>
            </div>
              
            <div>
                  <button onClick={()=> Validar()} className="btn btn-success" disabled={botonDeshabilitado}>
                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                  </button>
                  <button type="button" id='btnCerrareditar' className="btn btn-danger" data-bs-dismiss='modal'>
                    <i className="fa-solid fa-circle-xmark"/> Cancelar
                  </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Escaletas
