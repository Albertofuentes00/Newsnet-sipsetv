import React from "react";
import {FaUsers} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'
import { BiCameraMovie } from 'react-icons/bi'
import { FaMicrophone } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'
import { FaUserCog } from 'react-icons/fa'
import { Outlet, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function SearchBar(){

    return(
        <body className="App-body">
            <header>
                <div className="MenuHeader">
                     <div className="Row-searchbar">

                <div className="Row">
                    <h3>Buscar por filtro</h3>
                </div>

                <div className="Grid">
                    <div className="Row">
                        <label>Título/Palabra</label>
                        <input type="text" className="input-search" />
                        <label>Fecha</label>
                        <input type="date" className="input-search"/>

                        {/* <label> Categoría</label>
                        <select> </select>
                        <label>Formato</label>
                        <select ></select> */}

                    </div>
                    {/* <div className="Row">
                        <label>Buscar nota del</label>
                        <input type="date" className="input-search"/>
                        <label > al </label>
                        <input type="date" className="input-search" />
                        <input type="button"></input>
                    </div> */}

                    <div className="Row">
                        <label> Categoría</label>
                        <select> </select>
                        <label>Formato</label>
                        <select ></select>
                        <label>Reportero</label>
                        <select ></select>

                    </div>
                </div>

                <div className="Row">
                    <button class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>
                </div>


            </div>
            </div>
            </header> 
        </body>
    )
}

export default SearchBar