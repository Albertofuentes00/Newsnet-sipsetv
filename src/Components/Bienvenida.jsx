import Cookies from "js-cookie";

const Texto = (props) => {



  const cadena = Cookies.get('Usuario');
    const rutaActual = window.location.pathname;

    // Realizar una acción basada en la ruta actual
    if (rutaActual != '/') {
      if(!cadena){
        window.location.href = '/';
      
  
      }
      else{
        const partes = cadena.split('/');
        const user = partes[1]
        return (
            <h3>Bienvenido: {user} </h3>
    
        )
    
      }

    }

    }



export default Texto