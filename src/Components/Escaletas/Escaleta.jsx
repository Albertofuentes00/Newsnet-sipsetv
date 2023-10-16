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
  const modalRef = useRef();
  const [cargado, Setcargado] = useState(0);
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);
  const [DatosTabla, setDatosTabla] = useState([]);
  const [orden,setOrden]= useState(0);
  useEffect(()=>{
    GetDatosEscaleta();
},[]);

















const GetDatosEscaleta = async()=>{
  try {
      const respuesta = await axios.get('https://localhost:7201/Escaleta/GetByID/'+id);
      console.log(respuesta.data.result);
      SetDatosEscaleta(respuesta.data.result);
      const eliminarFila = (filaId) => {
        // Lógica para eliminar la fila con filaId
        const nuevasFilas = DatosEscaleta.filter((fila) => fila.id !== filaId);
        SetDatosEscaleta(nuevasFilas);
      };
      
      Setcargado(1);
      
  } catch (error) {
      
  }
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



  useEffect(() => {
    GetDatos();
  }, []); 
  const GetDatos = async()=>{
    try {
      const respuesta = await axios.get('https://localhost:7201/Nota/GetRel/' + id);
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
        const respuesta = await axios.get('https://localhost:7201/Nota/BuscarRelaDefault/'+ id +'/' + fechaFI+"/"+fechaFF)
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) {
        
      }
     
      }else{
      try {
        const respuesta = await axios.get('https://localhost:7201/Nota/Nota_EscaRelaBuscar/' + id +'/'+ variable+"/"+fechaFI+"/"+fechaFF)

        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
      } catch (error) 
      {

      }
    }
    } catch (error) {
      console.log(error);
    }
    
  }
 

  useEffect(() => {
Val();
  }, []); 


  const Val = () => {
    validacion();
  }
  const validacion = () => {
    try { 
      if (DatosEscaleta.tabla === "") {
        return (
          
          <div ref={tablaRef}>
<table className='tabla-armado' id="sortable-table">
    <thead>
        <tr>
        <th scope="col">#</th>
         <th scope='col'>Orden</th>
         <th scope="col">Conductor</th>
         <th scope="col">Titulo</th>
         <th scope="col">Reportero</th>
        <th scope="col">Formato</th>
        <th scope="col" className='Invisible'>PkNota</th>
        </tr>
    </thead>
    <tbody>
        <tr  className='indicacion'  draggable="true" onDoubleClick={()=> Dobleclick(Datos)}>
            <td>1</td>
            <td>-</td>
            <td>-</td>
            <td>Bienvenida</td>
            <td>-</td>
            <td>-</td>
            <td className='Invisible'>-</td>
        </tr>
        <tr className='indicacion' draggable="true" onDoubleClick={()=> Dobleclick(Datos)}>
        <td>2</td>
            <td>-</td>
            <td>-</td>
            <td>Corte comercial</td>
            <td>-</td>
            <td>-</td>
            <td className='Invisible'>-</td>
        </tr>
        <tr  className='indicacion'  draggable="true" onDoubleClick={()=> Dobleclick(Datos)}>
        <td>3</td>
            <td>-</td>
            <td>-</td>
            <td>Despedida</td>
            <td>-</td>
            <td>-</td>
            <td className='Invisible'>-</td>
        </tr>
    </tbody>
</table> 
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



  const Dobleclick= (dato) =>{
    var table = document.getElementById('sortable-table'); 
    var rows = table.getElementsByTagName('tr');
    try {
      const partes = dato.split(',');
      var id = partes[0];
      var tipo = partes[1];
      if(tipo != '-' && tipo != ''){
        console.log("Se hizo doble clic en la fila: " + id);
        var reportero = "JB";
        var fila = document.querySelector('[data-index="' + id + '"]');
        if (fila) {
          fila.cells[2].textContent = reportero;
          OrdenNotas();
        } else {
          console.log("No se encontró una fila con el atributo data-index igual a " + id);
        }
        
      }else{
        console.log("Se hizo doble click en una indicación");
  
  
  
  
  
  
      }
    } catch (error) {
      
    }

      
  }


  const OrdenNotas = () => {
    var table = document.getElementById('sortable-table'); 
    var rows = table.getElementsByTagName('tr');
    var numero = 1;
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var columna2 = row.cells[2].textContent;
      if (columna2 !== '-') {
        row.cells[1].textContent = '['+numero+']';
        row.cells[1].classList.add('resalta-orden');
        numero++;
      }
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

  function makeRowDraggable(row,l) {
    row.setAttribute('draggable', true);
    row.ondblclick = function() {
      Dobleclick(Datos);
    };
    if(l === 1){
      row.classList.add('indicacion');
      
    }
    else{
      row.classList.add('nota-esca');
    }
    const tabla = document.getElementById('sortable-table');
    const tbody = tabla.querySelector('tbody');
    const filas = tbody.querySelectorAll('tr');
    row.setAttribute('data-index', filas.length + 1);
  
    row.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', row.id);
    });
  
    row.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  
    row.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedRowId = e.dataTransfer.getData('text/plain');
      const targetRow = e.target.closest('tr');
  
      if (draggedRowId && targetRow) {
        const table = targetRow.closest('table');
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        const draggedRowIndex = rows.findIndex((row) => row.id === draggedRowId);
        const targetRowIndex = rows.findIndex((row) => row === targetRow);
  
        if (draggedRowIndex !== -1 && targetRowIndex !== -1) {
          const movedRow = rows[draggedRowIndex];
          const referenceRow = rows[targetRowIndex];
  
          if (referenceRow) {
            table.querySelector('tbody').insertBefore(movedRow, referenceRow.nextSibling);
          }
        }
      }
    });
  }

  const ActualizarTablaEs = () => {
    const tablaContenido = tablaRef.current.innerHTML;
    const datosEnviar = {
      vTabla: tablaContenido
    };
  
    axios
      .patch('https://localhost:7201/Escaleta/PutTabla/' + id, datosEnviar)
      .then(function (respuesta) {
        recargarTabla();
        GetDatos();
      })
      .catch(function (error) {
        show_alerta('Error en la solicitud', 'error');
        console.log(error);
      });
  };

  const toggleSeleccion = (pkNota) => {
    if (filasSeleccionadas.includes(pkNota)) {
      setFilasSeleccionadas(filasSeleccionadas.filter((id) => id !== pkNota));
    } else {
      setFilasSeleccionadas([...filasSeleccionadas, pkNota]);
    }
  };
    
  const AgregarNota = async () => {

    setBotonDeshabilitado(true);

    const filasParaGuardar = Datos.filter((fila) =>
      filasSeleccionadas.includes(fila.pkNota)
    );
  
    const tabla = document.getElementById('sortable-table');
    const tbody = tabla.querySelector('tbody');
  
    for (const fila of filasParaGuardar) {
      try {
        const datosEnviar = {
          fkNota: fila.pkNota,
          fkEscaleta: id,
        };
  
        const respuesta = await axios.post('https://localhost:7201/Nota_Esca/Post', datosEnviar);
  
        if (respuesta.data.mensaje === "Ya existe") {
          console.log(respuesta.data.result.mensaje);
          console.log("Una nota no se agregó por duplicidad");
        } else {
          const nuevaFila = tabla.insertRow();
          for (let i = 0; i < 7; i++) {
            const td = nuevaFila.insertCell(i);
            if (i === 0) {
              const filas = tbody.querySelectorAll('tr');
              td.textContent = filas.length + 1;
            } else if (i === 3) {
              td.textContent = fila.titulo;
            } else if (i === 4) {
              td.textContent = fila.nombre;
            } else if (i === 5) {
              td.textContent = fila.nombre_Formato;

            }else if(i == 6){
              td.textContent = fila.pkNota;
              td.classList.add('Invisible');
            } 
            else {
              td.textContent = '-';
            }
          }
          makeRowDraggable(nuevaFila);
          setTimeout(() => {
            setBotonDeshabilitado(false);
          }, 1000);
        }
      } catch (error) {
        show_alerta('Error en la solicitud', 'error');
        console.error(error);
        setTimeout(() => {
          setBotonDeshabilitado(false);
        }, 1000);
      }
    }
  
    ActualizarTablaEs();
    setTimeout(() => {
      setBotonDeshabilitado(false);
    }, 600);
  };


  function agregarIndicacion() {
    const tabla = document.getElementById('sortable-table');
    const tbody = tabla.querySelector('tbody');
    const Indicacion = document.getElementById('Nombre_indi').value;
    const nuevaFila = tabla.insertRow();
    for (let i = 0; i < 7; i++) {
      const td = nuevaFila.insertCell(i);
      if(i === 0){
        const filas = tbody.querySelectorAll('tr');

          td.textContent = filas.length + 1
        
        
      }
      else if(i === 6){
        td.classList.add('Invisible');
      }
      else if (i === 3) {
        if(Indicacion === ""){
          td.textContent = 'Indicacion';
        }else{
          td.textContent = Indicacion;
        }
        
      } else {
        td.textContent = '-';
      }
    }
    var valor = 1;
    makeRowDraggable(nuevaFila,valor);
    ActualizarTablaEs();
  }

      
try {
    const table = document.getElementById("sortable-table");
    let draggedRow = null;

    table.addEventListener("dragstart", function (event) {
        const target = event.target.closest("tr");
        if (target) {
            draggedRow = target;
            event.target.classList.add("grabbed");
            event.target.style.opacity = 0.5;
        }
    });

    table.addEventListener("dragend", function (event) {
        event.target.style.opacity = "";
        event.target.classList.remove("grabbed");
        OrdenNotas();
        draggedRow = null;
    });

    table.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    table.addEventListener("dragenter", function (event) {
        const target = event.target.closest("tr");
        if (target && target !== draggedRow) {
            target.classList.add("dragged-over");
        }
    });

    table.addEventListener("dragleave", function (event) {
        const target = event.target.closest("tr");
        if (target && target !== draggedRow) {
            target.classList.remove("dragged-over");
        }
    });

    table.addEventListener("drop", function (event) {
        event.preventDefault();
        const target = event.target.closest("tr");
        if (target && target !== draggedRow) {
            target.classList.remove("dragged-over");

            const rect = target.getBoundingClientRect();
            const offsetY = event.clientY - rect.top - rect.height / 2;
            const isAfter = offsetY > 0;

            const parent = target.parentNode;
            if (isAfter) {
                parent.insertBefore(draggedRow, target.nextSibling);
            } else {
                parent.insertBefore(draggedRow, target);
            }
        }
        });




        const botonEliminar = document.getElementById('botonEliminar');
        const tbody = table.querySelector('tbody');
        
        function handleDragStart(event) {
          if (event.target.tagName === 'TR' && event.target !== table.tHead) {
            event.dataTransfer.setData('text/plain', event.target.getAttribute('data-index'));
          } else {
            event.preventDefault();
          }
        }
        
        function handleDragOver(event) {
          event.preventDefault();
        }
        
        function handleDragLeave(event) {
          event.preventDefault();
        }
        
        function handleDrop(event) {
        try {
          event.preventDefault();
          const draggedIndex = event.dataTransfer.getData('text/plain');
          const filaArrastrada = table.querySelector(`[data-index="${draggedIndex}"]`);
          try {
            const pknota = filaArrastrada.cells[6].textContent;
            EliminarNota(pknota);
          } catch (error) {
            
          }
          OrdenNotas();
          if (filaArrastrada) {
            tbody.removeChild(filaArrastrada);
          }
        } catch (error) {
          
        }

        }
        
        const filas = tbody.querySelectorAll('tr');
        filas.forEach((fila, index) => {
          fila.setAttribute('data-index', index);
          fila.draggable = true;
          fila.addEventListener('dragstart', handleDragStart);
          quitarDataIndex();
        });
        
        if (botonEliminar) {
          botonEliminar.addEventListener('dragover', handleDragOver);
          botonEliminar.addEventListener('dragleave', handleDragLeave);
          botonEliminar.addEventListener('drop', handleDrop);
        }
        
        
 


} catch (error) {
    
}




const EliminarNota = async (pkNota) => {
  try {
    axios.delete('https://localhost:7201/Nota_Esca/EliminarNota/' + pkNota + "/" + id).then(function(respuesta){
      show_alerta('Nota eliminada con exito');
      recargarTabla();
      ActualizarTablaEs();
  })
  .catch(function(error){
    console.log(error);
  });
  } catch (error) {
    
  }


}




const recargarTabla = () => {
  const nuevosDatos = buscar();
  setDatosTabla(nuevosDatos);
};











  const buscador = document.getElementById('Nombre_indi');
  const resultados = document.getElementById('resultados');

  if (buscador && resultados) {
      // Lista de países predefinidos
      const indicaciones = [
          'Corte comercial',
          'Promoción de Burger King',
          'Presentar nuevo tema',
          'Cortinilla',
          'Bienvenida',
          'Despedida',
      ];

      // Función para actualizar la lista de resultados
      function actualizarResultados() {
          const consulta = buscador.value.trim().toLowerCase();
          resultados.innerHTML = ''; // Borrar resultados anteriores

          if (consulta.length === 0) {
              return;
          }

          const coincidencias = indicaciones.filter(indica => indica.toLowerCase().includes(consulta));
          coincidencias.forEach(coincidencia => {
              const li = document.createElement('li');
              li.textContent = coincidencia;
              li.addEventListener('click', function () {
                  buscador.value = coincidencia;
                  resultados.innerHTML = '';
              });
              resultados.appendChild(li);
          });
      }
      buscador.addEventListener('input', actualizarResultados);
  } else {
      console.error('No se encontraron elementos buscador o resultados en el DOM.');
  }

  


  function quitarDataIndex() {
    var table = document.getElementById('sortable-table'); 
    var rows = table.getElementsByTagName('tr');
    for (var i = 0; i < 2 && i < rows.length; i++) {
      var row = rows[i];
      if (row.hasAttribute('data-index')) {
        row.removeAttribute('data-index');
      }
    }
    for (var i = 0; i < rows.length; i++) {
      (function(row) {
        row.ondblclick = function() {
          var dataIndex = row.getAttribute('data-index');
          var tipo = row.cells[6].textContent;
          Dobleclick(dataIndex + ',' + tipo);
        };
      })(rows[i]);
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
          <button type='button' class='btn btn-danger'> <FaFilePdf size={20} color='white'/> Generar PDF </button>
      </div>
      <br />
    </div>

      <br />

      <div className="Button-form">
              <button type="button" class="btn btn-primary" data-bs-toggle='modal' data-bs-target='#modalIndicacion' > <BsFillSignpostFill size={20} color='white'/> Agregar Indicación</button>          
              <button type="button" data-bs-toggle='modal' data-bs-target='#modalselect' class="btn btn-success"> <FaPlusSquare size={20} color='white'/> Agregar Nota</button>
              <div class="tooltip-container">
              <button id="botonEliminar" className='BtnEliminar'>  <FaTrash size={20} /> Eliminar</button>
              <div class="tooltip-text">Arrastra un elemento para eliminarlo.</div>
             </div>
             
      </div>

      <div class="container">
     
      {mostrar()}
        {validacion()}
    </div>

  </div>
      <br />





      <div id="miModal" class="modal fade">
      <div className='modal-dialog'>
        <div className='modal-content-notas'>
          <div className='modal-header'>
            <label className='h5'> </label>
            <button type='clsbutton' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
            <h4> Editar registro </h4>
            <div className='modal-body-table'>
		 <div className="Auth-form-container-Main">
                    
     
                </div>
            </div>
        </div>
      </div>
</div>




<div id='modalselect' className='modal fade' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content-notas'>
          <div className='modal-header'>
            <label className='h5'> </label>
            <button type='btnCerrar' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
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
                    <input type="checkbox" className='check-box-nota' onChange={() => toggleSeleccion(Datos.pkNota)}/>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table>   
                </div>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button id='AgregarNota' className="btn btn-success" onClick={() => AgregarNota(Datos)} disabled={botonDeshabilitado}> 
              <i className="fa-solid fa-floppy-disk" ></i> Agregar
              </button>
              <br />
            </div>
        </div>
      </div>
    </div>





















    <div id='modalIndicacion' className='modal fade' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content-indicacion'>
          <div className='modal-header'>
            <label className='h5'> </label>
            <button type='btnCerrar' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          
            <h4>Definir Indicacion</h4>
            <div className='modal-body-table'>
		 <div className="Auth-form-container-Main">
                    <textarea className='nombre-indic' id='Nombre_indi'/> 
                    <ul id="resultados"></ul>
                </div>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button id='AgregarNota' className="btn btn-success" onClick={()=> agregarIndicacion()} > 
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