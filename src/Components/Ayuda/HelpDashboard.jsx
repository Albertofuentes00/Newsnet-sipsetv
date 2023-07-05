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
        <div className="HelpMenu">

            <Link to='Introduccion'>
                <li> 
                    Introducción 
                </li>
            </Link>  

            <Link to=''>
                <li> 
                    Bitácora 
                </li>
            </Link>  

            <Link to=''>
                <li> 
                    Escaletas 
                </li>
            </Link>  

            <Link to=''>
                <li> 
                    Guiones/Notas 
                </li>
            </Link>  

            <Link to=''>
                <li> 
                    Administrador 
                </li>
            </Link>  

            <Link to=''>
                <li>
                    Acerca de SIPSE NewsNet
                </li>
            </Link>  


            
        </div>
        <Outlet />
    </body>
    )
}

export default HelpMenu