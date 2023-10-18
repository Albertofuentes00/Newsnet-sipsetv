import { useEffect, useState } from "react"
import axios from 'axios'
import { FaRegListAlt } from 'react-icons/fa';
import {FaAngleLeft} from 'react-icons/fa';
import { FaEye } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

const GuionesNotas=()=>{




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
    useEffect(()=>{
        GetDatos();
    },[]);
  
    const GetDatos = async ()=>{
        try {
            const respuesta = await axios.get('https://localhost:7201/Nota/Get');
            console.log(respuesta.data.result);
            SetDatos(respuesta.data.result);
        } catch (error) {
            console.log(error);
        }

    }




    const buscar = async ()=>{
        try {
          var variable = document.getElementById("Buscador").value;
          var fechaFI = document.getElementById("FI").value;
          var fechaFF = document.getElementById("FF").value;
        if (variable === ""){
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










    return (
        
        
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







            <form className="Auth-form-table">
            <div className='Auth-Maintable'>

                <div className="Row">
                    <h1>Notas</h1>
                    <div className="Button-form">
                        <Link to='/MainMenu'>
                            <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                        </Link>
                    </div>
                </div>


                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" className="table-title">Título</th>
                                    <th scope="col">Categoría</th>
                                    <th scope="col">Formato</th>
                                    <th scope="col">Reportero</th>
                                    <th scope="col">Fecha Mes/Dia/Año</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {Datos.map((Dato, i) => (
  <tr className={Dato.redaccion !== "" ? 'no-redac' : ''} key={Dato.fkNota}>
    <td>{i + 1}</td>
    <td>{Dato.titulo}</td>
    <td>{Dato.nombre_Categoria}</td>
    <td>{Dato.nombre_Formato}</td>
    <td>{Dato.nombre}</td>
    <td>{Dato.fecha.split(' ')[0]}</td>
    <td className="buttons-th">
      <Link to={'/LeerGuion/' + Dato.pkNota}>
        <button
          id="ver"
          type="button"
          className="acciones"
          disabled={Dato.redaccion === ""}
        >
          <FaEye size={20} />
        </button>
      </Link>
      <Link to={'/EditarGuion/' + Dato.pkNota}>
        <button type="button" className="acciones">
          <FaRegListAlt size={20} />
        </button>
      </Link>
    </td>
  </tr>
))}

                            </tbody>
                        </table>
                        
                    
                </div>
            </div>
        </form>
        
        </div>

    </div>

    )
}

export default GuionesNotas