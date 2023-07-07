import React from "react";
import { Outlet } from "react-router-dom";


function About() {

    return(

            <body className="App-body">
                <div className="Main"> 
                    <div className="HelpTexts">
                        <h1 className="TitleHelp">►Acerca de Newsnet</h1>
                        <br />
                        <p
                         className="textIntroduction">
                        Newsnet es un programa de redacción de noticias de Grupo Sipse, que a lo largo de más de 15 años ha servido a la 
                        division de noticias de Sipse Tvcun como una herramienta esencial para el desarrollo y produccion de sus noticieros estelares
                        </p
                        >
                            <br />
                        <p
                         className="textIntroduction">
                        Esta nueva version de NewsNet responde a las necesidades de la televisora para optimizar y actualizar su entorno de trabajo;
                        NewsNet 2023 es un proyecto de estancias de parte de dos alumnos de la UPQROO, quienes pusieron a prueba sus conocimientos adquridos
                        durante su proceso educativo, de principio a fin para el desarrollo de esta version actualizada del sitio NewsNet     
                        </p
                        >
                            <br />
                        <p
                          className="textIntroduction" >
                        Agradecemos a la Televisora de Cancun por darnos una oportunidad para realizar nuestro proceso de estancias,
                        </p
                        >
                            <br />
                        <Outlet/>
                    </div>
                </div>
            </body>
    )
}

export default About