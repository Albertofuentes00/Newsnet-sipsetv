import React from "react";
import {FaUsers} from 'react-icons/fa'
import {HiDocumentText} from 'react-icons/hi'
import {FaAngleLeft} from 'react-icons/fa'

import { BiCameraMovie } from 'react-icons/bi'
import { FaMicrophone } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'
import { FaUserCog } from 'react-icons/fa'

import { Outlet, Link } from "react-router-dom";



function HelpMenu(){

    return(

<body className="App-body" >
    <div className="Row">
        <div className="HelpMenu">

            <ul>
                <Link to='/Main'>
                    <li> 
                    <a>Regresar</a> 
                    </li>
                </Link> 

                <Link to='Introduccion'>
                    <li> 
                    <a>Introducción</a> 
                    </li>
                </Link>  

                <Link to='BitacoraHelp'>
                    <li> 
                    <a>Bitácora</a> 
                    </li>
                </Link>  

                <Link to='EscaletasHelp'>
                    <li> 
                    <a>Escaletas</a> 
                    </li>
                </Link>  

                <Link to='GuionesHelp'>
                    <li> 
                    <a>Guiones/Notas</a> 
                    </li>
                </Link>  

                <Link to='AdminHelp'>
                    <li> 
                    <a>Administrador </a>
                    </li>
                </Link>  

                <Link to='About'>
                    <li>
                        <a>Acerca de </a>
                    </li>
                </Link>  
            </ul>                  
        </div>
        <Outlet />
    </div>
</body>
    )
}

export default HelpMenu