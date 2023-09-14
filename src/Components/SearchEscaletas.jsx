import { Component } from "react";
import { FaSearch } from "react-icons/fa";


class SearchEscaleta extends Component {

    render () {
        return(
            <div className="Auth-form-searchbar">
        <div className="Row-searchbar">

          <div className="Row">
              <input type="text" className="input-search-admin" placeholder="Buscar..." />
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

export default SearchEscaleta;