import React from "react";
import Texto from "../Texto";
import { FaList } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa"
import {FaUser} from 'react-icons/fa'

import Escaletas from "../Escaletas/EscaletasView";
import GuionesNotas from "../Notas/NotasGuiones";
import Bitacora from "../Bitacora/BitacoraView";

import { Outlet, Link } from "react-router-dom";


function Menu() {
    return (
        // <div className="Auth-form-container-Main">
        //     <form className="Auth-form-Main">
        //         <div className="Auth-form-content">
        //         <h3 className="Auth-form-title"><Texto 
        //         name= "Alberto" 
        //         apellidos= "Fuentes"/>
        //          </h3>
                
        //         <h4 className='Auth-form-subtitle'>Escoge una opción</h4>
        //         <div className='Main-menu-form'>
        //             <button type="button" class="btn btn-light" > Bitacora</button>
        //             <button type="button" class="btn btn-light">Escaletas</button>
        //             <button type="button" class="btn btn-light">Notas</button>
        //             <button type="button" class="btn btn-light">Administrador</button>
        //             </div>
        //         </div>
        //     </form>
        // </div>
        
        <div className="Auth-form-MainMenu">
            <form className='Auth-form-Main'>
                <div className='Main-Welcome' >
                    <h3 className="Auth-form-title"><Texto 
                        name= "Alberto" 
                        apellidos= "Fuentes"/>
                    </h3>
                    <h4 className='Auth-form-subtitle'>Escoge una opción</h4>
                        <div className= 'Menu-form'>
                            <div className= 'Row'>
                                <Link to='/Bitacora'>
                                    <button type="button" class="btn btn-light" > < FaBook size={30} color="white" /> Bitacora</button>
                                </Link>

                                <Link to='/Escaletas'>
                                    <button type="button" class="btn btn-light"  > <FaList size={30} color="white" /> Escaletas</button>
                                </Link>
                            </div>
                            <div className= 'Row'>
                                <Link to='/Notas'>
                                    <button type="button" class="btn btn-light"> <FaFileAlt size={30} color="white" /> Notas</button>
                                </Link>

                                <Link to='/Admin/ListaUsuarios'> 
                                    <button type="button" class='btn btn-light'> <FaUser size={30} color='white' />   Administrador </button>
                                </Link>
                            </div>



                        </div>
                </div>
            </form>
            <Outlet/>
        </div>
        

        // <div className='Main-Welcome' >
        //      <h3 className="Auth-form-title"><Texto 
        //         name= "Alberto" 
        //         apellidos= "Fuentes"/>
        //     </h3>
        //     <h4 className='Auth-form-subtitle'>Escoge una opción</h4>
        // </div>

        // <div className= 'Menu-form'>
        //     <div className= 'Row'>
        //         <button type="button" class="btn btn-light" > Bitacora</button>
        //         <button type="button" class="btn btn-light">Escaletas</button>
        //     </div>
        //     <div className= 'Row'>
        //         <button type="button" class="btn btn-light">Notas</button>
        //         <button type="button" class="btn btn-light">Administrador</button>
        //     </div>

        // </div>
    )
}



export default Menu