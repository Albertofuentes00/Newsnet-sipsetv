import { Link } from "react-router-dom";
import {FaAngleLeft} from 'react-icons/fa';
import {FaPrint} from 'react-icons/fa';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'

const LeerGuion=()=>{
    const [Datos, SetDatos] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
      GetDatos();
  },[]);
  
  const GetDatos = async()=>{
    try {
        const respuesta = await axios.get('https://localhost:7201/Redaccion/GetNota/'+id);
        console.log(respuesta.data.result);
        SetDatos(respuesta.data.result);
    } catch (error) {
        
    }

  }
    return(
        <div className="Auth-form-container">
        <form className="Auth-form-Guion">
        <div className="Auth-form-content">
            <h2 className="Auth-form-title">Guión Cancun Vive 03/07/23</h2>
            <div>{Datos.map(Dato => (
                <div className="Row"> 
                    <div className="Grid">
                        <h5> Reportero: {Dato.nota.usuario}:  </h5>
                    </div>
                    <div className="Grid">
                        <h5> Categoria: {Dato.nota.categoria.nombre_Categoria} </h5>
                    </div>
                    <div className="Grid">
                        <h5> Formato: {Dato.nota.formato.nombre_Formato} </h5>
                    </div>
                </div>       
        ))}</div>
            <br />
            <div>
                <form className="Button-form">
                    <Link to='/Notas'>
                        <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                    </Link>
                    <button type="button" class="btn btn-primary">  <FaPrint size={20} color="white"/> Imprimir Guión </button>
                </form>
            </div>
            <br />
           
            {Datos.map((Datos) =>(
            <div className="Row-Guion">
                <textarea  type="text"
                        className="excel-cell-input"
                        value={Datos.anotacion}
                        />
                <textarea  type="text"
                        className="excel-cell-input"
                        value={Datos.descripcion} Resize='none'/>
            </div>
            ))}

        </div>
            <br />
        
        </form>
    </div>
    )
    
}

 export default LeerGuion



