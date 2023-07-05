import { Outlet } from "react-router-dom";


function EscaletasHelp() {

    return(

            <body className="App-body">
                <div className="Row"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Escaletas</h1>
                        <br />
                        <h4 className="textIntroduction">
                        En esta sección hará gestión de las escaletas y su información, así como la edición, eliminación y exportación de estas
                        </h4>
                            <br />
                        <h4 className="textIntroduction">Para crear una escaleta nueva haga click en el botón <u> Agregar Nueva Escaleta</u>, ingrese los datos requeridos
                        para una escaleta (Programa y Fecha) da click en <u>Guardar</u> para crear la escaleta</h4>
                            <br />
                        <h4  className="textIntroduction" >Para realizar una busqueda personalizada de una escaleta, haga click en el botón <u>Buscar</u> e ingrese los
                        datos que usted desee encontrar</h4>
                            <br />
                        <h4  className="textIntroduction" >Para acomodar las filas de la escaleta, basta con seleccionar la fila que usted desea mover y arrastra con 
                        el cursor hasta el lugar donde desee reubicarla </h4>
                            <br />
                        <h4  className="textIntroduction" >Para visualizar la información de una escaleta haga click en el botón <u>Ver</u>de la escaleta deseada,
                        a continuación se describirán las siguientes tareas que usted puede realizar: </h4>
                            <br />
                        <h5 className="textIntroduction"><u>►Agregar Nota</u>: Agrega una o más notas a traves de una lista de notas, donde el usuario seleccionará 
                        las notas que desee</h5>
                        <br />
                        <h5 className="textIntroduction"><u>►Agregar Indicación</u>: Agrega una fila a la escaleta, sin ningun tipo de dato más que el nombre, 
                        el cual el usuario puede editar para señalar una indicación dentro de la escaleta</h5>
                        <br />
                        <h5 className="textIntroduction"><u>►Generar PDF</u>: Genera un PDF de la escaleta abierta que el usuario puede descargar e imprimir</h5>
                        <br />
                        <h5 className="textIntroduction"><u>►Editar y eliminar</u>: Edita y elimina los datos de una fila respectivamente</h5>
                        <br />
                        <h5 className="textIntroduction"><u>►Guardar</u>: Guarda los cambios realizados en la escaleta respectivamente</h5>
                        <Outlet/>
                    </div>
                </div>
            </body>
    )

}


export default EscaletasHelp