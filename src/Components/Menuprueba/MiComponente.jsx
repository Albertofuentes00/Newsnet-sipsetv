import React from 'react';
import './Form.css'; // Archivo CSS para los estilos del formulario

function MiFormulario() {
  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="input1">Input 1:</label>
        <input type="text" id="input1" name="input1" />
      </div>
      <div className="form-group">
        <label htmlFor="input2">Input 2:</label>
        <input type="text" id="input2" name="input2" />
      </div>
      <div className="form-group">
        <label htmlFor="input3">Input 3:</label>
        <input type="text" id="input3" name="input3" />
      </div>
      <div className="form-group">
        <label htmlFor="input4">Input 4:</label>
        <input type="text" id="input4" name="input4" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MiFormulario;