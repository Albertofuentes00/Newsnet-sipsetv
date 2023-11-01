import Cookies from "js-cookie";
import {useNavigate } from "react-router-dom"
const Texto = (props) => {


  const navigate = useNavigate();
   const cadena = Cookies.get('Usuario');
     const rutaActual = window.location.pathname;

     // Realizar una acción basada en la ruta actual
     if (rutaActual != '/') {
       if(!cadena){
        navigate('/');
        window.location.reload();
      
  
       }
       else{
         try {
          
           const partes = cadena.split('/');
           const user = partes[1]
           return (
             <h3>Bienvenido, {user} </h3>
    
         )
         } catch (error) {
           console.log(error);
         }

        
    
       }

     }

    }



export default Texto