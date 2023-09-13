import { Component } from "react";
import { FaSearch } from "react-icons/fa";


class SearchMenu extends Component {

    render () {
        return(
            <div className="Auth-form-searchbar">
        <div className="Row-searchbar">

          <div className="Row">
            <div className="Grid">
              <label>Título/Palabra clave</label>
              <input type="text" className="input-search" />
              <div className="Row">
                <label>Categoría</label>
                <select  className="input-search"> </select>
              </div>
            </div>
          </div>

          <div className="Row">
            <div className="Grid">
                <label>Reportero</label>
                <select  className="input-search"> </select>
            <div className="Grid">
                <label>Formato </label>
                <select  className="input-search"> </select>
            </div>
          </div>
          </div>
        
          <div className="Row">
            <div className="Grid">
              <label> Fecha Inicial</label>
              <input type="date" className="input-search"/>
            <div className="Grid">
              <label> Fecha Final</label>
              <input type="date" className="input-search"/>
            </div>
          </div>
        </div>

          <div className="Row">
            <div className="Grid"></div>
              <button class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
          </div>
        </div>
      </div>

        );
    }
}

export default SearchMenu;