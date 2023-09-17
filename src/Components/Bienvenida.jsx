import Cookies from "js-cookie";

const Texto = (props) => {


    const user = Cookies.get('Usuario');
    const rutaActual = window.location.pathname;

    // Realizar una acción basada en la ruta actual
    if (rutaActual != '/') {
      if(!user){
        window.location.href = '/';
        
      }
      else{
        return (
            <h3>Bienvenido: {user} </h3>
    
        )
    
      }

    }

    }



export default Texto