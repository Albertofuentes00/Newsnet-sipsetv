import React from "react";
import { Outlet } from "react-router-dom";


function BitacoraHelp() {

    return(

            <body className="App-body">
                <div className="Row"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Bitácora</h1>
                        <br />
                        <h4 className="textIntroduction">
                        En esta sección hará gestion de la creación, lectura, edición y eliminación de las notas y sus guiones, así como la búsqueda de una nota en especifico
                        </h4>
                            <br />
                        <h4 className="textIntroduction">Para crear una nueva nota haga click en el botón <u> Agregar Nota</u>, posteriormente el sistema le pedirá que ingrese los datos
                        requeridos para la nota, ingrese los datos que usted considere y haga click en <u>Guardar</u>, para cancelar o regresar a la bitácora 
                        haga click en <u>Cancelar</u></h4>
                            <br />
                        <h4  className="textIntroduction" >Para realizar una busqueda personalizada de una nota, haga click en el botón <u>Buscar</u> e ingrese los
                        datos que usted desee encontrar</h4>
                            <br />
                        <h4  className="textIntroduction" >Para leer un guion existente o que se haya creado dentro de una nota haga click en <u>Ver</u>; 
                        Para editar los datos de una nota haga click en <u>Editar</u>; Para eliminar por completo una nota haga click en <u>Eliminar</u></h4>
                            <br />
                        <Outlet/>
                    </div>
                </div>
            </body>
    )

}


export default BitacoraHelp