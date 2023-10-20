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
                            En este entorno digital desarrollado exclusivamente para Televisora de Cancún SA. de CV. podrá hacer uso de 
                            las herramientas necesarias para la redacción de noticias de los diferentes noticieros de SIPSE TVCUN; En NewsNet 
                            puede redactar guiones, armar escaletas y crear notas, asi como la lectura e impresión de estas para su posterior uso.</h4>
                            <br />
                        <h4 className="textIntroduction">Para empezar a conocer el entorno renovado de NewsNet, selecciona una de las opciones del menu lateral izquierdo que desea saber.</h4>
                            <br />
                        <h4  className="textIntroduction" >Esperemos que esta pequeña guía pueda ser de gran utilidad durante el tiempo que se encuentre utilizando la plataforma.</h4>
                            <br />
                        <h4  className="FinalIntroduction">Una vez más... ¡Bienvenidos a NewsNet! </h4>

                        <Outlet/>
                    </div>
                </div>
            </body>
    )

}


export default Introduccion