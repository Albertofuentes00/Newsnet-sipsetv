import { Outlet } from "react-router-dom";


function EscaletasHelp() {

    return(

            <body className="App-body">
                <div className="Main"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Escaletas</h1>
                        <br />
                        <h4 className="textIntroduction">
                        En esta sección hará gestión de las escaletas y su información, así como la edición, eliminación y exportación de estas; A continuación podrá consultar las funciones que usted puede en esta sección:
                        </h4>
                            <br />
                        
                        <div className="section">
                            <h3>Gestion de Escaletas</h3>
                            <h5>Para crear una escaleta nueva:</h5>

                            <h6>Haga click en el boton <u>Agregar Escaleta</u> e ingrese los datos requeridos, posteriormente haga Click en <u>Guardar</u> para crear la escaleta.</h6>
                        </div>

                        <div className="section">
                            <h3>Buscar Escaleta</h3>
                            <h5>Para buscar una escaleta existente:</h5>

                            <h6>Haga click en el boton <u>Buscar</u> e ingrese los datos que usted requiere, posteriormente haga click en <u>Buscar</u> para efectuar la búsqueda en el sistema </h6>            
                        </div>

                        <div className="section">
                            <h3>Ver Escaleta</h3>
                            <h5>Para leer una escaleta existente:</h5>

                            <h6>Haga click en el boton <u>Ver</u> de la escaleta deseada para leer y editar los datos de esta</h6>            
                        </div>

                        <div className="section">
                            <h3>Ordenar notas</h3>
                            <h5>Para ordenar las notas de una escaleta, basta con seleccionar la fila que usted desea mover y arrastrar con el cursor hasta el lugar donde desee reubicarla</h5>
                            <br />
                            <h3>Agregar notas a escaleta</h3>
                            <h5>Para ordenar las notas de una escaleta, basta con seleccionar la fila que usted desea mover y arrastrar con el cursor hasta el lugar donde desee reubicarla</h5>

                            <h3>Agregar indicación</h3>
                            <h5>Para agregar una indicacion a la escaleta, haga click en el boton <u>Agregar Indicacion</u> para agregar una nueva fila a la tabla con el nombre de INDICACION, usted puede realizar cambios en esta para renombrarla de acuerdo a sus necesidades</h5>

                            <h3>Generar PDF</h3>
                            <h5>Para generar un archivo PDF de la escaleta actual, haga click en el botón <u>Generar PDF</u> para abrir un archivo descargable que usted puede imprimir</h5>

                            <h3>Editar o Eliminar filas</h3>
                            <h5>Para eliminar una fila con una nota en una escaleta, haga click en <u>Eliminar</u> de la nota que desea. </h5>
                            <h5>Para editar o renombrar una indicacion dentro de una escaleta, haga click en el boton <u>Editar</u> para renombrar dicha indicacion </h5>
                            <h5>De igual manera puede eliminar una indicacion dando click en el boton <u>Eliminar</u> a un lado del boton de Eliminar </h5>
                            
                            
                            
                            <h6>Haga click en el boton <u>Ver</u> de la escaleta deseada para leer y editar los datos de esta</h6>            
                        </div>










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