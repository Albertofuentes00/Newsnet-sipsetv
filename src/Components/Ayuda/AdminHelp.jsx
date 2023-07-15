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
                        Esta seccion será exclusivamente para el administrador de la plataforma, en donde gestionará toda la información
                        en general de las notas, escaletas y guiones, así como la gestion de datos de suma importancia como los programas emitidos,
                        los usuarios, las categorias, entre otras cosas.
                        </h4>
                            <br />
                        <div className="section">
                            <h3>Secciones</h3>
                            <h5>En la barra superior de la pantalla de Administrador observará las siguientes opciones: <u>Usuarios, Programas, Categorías, Formatos y Roles</u></h5>
                            <br />
                            <h5>Al hacer click en cada opción se desplegará una tabla donde se leerán los datos registrados, como los <u>usuarios registrados en la plataforma</u>, 
                                los <u>programas transmitidos</u> y las <u>categorías y formatos</u> para las notas.
                            </h5>
                            <br />

                        </div>

                        <div className="section">
                            <h3>Registrar</h3>
                            <h5> Haga click en el botón <u>Nuevo Usuario, Programa, Categoría, Formato y Rol</u> para hacer registro de cada una de las 5 opciones que la plataforma ofrece</h5>
                            <br />
                            <h5> Para eliminar un dato en cada una de las tablas haga Click en <u>Eliminar</u> para eliminar el registro por completo del sistema
                            </h5>
                        </div>
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