import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchEscaleta() {
  const [fechaFI, setFechaFI] = useState(getFechaActualFI);
  const [fechaFF, setFechaFF] = useState(getFechaActualFF);

  function getFechaActualFI() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  function getFechaActualFF() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  function getFecha() {
    var fechaFI = document.getElementById("FI").value
    var fechaFF = document.getElementById("FF").value
    console.log(fechaFI + " A " + fechaFF)
  }

  return (
    <div className="Auth-form-searchbar">
      <div className="Row-searchbar">
        <div className="Row">
          <input type="text" className="input-search-admin" placeholder="Buscar..." />
        </div>
        <div className="Row">
          <div className="Grid">
            <label> Fecha Inicial</label>
            <input
              id="FI"
              type="date"
              className="input-search"
              value={fechaFI}
              onChange={(e) => setFechaFI(e.target.value)}
            />
            <div className="Grid">
              <label> Fecha Final</label>
              <input id="FF" type="date" className="input-search" value={fechaFF}
              onChange={(e) => setFechaFF(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="Grid"></div>
          <button onClick={getFecha} className="btn btn-primary">
            <FaSearch size={20} color="white" /> Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchEscaleta;
