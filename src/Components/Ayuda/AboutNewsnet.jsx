import React from "react";
import { Outlet } from "react-router-dom";


function About() {

    return(

            <body className="App-body">
                <div className="Main"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Acerca de Newsnet</h1>
                        <br />
                        <p className="textIntroduction">
                        Newsnet es un entorno exclusivo para Televisora de Cancun SA. de CV. utilizado para la redacción de notas periodísticas, escaletas y redacciones, con el fin de mantener un orden y 
                        seguimiento de dichas notas y sus redacciones, con el objetivo de transmitirse durante los espacios noticiosos de SIPSE TVCUN, con el proposito de informar y cumplir su deber periodístico.
                        </p>
                            <br />
                        <p className="textIntroduction">
                        Esta nueva version de NewsNet responde a las necesidades de la televisora para optimizar y actualizar su entorno de trabajo;
                        NewsNet 2023 es un proyecto de estancias de parte de alumnos de la UPQROO, quienes pusieron a prueba sus conocimientos adquridos
                        durante su proceso educativo de principio a fin para el desarrollo de esta version actualizada del sitio NewsNet.
                        </p>
                            <br />
                        <p className="textIntroduction" >
                        Si usted tiene un problema con la plataforma como bugs, fallos o comportamientos inusuales dentro de la plataforma, puede comunicarlo a traves de este correo:
                        </p>
                        <p className="textIntroduction">
                          newsnetsupport@gmail.com 
                        </p>
                            <br />
                        <Outlet/>
                    </div>
                </div>
            </body>
    )
}

export default About