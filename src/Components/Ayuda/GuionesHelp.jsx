import React from "react";
import { Outlet } from "react-router-dom";


function GuionesHelp() {

    return(

            <body className="App-body">
                <div className="Row"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Guiones/Notas</h1>
                        <br />
                        <h4 className="textIntroduction">
                        En esta sección podrá asignar un guión a una nota en caso de que dicha nota no tenga una; visualizar, editar y/o eliminar un guión existente asignado a una nota
                        </h4>
                            <br />
                        <h4  className="textIntroduction" >Para realizar una busqueda personalizada de una nota y su guion, haga click en el botón <u>Buscar</u> e ingrese los</h4>
                            <br />
                        <h4 className="textIntroduction">En la sección observará una tabla de las notas existentes, similar a la bitácora de notas; las notas sin un guión 
                        se mostrarán con un boton de <u>Crear Guion</u>, las notas con un guion existente o ya creado se mostrarán con tres botones, las cuales son <u> 
                            Ver, Editar y Eliminar</u>  </h4>
                            <br />
                        <h4  className="textIntroduction" >Para crear un nuevo guion por primera vez de una nota haga click en <u>Crear guion</u></h4>
                            <br />
                            <h4  className="textIntroduction" >Para leer un guion existente o que se haya creado dentro de una nota haga click en <u>Ver</u>; 
                        Para editar los datos de un guion haga click en <u>Editar</u>; Para eliminar por completo un guion haga click en <u>Eliminar</u></h4>
                        <Outlet/>
                    </div>
                </div>
            </body>
    )

}


export default GuionesHelp