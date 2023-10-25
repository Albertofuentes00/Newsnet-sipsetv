import { Outlet } from "react-router-dom";
import EscaletaMenuImage from './HelpImages/EscaletasMain.jpg'
import CrearEscaleta from './HelpImages/CrearEscaleta.jpg'
import CrearEscaleta2 from './HelpImages/CrearEscaleta2.jpg'
import { FaPlusSquare } from "react-icons/fa";
import EditarEscaleta from './HelpImages/EditarEscaleta.jpg'
import EditarEscaleta2 from './HelpImages/EditarEscaleta2.jpg'
import { FaEye } from "react-icons/fa";
import VerEscaleta from './HelpImages/VerEscaleta.jpg'
import EliminarEscaleta from './HelpImages/EliminarEscaleta.png'
import EliminarEscaleta2 from './HelpImages/EliminarEscaleta2.png'
import TresIndicaciones from './HelpImages/TresIndicaciones .png'
import DefinirIndicacion from './HelpImages/DefinirIndicacion.png'
import CrearIndicacion from './HelpImages/AgregarIndicacion.png'
import EditarIndicacion from './HelpImages/EditarIndicacion.png'
import { BsFillSignpostFill } from 'react-icons/bs'
import { FaFileAlt } from 'react-icons/fa'
import { BotonNotasEscaleta } from './HelpImages/AgregarNotasEscaleta.png'


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
                            <h2>Entorno de Escaletas</h2>
                            <h4>Al ingresar a la opción de Escaletas observará la sección de la siguiente manera:</h4>
                            <br />
                            <img src={EscaletaMenuImage} className="HelpImages" />
                            <br />
                            <br />
                            <h4>Donde podrá consultar las escaletas creadas dentro del sistema. </h4>
                            <br />
                            <h4><u>► Considere que al entrar a la pestaña de Escaletas por primera vez se mostraran como fechas inicial y final las fechas de hoy y mañana, lo que facilitará encontrar las escaletas creadas durante ese lapso de tiempo</u></h4>
                            <br />
                            <h4>► Tambien puede hacer uso de la barra de búsqueda de la parte superior de la pantalla para encontrar las escaletas por lapsos de tiempo y/o nombre.</h4>
                        </div>

                            <br />

                        <h6 className="section">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h6>    


                        <div className="section">
                            <h3>Gestion de Escaletas</h3>
                            <h5>Para crear una escaleta nueva:</h5>
                            <br />
                            <img src={CrearEscaleta} className="HelpImages2"/>
                            <br />
                            <br />
                            <h6>Haga click en el boton <button type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Escaleta</button> e ingrese los datos requeridos.</h6>
                            <br />
                            <img src={CrearEscaleta2} className="HelpImages" />
                            <br />
                            <br />
                            <h6>Una vez que termine de llenar los datos haga Click en <button className="btn btn-success"> <i className="fa-solid fa-floppy-disk"></i> Guardar </button>para crear la escaleta.</h6>
                            <h6><u>NOTA: La sección de Hora de inicio es opcional, puede crear la escaleta con o sin hora de inicio según lo desea.</u></h6>
                        </div>
                        <br />
                        <br />
                        <div className="section">
                            <h5>Para editar una escaleta existente:</h5>
                            <br />
                            <img src={EditarEscaleta} className="HelpImages2" />
                            <br />
                            <br />
                            <h6>Haga click en el ícono de lapiz <i className="fa-solid fa-edit"></i> que se encuentra a un lado del ícono del bote de basura de la escaleta que usted desee editar </h6>
                            <br />
                            <img src={EditarEscaleta2} className="HelpImages" />
                            <br />
                            <br />
                            <h6>Una vez hecho click el sistema le desplegará un formulario similar 
                                al de <u>Crear Escaleta</u> y le pedirá que ingrese los nuevos datos que desee en sus respectivos campos, al terminar sus cambios haga click en el botón <button className="btn btn-success"> <i className="fa-solid fa-floppy-disk"></i> Guardar </button> y usted verá reflejado los cambios hechos en la escaleta.
                            </h6>           
                        </div>
                        <br />
                        <br />
                        <div className="section">
                            <h5>Para eliminar una escaleta existente:</h5>
                            <br />
                            <img src={EliminarEscaleta} className="HelpImages2" />
                            <br />
                            <br />
                            <h6>Haga click en el icono del bote de basura de la escaleta que usted desee eliminar. </h6>
                            <br />
                            <img src={EliminarEscaleta2} className="HelpImages" />
                            <br />
                            <br />
                            <h6>El sistema le preguntará si esta seguro de borrar la escaleta, si es asi, haga click en <u>Si, Eliminar</u> para eliminar por completo la escaleta.</h6>
                            <h6><u>NOTA: Las escaletas eliminadas no podran ser recuperadas despues. </u> </h6>  
                            <br />
                            <br />       
                        </div>

                        <h6 className="section">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h6>    

                        <div className="section">
                            <h3>Armado de Escaletas</h3>
                            <h5>Para visualizar el contenido de una escaleta:</h5>
                            <br />
                            <img src={VerEscaleta} className="HelpImages2" />
                            <br />
                            <br />
                            <h5>Haga click en el ícono de ojo <FaEye size={20} color="white"/> de la escaleta que desee leer para agregar notas e indicaciones</h5>
                            <h5>Una vez dentro de la escaleta seleccionada, puede realizar las funciones que se explicarán a continuación:</h5>
                            <br />
                            <br />
                            <h3>Indicaciones</h3>
                            <br />
                            <h5>Si la escaleta es creada recientemente, observará tres indicaciones que vienen por default, las cuales son <u>BIENVENIDA, CORTE COMERCIAL Y DESPEDIDA</u></h5>
                            <br />
                            <img src={TresIndicaciones} className="HelpImages2" />
                            <br />
                            <br />
                            <h5>Usted puede agregar mas indicaciones si lo desea: haga click en el botón <button className='BtnAddIndicacion'> <BsFillSignpostFill size={20}/> Agregar Indicación</button>, donde definirá el nombre que tendrá la nueva indicación.</h5>
                            <br />
                            <img src={CrearIndicacion} className="HelpImages2" />
                            <br />
                            <br />
                            <img src={DefinirIndicacion} className="HelpImages" />
                            <br />
                            <h5>Posteriormente haga click en <button id='AgregarIndicacion' className="btn btn-success"> <i className="fa-solid fa-floppy-disk" ></i> Agregar </button> y se reflejará en la escaleta la indicacion que agregó.</h5>
                            <br />
                            <br />
                            <img src={EditarIndicacion} className="HelpImages" />
                            <h5>Tambien puede editar las indicaciones, dando click en el nombre de la indicación que desee corregir </h5>
                            <br />
                            
                            <h5>Para ordenar las notas de una escaleta, basta con seleccionar la fila que usted desea mover y arrastrar con el cursor hasta el lugar donde desee reubicarla</h5>
                            <br />
                            <br />
                            <h3>Notas</h3>
                            <br />

                            <h5>Para agregar una serie de notas en la escaleta actual, haga click en el botón  <button className='BtnAddNote'> <FaFileAlt size={20} /> Agregar Notas</button>, el sistema le desplegara una ventana de la bitacora de las notas, donde dispondrá un buscador para 
                            encontrar las notas que usted desee, puede hacer multiples selecciones de notas para agregarlas a la escaleta y una vez terminado puede hacer click en el botón <u>Agregar</u> para subir las notas a la escaleta</h5>
                            <br />
                            <h5>Para asignar un conductor a una nota, haga click en la columna de la nota que  desee e ingrese el nombre del conductor/conductora, esto le asignará un orden y un conductor a la nota en la escaleta.</h5>
                            
                            <h3>Eliminación de notas/indicaciones </h3>
                            <h5>Si desea eliminar una nota o indicacion, puede seleccionar y arrastrar la fila donde se aloje al botón <u>Eliminar</u></h5>

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