import React from "react";
import Welcome from "../Bienvenida";
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
                    <h3 className="Auth-form-title"><Welcome 
                        name= "Alberto" 
                        apellidos= "Fuentes"/>
                    </h3>
                    <h4 className='Auth-form-subtitle'>Escoge una opción</h4>
                    <br />
                        <div className= 'Menu-form'>
                            <div class="menu">
                                <Link to='/Bitacora'>
                                    <button type="button" class="btn btn-light" > < FaBook size={30} color="white" /> Bitácora</button>
                                </Link>

                                <Link to='/Escaletas'>
                                    <button type="button" class="btn btn-light" > <FaList size={30} color="white" /> Escaletas</button>
                                </Link>

                                <Link to='/Notas'>
                                    <button type="button" class="btn btn-light" > <FaFileAlt size={30} color="white" /> Notas</button>
                                </Link>

                                <Link to='/Admin/ListaUsuarios'> 
                                    <button type="button" class="btn btn-light" > <FaUser size={30} color='white' /> Admin</button>
                                </Link>
                            </div>
                        </div>
                </div>
            </form>
            <div>
            <Outlet/>
        </div>
    </div>
    )
}



export default Menu