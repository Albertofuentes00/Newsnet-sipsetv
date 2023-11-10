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
         try {
          
           const partes = cadena.split('/');
           const user = partes[1]
           return (
             <h4>Bienvenido, {user} </h4>
    
         )
         } catch (error) {
           console.log(error);
         }

        
    
       }

     }

    }



export default Texto