import React from "react";
import { Outlet } from "react-router-dom";


function AdminHelp() {

    return(

            <body className="App-body">
                <div className="Row"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Administrador</h1>
                        <br />
                        <h4 className="textIntroduction">
                        Esta seccion será exclusivamente para el administrador de la plataforma, en donde gestionará toda la información
                        en general de las notas, escaletas y guiones, así como la gestion de datos de suma importancia como los programas emitidos,
                        los usuarios, las categorias, entre otras cosas.
                        </h4>
                            <br />
                        <h4 className="textIntroduction">
                        En la parte superior de la seccion se mostrará un menu horizontal de opciones, donde el administrador leerá y eliminará
                        los datos agrupados en distintas opciones como <u>Usuarios, Formatos, Categorías, Programas y Roles </u>    
                        </h4>
                            <br />
                        <h4  className="textIntroduction" >
                        En el caso de Usuarios, el sistema pedirá al administrador datos como su <u>Nombre y apellidos, Username, Contraseña y Rol</u>
                        a la hora de crear un nuevo usuario
                        </h4>
                            <br />
                        <Outlet/>
                    </div>
                </div>
            </body>
    )
}


export default AdminHelp