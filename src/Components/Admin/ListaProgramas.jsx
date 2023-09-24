import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



const ListaProgramas=()=>{
  const [Datos, SetDatos] = useState([]);
  const [Categorias, SetCategorias] = useState([]);
  const [pkPrograma, setPkPrograma] = useState('');
  const [nombre_Programa, setNombre_Programa] = useState('');
  const [fkCategoria, setFkCategoria] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');
  
    useEffect(()=>{
        GetDatos();
    },[]);
  
    const GetDatos = async ()=>{
      const respuesta = await axios.get('https://localhost:7201/Programa/Get');
      const respuesta2 = await axios.get('https://localhost:7201/Categoria/Get');
      SetDatos(respuesta.data.result);
      SetCategorias(respuesta2.data.result);
  }

  
    const OpenModal = (op,pkPrograma,nombre_Programa,fkCategoria) =>{
      setPkPrograma('');
      setNombre_Programa('');
      setFkCategoria('');
      setOperation(op);
      if(op === 1){
        setTitle('Registrar Programa')
      }
      else if(op === 2){
        setTitle('Actualizar Programa')
        setPkPrograma(fkCategoria);
        setNombre_Programa(nombre_Programa);
        setFkCategoria(fkCategoria);
      }
      window.setTimeout(function(){
        document.getElementById('nombre').focus();
      },500);
    }
    const Validar = () =>{
      var parametros;
      var id;
      if(nombre_Programa.trim()===''){
        show_alerta('Escribe el nombre','warning');
      }
      if(fkCategoria===''){
        show_alerta('Escoge la categoria','warning');
      }
  
      else{
        if(operation === 1){
          parametros = {nombre_Programa:nombre_Programa.trim(),fkCategoria:fkCategoria.trim()};
            axios.post('https://localhost:7201/Programa/Post', parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
            GetDatos();
          })
          .catch(function(error){
            show_alerta('error en la solicitud','error');
            console.log(error);
          });
  
        }
        else{
          id = {pkPrograma:pkPrograma}
          parametros = {nombre_Programa:nombre_Programa.trim(),fkCategoria:fkCategoria};
          axios.put('https://localhost:7201/Programa/Put/' + pkPrograma, parametros).then(function(respuesta){
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
    const deleteDatos = (pkPrograma,nombre_Programa) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'¿Seguro que quieres borrar a ' + nombre_Programa +'?',
        icon: 'question', text:'No se podrá recuperar despues',
        showCancelButton:true,confirmButtonText:"Sí, Eliminar",cancelbuttonText:'Cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          setPkPrograma(pkPrograma);
          axios.delete('https://localhost:7201/Programa/Delete/' + pkPrograma).then(function(respuesta){
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
          <h3>Lista de programas</h3>
          <div className="Button-form">
          <div className="buscador_admin">
                  <input id="Buscador" type="search" className="inputbus"   placeholder="Buscar..." />
                  <FaSearch size={20} color="gray"/>
                  </div>
            <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault' type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nuevo Programa</button>
          </div>
        </div>

        <div className="Auth-form-container-Main">
            
            <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">     </th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {Datos.map((Datos,i) =>(
                    <tr key={Datos.pkPrograma}>
                      <td>{(i+1)}</td>
                      <td>{Datos.nombre_Programa}</td>
                      <td>{Datos.categoria.nomCategoria}</td>
                      <td>
                        <button onClick={()=> OpenModal(2,Datos.pkPrograma,Datos.nombre_Programa,Datos.fkCategoria)} 
                       className="acciones" data-bs-toggle='modal' data-bs-target='#modaldefault'>
                        <i className="fa-solid fa-edit"></i></button>
                        &nbsp;
                        <button onClick={()=> deleteDatos(Datos.pkPrograma,Datos.nombre_Programa)} className="acciones">
                        <FaTrash size={20}/></button> 
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
              <h2 className="Text-helper">Ingresa los datos requeridos para registrar un programa nuevo en el sistema</h2>
              <input type='hidden' id='id'></input>
              <label> Nombre </label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Nombre del programa" value={nombre_Programa}
                onChange={(e)=> setNombre_Programa(e.target.value)}></input>
              </div>
              <label> Categoría </label>
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


export default ListaProgramas