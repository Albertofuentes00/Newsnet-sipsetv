import { useEffect, useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"
import { Link } from "react-router-dom";
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import SearchMenu from "../SearchMenu"


function Bitacora() {
  const [Datos, SetDatos] = useState([]);
  const [Categorias, SetCategorias] = useState([]);
  const [Formatos, SetFormatos] = useState([]);
  const [Usuarios, SetUsuarios] = useState([]);
  const [pkNota, setPkNota] = useState('');
  const [titulo, setTitulo] = useState('');
  const [fkCategoria, setFkCategoria] = useState('');
  const [fkFormato, setFkFormato] = useState('');
  const [fkUsuario, setFkUsuario] = useState('');
  const [fecha, setFecha] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');

  useEffect(()=>{
      GetDatos();
  },[]);

  const GetDatos = async ()=>{
      const respuesta = await axios.get('https://localhost:7201/Nota/GetHoy');
      const respuesta2 = await axios.get('https://localhost:7201/Categoria/Get');
      const respuesta3 = await axios.get('https://localhost:7201/Formato/Get');
      const respuesta4 = await axios.get('https://localhost:7201/Usuario/Get');
      SetDatos(respuesta.data.result);
      SetCategorias(respuesta2.data.result);
      SetFormatos(respuesta3.data.result);
      SetUsuarios(respuesta4.data.result);
  }
  const OpenModal = (op,pkNota,titulo,fkCategoria,fkFormato,fkUsuario,fecha) =>{
    setPkNota('');
    setTitulo('');
    setFkCategoria('');
    setFkFormato('');
    setFkUsuario('');
    setFecha('');
    setOperation(op);
    if(op === 1){
      setTitle('Crear Nota')
    }
    else if(op === 2){
      setTitle('Actualizar Nota')
      setPkNota(pkNota);
      setTitulo(titulo);
      setFkCategoria(fkCategoria);
      setFkFormato(fkFormato);
      setFkUsuario(fkUsuario);
      setFecha(fecha);
    }
    window.setTimeout(function(){
      document.getElementById('nombre').focus();
    },500);
  }
  const Validar = () =>{
    var parametros;
    if(operation === 1){
      if(titulo.trim()===''){
        show_alerta('Escribe el titulo','warning');
      }
      else if(fkCategoria===''){
        show_alerta('Escoge una categoria','warning');
      }
      else if(fkFormato===''){
        show_alerta('Seleccion un Formato','warning');
      }
      else if(fkUsuario===''){
        show_alerta('Seleccion un reportero','warning');
      }
    }
    else if(operation === 2){
      if(titulo.trim()===''){
        show_alerta('Escribe el titulo','warning');
      }
      else if(fkCategoria===''){
        show_alerta('Escoge una categoria','warning');
      }
      else if(fkFormato===''){
        show_alerta('Seleccion un Formato','warning');
      }
      else if(fkUsuario===''){
        show_alerta('Seleccion un reportero','warning');
      }
      else if(fecha===''){
        show_alerta('Introduce la fecha','warning');
      }
    }
    if(operation === 1){
      parametros = {titulo:titulo.trim(),fkCategoria:fkCategoria.trim(),fkFormato:fkFormato.trim(),fkUsuario:fkUsuario.trim()};
        axios.post('https://localhost:7201/Nota/Post', parametros).then(function(respuesta){
        document.getElementById('btnCerrar').click();
        GetDatos();
      })
      .catch(function(error){
        show_alerta('error en la solicitud','error');
        console.log(error);
      });

    }
    else{
      parametros = {titulo:titulo.trim(),fkCategoria:fkCategoria,idFormato:fkFormato,fkUsuario:fkUsuario,fecha:fecha};
      axios.put('https://localhost:7201/Nota/Put/' + pkNota, parametros).then(function(respuesta){
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
  const deleteDatos = (pkNota) =>{
    const MySwal = whitReactContent(Swal);
    MySwal.fire({
      title:'Seguro que quieres borrar esta nota?',
      icon: 'question', text:'No se podra recuperar despues',
      showCancelButton:true,confirmButtonText:"si, eliminar",cancelbuttonText:'cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        setPkNota(pkNota);
        axios.delete('https://localhost:7201/Nota/Delete/' + pkNota).then(function(respuesta){
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
return (    
  <div className="Auth-form-container">

    {/* <div className="Auth-form-table-search-filther">

    </div> */}

    <div className="Grid">

      <SearchMenu/>
      
    <div className="Auth-form-table">
      <div className='Auth-Maintable'>
        
        <div className="Row">
          <h1>Bitácora de notas</h1>
          <div className="Button-form">
              <Link to='/MainMenu'>
              <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
              </Link>
              <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Nota</button>

            </div>
        </div>
    

        <div className="Auth-form-container-Main">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Título</th>
                <th scope="col">Categoría</th>
                <th scope="col">Formato</th>
                <th scope="col">Reportero</th>
                <th scope="col">Fecha</th>
                <th scope="col">     </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
            {Datos.map((Datos,i) =>(
                <tr key={Datos.pkNota}>
                <td>{(i+1)}</td>
                <td>{Datos.titulo}</td>
                <td>{Datos.categoria.nombre_Categoria}</td>
                <td>{Datos.formato.nombre_Formato}</td>
                <td>{Datos.usuario.nombre}</td>
                <td>{Datos.fecha}</td>
                <td>
                <button onClick={()=> OpenModal(2,Datos.pkNota,Datos.titulo,Datos.fkCategoria,Datos.fkFormato,Datos.fkUsuario,Datos.fecha)} 
                 className="acciones" data-bs-toggle='modal' data-bs-target='#modaleditar'>
                  <i className="fa-solid fa-edit"></i>
                </button>
                &nbsp;
                <button onClick={()=> deleteDatos(Datos.pkNota)}  className="acciones">
                  <i className="fa-solid fa-trash"></i>
                </button>
                </td>
                </tr>
            ))}
            </tbody>
          </table>                          
        </div>
      </div>
    </div>

    </div>




{/* 
    <div className="Auth-form-table">
      <div className='Auth-Maintable'>
        
        <div className="Row">
          <h1>Bitácora de notas</h1>
          <div className="Button-form">
              <Link to='/MainMenu'>
              <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
              </Link>
              <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Nota</button>
              <Link to='/BuscarNota'>
              <button class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
              </Link>
            </div>
        </div>
    

        <div className="Auth-form-container-Main">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Título</th>
                <th scope="col">Categoría</th>
                <th scope="col">Formato</th>
                <th scope="col">Reportero</th>
                <th scope="col">Fecha</th>
                <th scope="col">     </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
            {Datos.map((Datos,i) =>(
                <tr key={Datos.iD_Nota}>
                <td>{(i+1)}</td>
                <td>{Datos.titulo}</td>
                <td>{Datos.categoria.nomCategoria}</td>
                <td>{Datos.formato.nomFormato}</td>
                <td>{Datos.usuario.nombre}</td>
                <td>{Datos.fecha}</td>
                <td>
                <button onClick={()=> OpenModal(2,Datos.iD_Nota,Datos.titulo,Datos.id_Categoria,Datos.id_Formato,Datos.id_Usuario,Datos.fecha)} 
                className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modaleditar'>
                  <i className="fa-solid fa-edit"></i>
                </button>
                &nbsp;
                <button onClick={()=> deleteDatos(Datos.iD_Nota)} className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
                </td>
                </tr>
            ))}
            </tbody>
          </table>                          
        </div>
      </div>
    </div> */}

    <div id='modaldefault' className='modal fade' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <label className='h5'>{title}</label>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
            <h4>Ingresa los datos requeridos para crear una nota nueva</h4>
            <label> Titulo </label>
          <div className='modal-body'>
            <input type='hidden' id='id'></input>
            <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
              <textarea type='text' id="nombre" className="form-control" placeholder="Titulo" value={titulo}
              onChange={(e)=> setTitulo(e.target.value)}></textarea>
            </div>

            <div className="Row">
              <label> Categoria </label>
              <div className="Grid">
                <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <select required className="form-select" value={fkCategoria} onChange={(e)=> setFkCategoria(e.target.value)}>
                <option></option>
                {Categorias.map(Categorias =>(
                <option value={Categorias.pkCategoria}>{Categorias.nombre_Categoria}</option>
                ))}
                </select>
              </div>
            </div>

            <div className="Row">
              <label> Formato </label>
              <div className="Grid">
                <div className='input-group mb-3'>
                  <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                  <select required className="form-select" value={fkFormato} onChange={(e)=> setFkFormato(e.target.value)}>
                  <option></option>
                  {Formatos.map(Formatos =>(
                  <option value={Formatos.pkFormato}>{Formatos.nombre_Formato}</option>
                  ))}
                  </select>
                </div>
              </div>

              <label> Categoría </label>
                <div className="Row"> 
                  <div className='input-group mb-3'>
                    <div className="Grid">
                      <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                      <select required className="form-select" value={fkFormato} onChange={(e)=> setFkFormato(e.target.value)}>
                      <option></option>
                      {Formatos.map(Formatos =>(
                      <option value={Formatos.pkFormato}>{Formatos.nombre_Formato}</option>
                      ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>


          </div>

          <div className="Row"></div>

            <label> Formato </label>
            <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
              <select required className="form-select" value={fkFormato} onChange={(e)=> setFkFormato(e.target.value)}>
              <option></option>
              {Formatos.map(Formatos =>(
              <option value={Formatos.pkFormato}>{Formatos.nombre_Formato}</option>
              ))}
              </select>
            </div>
            <label> Usuario </label>
            <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
              <select required className="form-select" value={fkUsuario} onChange={(e)=> setFkUsuario(e.target.value)}>
              <option></option>
              {Usuarios.map(Usuarios =>(
              <option value={Usuarios.pkUsuario}>{Usuarios.nombre}</option>
              ))}
              </select>
            </div>
            <div className="d-grid col-6 mx-auto">

              <div className="Row">
                <button onClick={()=> Validar()} className="btn btn-success">
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
    <div id='modaleditar' className='modal fade' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <label className='h5'>{title}</label>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <h4>Ingresa los nuevos datos que requiere para editar la nota seleccionada</h4>
            <label> Titulo </label>
            <div className='modal-body'>
              <input type='hidden' id='id'></input>
              <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Titulo" value={titulo}
                onChange={(e)=> setTitulo(e.target.value)}></input>
              </div>
              <label> fecha </label>
              <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type="date" className="form-control mt-1" value={fecha}
                onChange={(e)=> setFecha(e.target.value)}></input>
              </div>
              <label> Categoria </label>
              <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <select required className="form-select" value={fkCategoria} onChange={(e)=> setFkCategoria(e.target.value)}>
                      <option></option>
                  {Categorias.map(Categorias =>(
                      <option value={Categorias.pkCategoria}>{Categorias.nombre_Categoria}</option>
                  ))}
                </select>
              </div>
              <label> Formato </label>
              <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <select required className="form-select" value={fkFormato} onChange={(e)=> setFkFormato(e.target.value)}>
                      <option></option>
                  {Formatos.map(Formatos =>(
                      <option value={Formatos.pkFormato}>{Formatos.nombre_Formato}</option>
                  ))}
                </select>
              </div>
              <label> Usuario </label>
              <div className='input-group mb-3'>
              <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <select required className="form-select" value={fkUsuario} onChange={(e)=> setFkUsuario(e.target.value)}>
                    <option></option>
                  {Usuarios.map(Usuarios =>(
                      <option value={Usuarios.pkUsuario}>{Usuarios.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="d-grid col-6 mx-auto">
                    <button onClick={()=> Validar()} className="btn btn-success">
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


export default Bitacora

