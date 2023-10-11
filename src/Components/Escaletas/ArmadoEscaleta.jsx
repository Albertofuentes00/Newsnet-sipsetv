import React, { useState, useEffect , useRef} from 'react';
import axios from 'axios';
import { FaAngleLeft } from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import {FaFilePdf} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa';
import {BsFillSignpostFill} from 'react-icons/bs';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { show_alerta } from "../../Funciones"


function Table() {
  const [DatosEscaleta, SetDatosEscaleta] = useState([]);
  const [filasSeleccionadas, setFilasSeleccionadas] = useState([]);
  const {id} = useParams()
  const tablaRef = useRef(null);
  const [cargado, Setcargado] = useState(0);
  useEffect(()=>{
    GetDatosEscaleta();
    
},[]);

const GetDatosEscaleta = async()=>{
  try {
      const respuesta = await axios.get('https://localhost:7201/Escaleta/GetByID/'+id);
      console.log(respuesta.data.result);
      SetDatosEscaleta(respuesta.data.result);
      Setcargado(1);
  } catch (error) {
      
  }
}
  const Save = () => {
    setRows.Save()
  }

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

  const tabla = document.getElementById('table');

  
  const [dragItem, setDragItem] = useState();
  const [Datos, SetDatos] = useState([]);
  // const [cargado, Setcargado] = useState(0);


  const [rows, setRows] = useState([
  
    { id: '1', order: '-', content: '-', title: 'Bienvenida', reportero: '-', format: '-' ,rowClass: 'indicacion' },
    { id: '2', order: '-', content: '-', title: 'Corte comercial', reportero: '-', format: '-',rowClass: 'indicacion' },
    { id: '3', order: '-',content: '-', title: 'Salida', reportero: '-', format: '-' ,rowClass: 'indicacion' },
  ]);
  
  const handleAddRow = () => {
    const newRow = {
        id: rows.length + 1,order: '-', content: '-', title: 'INDICACION', reportero: '-', format: '-' 
    };
    newRow.rowClass = 'indicacion';
    setRows([...rows, newRow]);
  };
  

  const handleDragEnd = (result) => {
    if (!result.destination) return;
  
    const newRows = [...rows];
    const [removed] = newRows.splice(result.source.index, 1);
    newRows.splice(result.destination.index, 0, removed);
  
    setRows(newRows);
  };
  

  const handleDragStart = (index) => {
    setDragItem(index);
  };
  
  const handleDragEnter = (e, index) => {
    const newRows = [...rows];
    const item = newRows[dragItem];
    newRows.splice(dragItem, 1);
    newRows.splice(index, 0, item);
    setDragItem(index);
    setRows(newRows);
  };
  
  


  useEffect(() => {
    GetDatos();
  }, []); 




  const GetDatos = async()=>{
    try {
      const respuesta = await axios.get('https://localhost:7201/Nota/Get');
      SetDatos(respuesta.data.result);
    } catch (error) {
      console.log(error)
    }
   
  }


  const buscar = async ()=>{
    try {
      var variable = document.getElementById("Buscador").value;
      var fechaFI = document.getElementById("FI").value;
      var fechaFF = document.getElementById("FF").value;
    if (variable == ""){
      try {
        const respuesta = await axios.get('https://localhost:7201/Nota/BuscarDefault/' + fechaFI+"/"+fechaFF)

        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) {
        
      }
     
    }else{
      try {
        const respuesta = await axios.get('https://localhost:7201/Nota/Buscar/' + variable+"/"+fechaFI+"/"+fechaFF)

        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) {
        
      }

    }
  
    } catch (error) {
      console.log(error);
    }
    
  }


  const mostrar=()=>{
    if(cargado === 1){
      return(
    
        <div className='Grid'>
        <div className='Row'>
          <h6><b>Programa:</b> {DatosEscaleta.programa.nombre_Programa} </h6>
          <h6><b>Fecha:</b> {DatosEscaleta.fecha.split(' ')[0]}</h6>
        </div>
        <div className='Row'>
          <h6><b>Usuario:</b> {DatosEscaleta.usuario.nombre}</h6>
          <h6><b>Hora de inicio:</b> {DatosEscaleta.hora_Inicio}</h6>
        </div>
      </div>
      );
    }
      }



      const toggleSeleccion = (pkNota) => {
        if (filasSeleccionadas.includes(pkNota)) {
          setFilasSeleccionadas(filasSeleccionadas.filter((id) => id !== pkNota));
        } else {
          setFilasSeleccionadas([...filasSeleccionadas, pkNota]);
        }
      };
    
      const AgregarNota = () => {



        const filasParaGuardar = Datos.filter((fila) =>
          filasSeleccionadas.includes(fila.pkNota)
        );
      
        const nuevasFilas = [];
      var ide = rows.length + 1;
        filasParaGuardar.forEach((fila, index) => {
          const newRow = {
            id: ide,
            order: ' ',
            content: ' ',
            title: fila.titulo,
            reportero: fila.nombre,
            format: fila.nombre_Formato,
          };
          ide = ide + 1;
          
          nuevasFilas.push(newRow);
          const datosEnviar = {
            fkNota: fila.pkNota,
            fkEscaleta: id,
          };
        
          axios
            .post('https://localhost:7201/Nota_Esca/Post', datosEnviar)
            .then(function (respuesta) {
            })
            .catch(function (error) {
              show_alerta('Error en la solicitud', 'error');
              console.log(error);
            });
        });
      
        setRows([...rows, ...nuevasFilas]);

        
        ActualizarTablaEs();
        
      };
      
      
      const ActualizarTablaEs = () => {
        const tablaContenido = tablaRef.current.innerHTML;
      
        // Serializa la información de arrastre (orden) de los elementos
        const ordenSerializado = rows.map((row) => ({
          id: row.id,
          order: row.order,
        }));
      
        // Crea un objeto con ambos datos
        const datosEnviar = {
          vTabla: tablaContenido,
          orden: ordenSerializado,
        };
      
        axios
          .patch('https://localhost:7201/Escaleta/PutTabla/' + id, datosEnviar)
          .then(function (respuesta) {
            show_alerta('Datos guardados correctamente');
          })
          .catch(function (error) {
            show_alerta('Error en la solicitud', 'error');
            console.log(error);
          });
      };





      function validacion() {
        try { 
          if (DatosEscaleta.tabla === "") {
            return (
              <div ref={tablaRef}>
              <DragDropContext onDragEnd={handleDragEnd}>
                 <Droppable droppableId="rows">
                   {(provided) => (
                     <table class="table" >
                         <thead>          
                             <tr >
                                 <th scope="col">#</th>
                                 <th scope='col'>Orden</th>
                                 <th scope="col">Conductor</th>
                                 <th scope="col">Titulo</th>
                                 <th scope="col">Reportero</th>
                                 <th scope="col">Formato</th>
                             </tr>
                         </thead>
                       <tbody
                         
                         >
                         {rows.map((row, index) => (
                           <Draggable key={row.id} draggableId={row.id} index={index}  >
                             {(provided) => (
                               
                               <tr className={row.rowClass}
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}
                                 ref={provided.innerRef}
                                 draggable
                                 key={index}
                                 onDragStart={() => handleDragStart(index)}
                                 onDragEnter={(e) => handleDragEnter(e, index)}
                                 onDragOver={(e) => e.preventDefault()}
     
                                 
                               >
                                 <td> {row.id} </td>
                                 <td> {row.order} </td>
                                 <td>{row.content}</td>
                                 <td> {row.title} </td>
                                 <td> {row.reportero} </td>
                                 <td> {row.format} </td>
     
                                 
                               </tr>
                             )}
                           </Draggable>
                         ))}
                         {provided.placeholder}
                       </tbody>
                     </table>
                   )}
                 </Droppable>
               </DragDropContext>
           </div>
            );
          } 
          else {
            return(
              <div ref={tablaRef}  dangerouslySetInnerHTML={{ __html: DatosEscaleta.tabla}} />
            );
          }
        } catch (error) {
          console.log(error);
        }
         
        }

  return (
          <div className="Auth-form-container">
  <div className="Auth-form-escaleta">
  <div className="Auth-form-content">
    <div className='Row'>
      <h1>Escaleta</h1>
      <div>
        <Link to='/Escaletas'>
          <button type="button" class="btn btn-dark"  > <FaAngleLeft size={20} color="white"/> Regresar</button>
        </Link>
          <button type="button" class="btn btn-success" onClick={()=> ActualizarTablaEs()}> <FaSave size={20} color="white"/> Guardar </button>
          <button type='button' class='btn btn-warning'> <FaEdit size={20} color='black'/> Editar Escaleta</button>
          <button type='button' class='btn btn-danger'> <FaFilePdf size={20} color='white'/> Generar PDF </button>
      </div>
      <br />
    </div>

      <br />

      <div className="Button-form">
              <button type="button" class="btn btn-primary" onClick={handleAddRow} > <BsFillSignpostFill size={20} color='white'/> Agregar Indicación</button>          
              <button type="button" data-bs-toggle='modal' data-bs-target='#modalselect' class="btn btn-success"> <FaPlusSquare size={20} color='white'/> Agregar Nota</button>
      </div>

      {mostrar()}


      {validacion()}
  </div>
      <br />

<div id='modalselect' className='modal fade' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content-notas'>
          <div className='modal-header'>
            <label className='h5'> </label>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          
            <h4> Agregar notas a escaleta </h4>
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
            <div className='modal-body-table'>
		 <div className="Auth-form-container-Main">
                    
     <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th> 
                    <th scope="col">Título</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Formato</th>
                    <th scope="col">Reportero</th>
                    <th scope="col">Fecha Mes/Dia/Año</th>
                    <th scope="col">Seleccionar</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                {Datos.map((Datos,i) =>(
                    <tr key={Datos.pkNota}>
                    <td>{Datos.pkNota}</td>
                    <td>{Datos.titulo}</td>
                    <td>{Datos.nombre_Categoria}</td>
                    <td>{Datos.nombre_Formato}</td>
                    <td>{Datos.nombre}</td>
                    <td>{Datos.fecha.split(' ')[0]}</td>
                    <td>
                    <input type="checkbox" className='check-box-nota' onChange={() => toggleSeleccion(Datos.pkNota)}
                />
                    </td>
                    </tr>
                ))}
                </tbody>
              </table>   
                </div>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button id='AgregarNota' className="btn btn-success" onClick={() => AgregarNota(Datos)}>
              <i className="fa-solid fa-floppy-disk" ></i> Agregar
              </button>
              <br />
            </div>
        </div>
      </div>
    </div>


  
  </div>
</div>
        );
      };



export default Table