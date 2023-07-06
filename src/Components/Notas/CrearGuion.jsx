import React from "react";

import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa'




class NuevoGuion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        textAreas: ["Texto largo..."], // Array inicial con un textarea
      };
    }
  
    handleAddTextArea = () => {
      this.setState((prevState) => ({
        textAreas: [...prevState.textAreas, ""], // Agregar un textarea vacío al array
      }));
    };
  
    handleRemoveTextArea = (index) => {
      this.setState((prevState) => {
        const updatedTextAreas = [...prevState.textAreas];
        updatedTextAreas.splice(index, 1); // Eliminar el textarea en el índice especificado
        return { textAreas: updatedTextAreas };
      });
    };
  
    handleChange = (event, index) => {
      const { value } = event.target;
      this.setState((prevState) => {
        const updatedTextAreas = [...prevState.textAreas];
        updatedTextAreas[index] = value; // Actualizar el valor del textarea en el índice correspondiente
        return { textAreas: updatedTextAreas };
      });
    };
  
    render() {
      return (
                <div className="Auth-form-container">
        <form className="Auth-form-Guion">
        <div className="Auth-form-content">
            <h2 className="Auth-form-title">Crear guión</h2>
            <h3 className="Text-helper">Escriba en las cuadrillas a continuación los guiones que desea agregar a la nota </h3>
            <div>
                <h3>TITULO: SAMPLE TEXT </h3>

            </div>
            <br />
            <div>
                <form className="Button-form">
                    <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                    <button type="button" class='btn btn-success'> <FaSave size={20} color="white"/> Guardar cambios </button>
                    <button type="button" class="btn btn-primary"  onClick={this.handleAddTextArea}> <FaPlusSquare  size={20} color="white"/> Agregar Celda</button>
                    <button type="button" class="btn btn-danger" onClick={() => this.handleRemoveTextArea()} > <FaMinusSquare  size={20} color="white"/> Quitar Celda</button>

                </form>
            </div>
            <br />
            <div>
          {this.state.textAreas.map((text, index) => (
             <div className="Row-Guion" key={index}>
                <textarea  
                    type="text"
                    className="excel-cell-input"
                    // value={text}
                    onChange={(event) => this.handleChange(event, index)}
                    rows={10}
                    style={{ width: "100%", resize: "none" }}
                        
                />
                <textarea  
                     type="text"
                     className="excel-cell-input"
                     // value={text}
                     onChange={(event) => this.handleChange(event, index)}
                     rows={10}
                     style={{ width: "100%", resize: "none" }} 
                />
            </div>
          ))}

</div>

        </div>
            <br />
        
        </form>
    </div>
      );
    }
  }
  

  export default NuevoGuion


