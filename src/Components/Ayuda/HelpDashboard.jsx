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

            <Link to='Introduccion'>
                <li> 
                    Introducción 
                </li>
            </Link>  

            <Link to='BitacoraHelp'>
                <li> 
                    Bitácora 
                </li>
            </Link>  

            <Link to='EscaletasHelp'>
                <li> 
                    Escaletas 
                </li>
            </Link>  

            <Link to='GuionesHelp'>
                <li> 
                    Guiones/Notas 
                </li>
            </Link>  

            <Link to='AdminHelp'>
                <li> 
                    Administrador 
                </li>
            </Link>  

            <Link to='About'>
                <li>
                    Acerca de SIPSE NewsNet
                </li>
            </Link>  


            
        </div>
        <Outlet />
    </div>
</body>
    )
}

export default HelpMenu