import React from "react";
import { useState } from 'react';
import {FaUsers} from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'
import { FaUserCog } from 'react-icons/fa'
import { Outlet, Link,useNavigate } from "react-router-dom"
import { FaList } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import Cookies from "js-cookie";

function AdminMenu(){
    //obtner el rol de la cookie
    const navigate = useNavigate();
    const cadena = Cookies.get('Usuario');
    const partes = cadena.split('/');
    const rol = partes[2];


    const [selectedButton, setSelectedButton] = useState(1); // Pestaña de usuarios como vista al entrar a Administrador

    const changeButtonClass = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
      
      
    
    if (rol != "Administrador") {
        navigate('/MainMenu');    // Si el usuario no es administrador, no puede acceder al admin  
        window.location.reload();      // De lo contrario, se puede acceder 
      }
      else{   //Botones con la ruta correspondiente a las vistas                          
        return(
            <body className="App-body">
            <header className="mainheader">
                <div className="MenuHeader">
                <Link to='ListaUsuarios' className={selectedButton === 1 ? 'active-admin-btn' : 'linkbtnad'} id="btn-1" onClick={()=> changeButtonClass(1)}>
                    <button type="button" class="adminbtn" > <FaUsers size={20} /> Usuarios</button>
                </Link >
                <Link to='ListaProgramas' className={selectedButton === 2 ? 'active-admin-btn' : 'linkbtnad'}  id="btn-2" onClick={()=> changeButtonClass(2)}>
                    <button type='button' class='adminbtn' > <FaTv size={20} /> Programas </button>
                </Link>
                <Link to='ListaCategorias' className={selectedButton === 3 ? 'active-admin-btn' : 'linkbtnad'}  id="btn-3" onClick={()=> changeButtonClass(3)}>
                    <button type='button' class='adminbtn' > <BiCategory size={20}/>  Categorías </button>
                </Link>
                <Link to='ListaFormatos' className={selectedButton === 4 ? 'active-admin-btn' : 'linkbtnad'}  id="btn-4" onClick={()=> changeButtonClass(4)}>
                    <button type="button" class='adminbtn'> <FaList size={20} /> Formatos </button>
                </Link>  
                <Link to='ListaRoles' className={selectedButton === 5 ? 'active-admin-btn' : 'linkbtnad'}  id="btn-5" onClick={()=> changeButtonClass(5)}>
                    <button type="button" class='adminbtn' >  <FaUserCog size={20} /> Roles </button>
                </Link>  
                <Link to='ListaFuentes' className={selectedButton === 6 ? 'active-admin-btn' : 'linkbtnad'}  id="btn-6" onClick={()=> changeButtonClass(6)}>
                    <button type="button" class='adminbtn' > <FaMicrophone size={20} /> Fuentes </button>
                </Link>
                </div>
            </header> 
            <Outlet />
            </body> 
        )
   
      }

    }


export default AdminMenu