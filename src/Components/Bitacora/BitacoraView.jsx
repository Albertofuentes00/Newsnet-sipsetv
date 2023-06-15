import React from "react";



function Bitacora() {

    return (
        
        <body>
            <div>
                <h3>Bitácora de notas</h3>
            </div>

            <div>
                <form className="Button-form">
                    <button type="button" class="btn btn-dark">Regresar</button>
                    <button type="button" class="btn btn-success">Agregar Nota</button>
                    <button type="button" class="btn btn-primary">Buscar</button>
                </form>
            </div>

        <div className="Auth-form-container-Main">
            <form className='Table-form'>
            <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No. Nota</th>
                            <th scope="col">Título</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Formato</th>
                            <th scope="col">Reportero</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">     </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <th>Manifestacion</th>
                            <th>Noticias</th>
                            <th>TX</th>
                            <th>Brito</th>
                            <th>11-06-23</th>
                            <th className="buttons-th"> <button type="button" class="btn btn-warning"> Editar</button> 
                                 <button type="button" class="btn btn-danger">Eliminar</button> 
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <th>Manifestacion</th>
                            <th>Noticias</th>
                            <th>TX</th>
                            <th>Brito</th>
                            <th>11-06-23</th>
                            <th className="buttons-th"> <button type="button" class="btn btn-warning"> Editar</button> 
                                 <button type="button" class="btn btn-danger">Eliminar</button> 
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <th>Manifestacion</th>
                            <th>Noticias</th>
                            <th>TX</th>
                            <th>Brito</th>
                            <th>11-06-23</th>
                            <th className="buttons-th"> <button type="button" class="btn btn-warning"> Editar</button> 
                                 <button type="button" class="btn btn-danger">Eliminar</button> 
                            </th>
                        </tr>
                    </tbody>
                </table>
                
            </form>
        </div>
        </body>
    )
}


export default Bitacora
