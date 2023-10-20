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
                        En esta sección podrá gestionar las notas periodisticas que se emitirán al aire, a continuacion podrá consultar las funciones que usted puede realizar en la bitácora: 
                        </h4>
                        <br />
                        <div className="section">
                            <h4>Al ingresar a la bitácora observará la sección de la siguiente manera:</h4>
                            <img src='./images/NewsnetHelp/Bitacora.PNG'/>

                            <h5>Si desea buscar una nota es especifico dirigase al buscador de la parte de arriba e ingrese las fechas para buscar las notas creadas durante esas fechas, tambien puede escribir palabras clave en el cuadro de texto para encontrar notas de acuerdo a su <u>Título, Categoría, Formato, Fuente y Reportero</u> </h5>
                            <h5>Considere que al entrar a la bitacora por primera vez se mostraran como fechas inicial y final las fechas de hoy y mañana, lo que facilitara encontrar las notas para las escaletas de hoy y mañana</h5>
                        </div>
                       
                            <br />
                            
                        <div className="section">
                            <h3>Gestión de notas</h3>
                            <h5>Para crear una nota nueva:</h5>
                            <br />
                            <h6>Haga click en el botón <u>Agregar Nota</u> e ingrese los datos que el sistema le pide y posteriormente haga click en <u>Guardar</u> para publicar la nota.</h6>
                            <br />

                            <h5>Para editar y/o corregir una nota existente:</h5>
                            <h6>Haga click en el ícono de lapiz que se encuentra a un lado del ícono del bote de basura de la nota que usted desee editar, una vez hecho click el sistema le desplegará un formulario similar 
                                al de <u>Crear Nota</u> y le pedirá que ingrese los nuevos datos que desee en sus respectivos campos, al terminar sus cambios haga click en el botón <u>Guardar</u> y usted verá reflejado los cambios hechos en la nota.
                            </h6>

                            <h5>Para eliminar una nota existente:</h5>
                            <h6>Haga click en el icono del bote de basura de la nota que usted desee eliminar, el sistema le preguntará si esta seguro de borrar la nota, si es asi, haga click en <u>Si, Eliminar</u> para eliminar por completo la nota. </h6>
                            <h6><u>NOTA: Las notas eliminadas no podran ser recuperadas despues. </u> </h6>


                        </div>
                            <br />
                        <div className="section">
                            
                        </div>
                       
                            <br />
                        <Outlet/>
                    </div>
                </div>
            </body>
    )

}


export default BitacoraHelp