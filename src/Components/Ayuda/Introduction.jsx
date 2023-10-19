import React from "react";
import { Outlet } from "react-router-dom";


function Introduccion() {

    return(

            <body className="App-body">
                <div className="Main"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">Bienvenidos a NewsNet</h1>
                        <br />
                        <h4 className="textIntroduction">
                            En este entorno digital desarrollado exclusivamente para Televisora de Cancún SA de CV podrá hacer uso de 
                            las herramientas necesarias para la redacción de noticias de los diferentes noticieros de SIPSE TVCUN; En NewsNet 
                            puede redactar guiones, armar escaletas y crear notas, asi como la lectura e impresion de estas para su psoterior uso.</h4>
                            <br />
                        <h4 className="textIntroduction">Para empezar a conocer el entorno renovado de NewsNet, selecciona una de las opciones del menu lateral izquierdo que desea saber.</h4>
                            <br />
                        <h4  className="textIntroduction" >Esperemos que esta pequeña guía pueda serle util durante la utilización del sistema.</h4>
                            <br />
                        <h4  className="FinalIntroduction">¡Bienvenidos a NewsNet! </h4>

                        <Outlet/>
                    </div>
                </div>
            </body>
    )

}


export default Introduccion