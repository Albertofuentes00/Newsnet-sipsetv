import React from "react";
import { Outlet } from "react-router-dom";
import NotasSombreado from './HelpImages/NotasSombreado.png'
import GuionesPantalla from './HelpImages/PantallaNotasGuiones.png'
import RedaccionGuion from './HelpImages/RedaccionGuion.png'
import LecturaGuion from './HelpImages/LecturadeGuion.png'
import GuardarRedaccion from './HelpImages/GuardarRedaccion.png'

import { FaEye } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";


function GuionesHelp() {

    return(

            <body className="App-body">
                <div className="Main"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Guiones/Notas</h1>
                        <br />
                        <h4 className="textIntroduction">
                        En esta sección podrá asignar un guión a una nota en caso de que dicha nota no tenga una; visualizar, editar y/o eliminar un guión existente asignado a una nota 
                        <br />
                        Al ingresar a la sección observará un cuadro con las notas del día de hoy y mañana; si desea buscar notas de fechas anteriores puede utilizar el buscador 
                        ubicado en la parte superior de la pantalla.
                        </h4>
                        <br />
                        <img src={GuionesPantalla} className="HelpImages" />
                        <br />
                        <br />
                        <h6 className="section">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h6>    
                        <br />
                        <div className="section">
                            <h3>Gestión de Redacciones</h3>
                            <h5>Las notas recien creadas o sin una redacción asignada se mostrarán sin negritas y sin sombreado, mientras que las notas con una redacción asignada se mostrarán en negritas y con sombreado, 
                                esto con el fin de indentificar las notas sin guión de las que ya la tienen, manteniendo un control sobre estas, como se muestra a continuación.
                            </h5>
                            <br />
                            <img src={NotasSombreado} className="HelpImages2" />
                            <br />
                            <br />
                            <h3>Redactando una nota por primera vez</h3>
                            <h5>Para asignar y/o redactar un guión para una nota: </h5>

                            <h6>Haga click en el ícono <FaRegListAlt size={20} color="white"/> de la parte derecha de una nota, esto lo llevará a la pantalla donde redactará el guión en cuestión.</h6>
                            <h6>De igual manera puede editar la redacción de una nota haciendo click en el ícono <FaRegListAlt size={20} color="white"/> mencionado anteriormente</h6>
                            <h6>Una vez hecho esto usted puede empezar a redactar la nota seleccionada escribiendo en las celdas de <u>Anotación</u> y <u>Descripción</u> respectivamente.</h6>
                            <br />
                            <img src={RedaccionGuion} className="HelpImages"/>
                            <h3>Gestión de celdas</h3>
                            <h5>Para agregar celdas a la redacción:</h5>
                            <h6>Haga click en el botón <button id='agregar-celda' type="button" className="BtnAddIndicacion"> <FaPlusSquare size={20} color="black" /> Agregar Celda </button>, el sistema agregará automaticamente las celdas que usted desee.</h6>
                            <br />
                            <h5>Para eliminar una o mas celdas a la redacción:</h5>
                            <h6>Haga click a las celdas que usted desee eliminar y posteriormente haga click al botón <button id='quitar-celda' type="button" className="BtnEliminar" > <FaMinusSquare size={20} color="black" /> Quitar Celdas </button>, esto eliminará por completo las celdas que usted seleccionó;
                            si usted hace click en <button id='quitar-celda' type="button" className="BtnEliminar" > <FaMinusSquare size={20} color="black" /> Quitar Celdas </button> el sistema alertará que no hay celdas seleccionadas para eliminar.</h6>
                            <br />
                            <br />
                            <h5>Para guardar una redacción:</h5>
                            <br />
                            <h6>Una vez que haya concluido con la redacción de la nota, haga click en  <button type="button" className="btn btn-success"> <FaSave size={20} color="white" /> Guardar cambios </button>, el sistema le informará que se guardó correctamente para que usted pueda leerlo.</h6>
                            <br />
                            <img src={GuardarRedaccion} className="HelpImages" />
                            <br />
                            <br />
                            <h3>Lectura e impresión de una redacción</h3>
                            <h5>Para leer/visualizar la redacción de una nota:</h5>
                            <h6>Haga click en el ícono de ojo  <FaEye size={20} /> de la nota que desee consultar, esto le abrirá la redacción junto a la información de la nota a la que le corresponde.</h6>
                            <br />
                            <img src={LecturaGuion} className="HelpImages" />
                            <br />
                            <br />
                            <h6>Si desea generar un PDF de la redacción o imprimirla haga click en  <button type="button" id='btn-imprimir' className="btn btn-primary"> <FaPrint size={20} color="white" /> Imprimir</button>, que le permitirá descargar un PDF con la información consultada para su comodidad.</h6>

                        </div>
                        <br />
                    </div>
                </div>
            </body>
    )

}


export default GuionesHelp