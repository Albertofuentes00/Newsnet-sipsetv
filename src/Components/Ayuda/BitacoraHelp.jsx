import React from "react";
import { Outlet } from "react-router-dom";
import BitacoraMain from './HelpImages/BitacoraMain.PNG'
import { FaPlusSquare } from "react-icons/fa";
import Editarnota1 from './HelpImages/EditarNota1.jpg'
import Editarnota2 from './HelpImages/EditarNota2.jpg'
import Editarnota3 from './HelpImages/EditarNota3.jpg'
import CrearNota from './HelpImages/CrearNota.jpg'
import CrearNota1 from './HelpImages/CrearNota1.jpg'
import CrearNota2 from './HelpImages/CrearNota2.jpg'
import EliminarNota from './HelpImages/EliminarNota.jpg'
import EliminarNota2 from './HelpImages/EliminarNota2.jpg'





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
                            <h2>Entorno de bitácora</h2>
                            <h4>Al ingresar a la bitácora observará la sección de la siguiente manera:</h4>
                            <br />
                            <img src={BitacoraMain} className="HelpImages" />
                            <br />
                            <br />
                            <h4>Donde se mostrarán todas las notas registradas en el sistema, ordenadas por título, fecha, fuente y reportero.</h4>
                            <br />
                            <h4><u>► Considere que al entrar a la bitacora por primera vez se mostraran como fechas inicial y final las fechas de hoy y mañana, lo que facilitará encontrar las notas creadas durante ese lapso de tiempo</u></h4>
                            <br />
                            <h4>► Si desea buscar una nota es especifico dirigase al buscador de la parte de arriba e ingrese las fechas requeridas para buscar las notas creadas durante ese periodo, tambien puede escribir palabras clave en el cuadro de texto para encontrar notas de acuerdo a su <u>Título, Categoría, Formato, Fuente y Reportero</u> </h4>
                        </div>
                       
                            <br />
                        
                        <h6 className="section">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h6>    
                        <div className="section">
                            <h3>Gestión de notas</h3>
                            <h5>Para crear una nota nueva:</h5>
                            <br />
                            <img src={CrearNota} className="HelpImages2" />
                            <br />
                            <br />
                            <h6>Haga click en el botón <button type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Nota</button>e  inmediatamente se desplegará una ventan donde el sistema le pedirá que ingrese los datos que la nota requiera.</h6>
                            <br />
                            <img src={CrearNota1} className="HelpImages" />
                            <br />
                            <br />
                            <img src={CrearNota2} className="HelpImages" />
                            <br />
                            <br />
                            <h6>Una vez que haya llenado los datos haga click en <button className="btn btn-success"> <i className="fa-solid fa-floppy-disk"></i> Guardar </button> para publicar la nota.</h6>
                            <br />
                            <br />
                            <br />
                            <h5>Para editar y/o corregir una nota existente:</h5>
                            <br />
                            <div className="section">
                                <div >
                                    <img src={Editarnota1} className="HelpImages2"/>
                                    <br />
                                    <br />
                                    <h6>Haga click en el ícono de lapiz <i className="fa-solid fa-edit"></i> que se encuentra a un lado del ícono del bote de basura de la nota que usted desee editar, una vez hecho click el sistema le desplegará un formulario similar 
                                        al de <u>Crear Nota</u> y le pedirá que ingrese los nuevos datos que desee en sus respectivos campos. 
                                    </h6>
                                    <br />
                                </div>
                                <br />
                                <div>
                                    <img src={Editarnota2} className="HelpImages"/>
                                    <br />
                                    <br />
                                    <img src={Editarnota3} className="HelpImages3"/>
                                    <br />
                                    <br />
                                    <h6>Al terminar sus cambios haga click en el botón <button className="btn btn-success"> <i className="fa-solid fa-floppy-disk"></i> Guardar </button> y usted verá reflejado los cambios hechos en la nota.</h6>
                                </div>
                                <br />
                            </div>
                            <br />
                            <br />
                            <h5>Para eliminar una nota existente:</h5>
                            <br />
                            <img src={EliminarNota} className="HelpImages2" />
                            <br />
                            <br />
                            <h6>Haga click en el ícono del bote de basura <i className="fa-solid fa-trash"></i> de la nota que usted desee eliminar.</h6>
                            <br />
                            <img src={EliminarNota2} className="HelpImages"/>
                            <br />
                            <br />
                            <h6>Posteriormente el sistema le preguntará si esta seguro de borrar la nota, si es asi, haga click en <u>Si, Eliminar</u> para eliminar por completo la nota. </h6>
                            <h6><u>NOTA: Las notas eliminadas no podrán ser recuperadas despues. </u> </h6>
                        </div>
                            <br />
                            <br />
                        <Outlet/>
                    </div>
                </div>
            </body>
    )

}


export default BitacoraHelp