import React from "react";
import { Outlet } from "react-router-dom";
import {FaUsers} from 'react-icons/fa'
import { FaList } from "react-icons/fa";
import { BiCameraMovie } from 'react-icons/bi'
import { FaMicrophone } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'
import { FaUserCog } from 'react-icons/fa'
import AdminDashboard from './HelpImages/AdminDashboard.png'






function AdminHelp() {

    return(

            <body className="App-body">
                <div className="Main"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Administrador</h1>
                        <br />
                        <h4 className="textIntroduction">
                        Esta seccion será exclusivamente para el administrador de la plataforma, en ella puede gestionar la información de la plataforma, como los usuarios 
                        </h4>
                            <br />
                        <div className="section">
                            <h3>Secciones</h3>
                            <h5>En la parte superior de la pantalla de Admninistrador observará un menú con las siguientes pestañas a continuación:</h5>
                            <br />
                            <img src={AdminDashboard} className="HelpImages2" />
                            <br />
                            <h6>- <FaUsers size={30} color="white" /> Usuarios: Gestiona el registro de nuevos usuarios, la información de los usuarios dados de alta en la plataforma y dar de baja a dichos usuarios.  </h6>
                            <h6>- <BiCameraMovie size={30} color="white" /> Programas: Gestiona los programas de televisión donde se emitirán las escaletas junto con las notas, aquí puede registrar, editar o eliminar dichos programas del sistema. </h6>
                            <h6>- <BiCategory size={30} color="white" /> Categorías: Gestiona las categorías que puede tener un programa o una nota, aquí ouede registrar, editar o eliminar dichas categorías. </h6>
                            <h6>- <FaMicrophone size={30} color="white" /> Formatos: Gestiona los formatos que una nota puede tener, aquí puede registrar, editar y eliminar dichos formatos. </h6>
                            <h6>- <FaUserCog size={30} color='white'/> Roles: Gestiona los roles que tiene un usuario dentro de la plataforma y su información. </h6>
                            <h6>- <FaList size={30} color="white"/> Fuentes: Gestiona las fuentes de donde proviene la nota, aquí puede registrar, editar o eliminar dichas fuentes. </h6>
                            <h5> En cada pestaña puede crear, editar y eliminar los datos según sean su pestaña, así tambien puede realizar búsquedas dentro de ellas a traves de la barra de búsqueda.
                           
                            </h5>
                            <br />

                        </div>
                        
                            <br />
                        <Outlet/>
                    </div>
                </div>
            </body>
    )
}


export default AdminHelp