import React from "react";
import { Outlet } from "react-router-dom";


function BitacoraHelp() {

    return(

            <body className="App-body">
                <div className="Main"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Bitácora</h1>
                        <br />
                        <h4 className="textIntroduction">
                        En esta sección hará gestion de la creación, lectura, edición y eliminación de las notas y sus guiones, así como la búsqueda de una nota en especifico
                        </h4>
                            <br />
                        <div className="section">
                            <h3>Agregar Nota</h3>
                            <h5>Para agregar una nota nueva:</h5>

                            <h6>Haga click en el boton <u>Agregar Nota</u> e ingrese los datos requeridos, posteriormente haga Click en <u>Guardar</u> para crear la nota. </h6>
                            <h6>Para cancelar o regresar a la pantalla de bitácora, haga click en <u>Cancelar</u> </h6>
                        </div>
                       
                            <br />
                        <div className="section">
                            <h3>Buscar Nota</h3>
                            <h5>Para buscar una nota existente:</h5>

                            <h6>Haga click en el boton <u>Buscar</u> e ingrese los datos que usted requiere, posteriormente haga click en <u>Buscar</u> para efectuar la búsqueda en el sistema </h6>
                        </div>
                            <br />
                        <div className="section">
                            <h3>Leer, Editar o Eliminar Nota</h3>
                            <h5>Para leer una nota existente:</h5>

                            <h6>Haga click en el boton <u>Ver</u> para leer los datos de la nota y su guión en caso de que tenga una.</h6>


                            <h5>Para editar una nota existente:</h5>


                            <h6>Haga click en el botón <u>Editar</u> de la nota que desee e ingrese los datos que considere cambiar, finalmente haga click en <u>Guardar</u> para efectuar los cambios realizados </h6>


                            
                            <h5>Para eliminar una nota existente:</h5>


                            <h6>Haga click en el botón <u>Eliminar</u> de la nota que desee eliminar, luego recibirá un mensaje donde el sistema le pregunte que si está segur@ de eliminar, considere que no podrá recuperar la nota una vez borrada</h6>

                            
                        </div>
                       


                            <br />
                        <Outlet/>
                    </div>
                </div>
            </body>
    )

}


export default BitacoraHelp