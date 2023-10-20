import React from "react";
import { Outlet } from "react-router-dom";


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
                        <br />
                        Al ingresar a la sección observará un cuadro con las notas del día de hoy y mañana; si desea buscar notas de fechas anteriores puede utilizar el buscador 
                        ubicado en la parte superior de la pantalla.
                        </h4>
                            <br />
                        <div className="section">
                            <h3>Gestión de Redacciones</h3>
                            <h5>Las notas recien creadas o sin una redacción asignada se mostrarán sin negritas y sin sombreado, mientras que las notas con una redacción asignada se mostrarán en negritas y con sombreado, 
                                esto con el fin de indentificar las notas sin guión de las que ya la tienen, manteniendo un control sobre estas.
                            </h5>

                            <h3>Redactando una nota por primera vez</h3>
                            <h5>Para asignar y/o redactar un guión para una nota: </h5>

                            <h6>Haga click en el ícono de la parte derecha de una nota, esto lo llevará a la pantalla donde redactará el guión en cuestión.</h6>
                            <h6>De igual manera puede editar la redacción de una nota haciendo click en el ícono mencionado anteriormente</h6>
                            <h6>Una vez hecho esto usted puede empezar a redactar la nota seleccionada escribiendo en las celdas de <u>Anotación</u> y <u>Descripción</u> respectivamente.</h6>
                            <br />
                            <h3>Gestión de celdas</h3>
                            <h5>Para agregar celdas a la redacción:</h5>
                            <br />
                            <h6>Haga click en el botón <u>Agregar celda</u>, el sistema agregará automaticamente las celdas que usted desee.</h6>
                            <br />
                            <h5>Para eliminar una o mas celdas a la redacción:</h5>
                            <br />
                            <h6>Haga click a las celdas que usted desee eliminar y posteriormente haga click al botón <u>Quitar celdas</u>, esto eliminará por completo las celdas que usted seleccionó;
                            si usted hace click en <u>Quitar celdas</u> el sistema alertará que no hay celdas seleccionadas para eliminar.</h6>
                            <br />
                            <h5>Para guardar una redacción:</h5>
                            <br />
                            <h6>Una vez que haya concluido con la redacción de la nota, haga click en <u>Guardar cambios</u>, el sistema le informará que se guardó correctamente para que usted pueda leerlo.</h6>
                            <br />
                            <h3>Lectura e impresión de una redacción</h3>
                            <h5>Para leer/visualizar la redacción de una nota:</h5>
                            <h6>Haga click en el ícono de ojo de la nota que desee consultar, esto le abrirá la redacción junto a la información de la nota a la que le corresponde.</h6>
                            <h6>Si desea generar un PDF de la redacción o imprimirla haga click en <u>Imprimir</u>, que le permitirá descargar un PDF con la información consultada para su comodidad.</h6>

                        </div>
                        <br />
                    </div>
                </div>
            </body>
    )

}


export default GuionesHelp