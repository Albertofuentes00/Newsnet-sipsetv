import React from "react";

import {FaAngleLeft} from 'react-icons/fa'
import { FaSave } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa' 
import { Outlet, Link } from "react-router-dom"

import Cookies from "js-cookie";

function EscaletaMenu(){



    // const ActualizarTablaEs = () => {
    //     const tablaContenido = tablaRef.current.innerHTML;
    //     const datosEnviar = {
    //       vTabla: tablaContenido
    //     };
      
    //     axios
    //       .patch('https://localhost:7201/Escaleta/PutTabla/' + id, datosEnviar)
    //       .then(function (respuesta) {
    //         show_alerta('Datos guardados correctamente');
    //       })
    //       .catch(function (error) {
    //         show_alerta('Error en la solicitud', 'error');
    //         console.log(error);
    //       });
    //   };

        return(
            <body className="App-body">
            <header className="mainheader">
                <div className="MenuHeader">
                    <div className="Row-Escaletaheader">
                        <h1>Armado de Escaleta</h1>
                        <div>
                            <Link to='/Escaletas'>
                                <button type="button" class="btn btn-dark"  > <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>
                            {/* <button type="button" class="btn btn-success" onClick={()=> ActualizarTablaEs()}> <FaSave size={20} color="white"/> Guardar </button> */}
                            <button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
                            <button type='button' class='btn btn-danger'> <FaFilePdf size={20} color='white'/> Generar PDF </button>
                        </div>
                        <br />
                    </div>
                </div>
            </header> 
            
            <Outlet />
            </body>    
            
        )
   
      }


export default EscaletaMenu