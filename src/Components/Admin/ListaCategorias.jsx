import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import whitReactContent from 'sweetalert2-react-content'
import { show_alerta } from "../../Funciones"
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const ListaCategorias=()=>{
    const [Datos, SetDatos] = useState([]);
    const [pkCategoria, setPkCategoria] = useState('');
    const [nombre_Categoria, setNombre_Categoria] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');
    const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

  
    useEffect(()=>{
        GetDatos();
    },[]);
  
    const GetDatos = async ()=>{
      try {
        const respuesta = await axios.get('https://localhost:7201/Categoria/Get');
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) {
        
      }
     
    }
  
    const OpenModal = (op,pkCategoria,nombre_Categoria) =>{
      setPkCategoria('');
      setNombre_Categoria('');
      setOperation(op);
      if(op === 1){
        setTitle('Registrar Categoria')
      }
      else if(op === 2){
        setTitle('Actualizar Categoria')
        setPkCategoria(pkCategoria);
        setNombre_Categoria(nombre_Categoria);
      }
      window.setTimeout(function(){
        document.getElementById('nombre').focus();
      },500);
    }
    const Validar = () =>{
      var parametros;
      var id;
      setBotonDeshabilitado(true);
      if(nombre_Categoria.trim()===''){
        show_alerta('Escribe el nombre','warning');
      }
      else{
        if(operation === 1){
          parametros = {nombre_Categoria:nombre_Categoria.trim()};
            axios.post('https://localhost:7201/Categoria/Post', parametros).then(function(respuesta){
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
  
        }
        else{
          id = {pkCategoria:pkCategoria}
          parametros = {nombre_Categoria:nombre_Categoria.trim()};
          axios.put('https://localhost:7201/Categoria/Put/' + pkCategoria, parametros).then(function(respuesta){
            document.getElementById('btnCerrar').click();
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
    const deleteDatos = (pkCategoria,nombre_Categoria) =>{
      const MySwal = whitReactContent(Swal);
      MySwal.fire({
        title:'¿Seguro que quieres borrar ' + nombre_Categoria +'?',
        icon: 'question', text:'No se podrá recuperar despues',
        showCancelButton:true,confirmButtonText:"Sí, Eliminar",cancelbuttonText:'Cancelar'
      }).then((result) =>{
        if(result.isConfirmed){
          setPkCategoria(pkCategoria);
          axios.delete('https://localhost:7201/Categoria/Delete/' + pkCategoria).then(function(respuesta){
            if(respuesta.data.mensaje === 'Está relacionado'){
              show_alerta('No se pudo cumplir la solicitud, existen otros registros que contienen este elemento');
            }
            else{
              buscar();
            }
          })
          .catch(function(error){
            show_alerta('error en la solicitud','error');
            console.log(error);
          });
        }
      });
    }



    const buscar = async ()=>{
      try {
        var variable = document.getElementById("Buscador").value
      if (variable == ""){
        GetDatos();
      }else{
        const respuesta = await axios.get('https://localhost:7201/Categoria/Buscar/' + variable)
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      }
    
      } catch (error) {
        console.log(error);
      }
      
    }



    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = Datos.slice(startIndex, endIndex);
    
    const [itemNumber, setItemNumber] = useState(0);
    useEffect(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setItemNumber(startIndex + 1);
    }, [currentPage, itemsPerPage, Datos]);




    return(
        <div className="Auth-form-container">

        <div className="Auth-form-table">
            <div className='Auth-Maintable'>

              <div className="Row">
                <h3>Lista de categorías</h3>
                <div className="Button-form">
                <div className="buscador_admin">
                  <input id="Buscador" type="search" className="inputbus" onChange={()=> buscar()}   placeholder="Buscar..." />
                  <FaSearch size={20} color="gray"/>
                  </div>
                  <button onClick={()=> OpenModal(1)} data-bs-toggle='modal' data-bs-target='#modaldefault'  type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Nueva Categoría</button>
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

                            {currentData.map((Datos, i) =>(
                              <tr key={Datos.pkCategoria}>
                                <td>{(itemNumber + i)}</td>
                                <td>{Datos.nombre_Categoria}</td>
                                <td>
                                  <button onClick={()=> OpenModal(2,Datos.pkCategoria,Datos.nombre_Categoria)} 
                                  className="acciones" data-bs-toggle='modal' data-bs-target='#modaldefault'>
                                  <i className="fa-solid fa-edit"></i></button>

                                  &nbsp;
                                  <button onClick={()=> deleteDatos(Datos.pkCategoria,Datos.nombre_Categoria)} className="acciones">
                                  <FaTrash size={20}/></button> 
                                </td>
                              </tr>
                            ))}
                            </tbody>
                        </table>
                </div>
            </div>



            <div className="pagination-list">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowAltCircleLeft size={20} />
            </button>
            <span>Página {currentPage}</span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= Datos.length}
            >
              <FaArrowAltCircleRight size={20} />
            </button>
          </div> 

        </div>

        <div id='modaldefault' className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className="modal-title">{title}</label>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <h2 className="Text-helper">Ingresa los datos requeridos para registrar una categoría nueva en el sistema</h2>
              <input type='hidden' id='id'></input>
              <label> Nombre </label>
              <div className='input-group mb-3'>
                <span className="input-group-text"><i class="fa-solid fa-caret-right"></i></span>
                <input type='text' id="nombre" className="form-control" placeholder="Nombre de la categoria" value={nombre_Categoria}
                onChange={(e)=> setNombre_Categoria(e.target.value)}></input>
              </div>

            </div>
            <div className="modal-footer">
                <div className="mx-auto">
                        <button onClick={()=> Validar()} className="btn btn-success" disabled={botonDeshabilitado}>
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