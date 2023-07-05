import React from "react";
import { Outlet } from "react-router-dom";


function Introduccion() {

    return(

        <div className="HelpTexts">
            <h1>Bienvenidos a NewsNet</h1>
            <br />
            <h4 className="textIntroduction">
                En este entorno digital desarrollado exclusivamente para Televisora de Cancún SA de CV podrá hacer uso de 
                las herramientas necesarias para la redacción de noticias de los diferentes noticieros de SIPSE TVCUN; En NewsNet 
                puede redactar guiones, armar escaletas, consultar notas, monitorear actividad de los usuarios que hacen uso de la plataforma,
                entre otras tareas específicas.
                <br />
                Para empezar a conocer el entorno renovado de NewsNet, selecciona una de las opciones del menu lateral izquierdo que desea saber.
                <br />
                Esperemos que esta pequeña guía pueda serle util durante la utilización del sistema.
                <br />
                Muchas gracias y una vez mas: ¡Bienvenidos a NewsNet! 
            </h4>

            <Outlet/>
        </div>

    )

}


export default Introduccion