import React from "react";
import { Outlet } from "react-router-dom";







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
                            <h5>En la barra superior de la pantalla de Administrador observará las siguientes opciones: <u>Usuarios, Programas, Categorías, Formatos, Roles y Fuentes</u>, haga click en cada una de ellas para consultar y gestionar información acerca de dicha pestaña.</h5>
                            <br />
                            <h5> En cada pestaña puede crear, editar y eliminar los datos según sean su pestaña, así tambien puede realizar búsquedas dentro de ellas a traves de la barra de búsqueda.
                            <h5><u>En el caso de Usuario, el sistema le pedirá al administrador que ingrese su nombre y apellido, username, contraseña y un Rol dentro de la plataforma a la hora de registrar un nuevo usuario.</u></h5>
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