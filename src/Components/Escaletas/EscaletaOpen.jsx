import React, { useState } from 'react';

import { FaAngleLeft } from 'react-icons/fa';

import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import {FaFilePdf} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa';
import {BsFillSignpostFill} from 'react-icons/bs'

import { Outlet, Link } from 'react-router-dom';




function EscaletaMove() {

  const [dragItem, setDragItem] = useState();
const [list, setList] = useState([
  <td> "The Call Of Ktulu" </td>,
  <td> "For Whom The Bell Tolls" </td>,
  <td> "For Whom The Bell Tolls 2" </td> ,
  <td> "The Day That Never Comes" </td>,
  <td>"The Memory Remains" </td>,
  <td>"Confusion" </td>,
  <td>"Moth Into Flame" </td>,
  <td>"The Outlaw Torn" </td>,
  <td>"No Leaf Clover" </td>,
  <td>"Halo on Fire" </td>,
]);


const handleDragStart = (index) => {
  setDragItem(index);
};

const handleDragEnter = (e, index) => {
  e.target.style.backgroundColor = "#336699";
  const newList = [...list];
  const item = newList[dragItem];
  newList.splice(dragItem, 1);
  newList.splice(index, 0, item);
  setDragItem(index);
  setList(newList);
};

const handleDragLeave = (e) => {
  e.target.style.backgroundColor = "rgb(192, 192, 192)";
};

const handleDrop = (e) => {
  e.target.style.backgroundColor = "rgb(192, 192, 192)";
};

return(



  <div className="Auth-form-container">
  <form className="Auth-form-escaleta">
  <div className="Auth-form-content">
      <h3 className="Auth-form-title">Cancun Vive 22-06-23</h3>
      <form className="Button-form">
            <Link to=''>
            
            </Link>
              <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
              <button type='button' class='btn btn-warning'> <FaEdit size={20} color='black'/> Editar Escaleta</button>
              <button type="button" class="btn btn-primary"> <BsFillSignpostFill size={20} color='white'/> Agregar Indicación</button>
              <button type="button" class="btn btn-success">  Agregar Nota</button>
              <button type='button' class='btn btn-danger'> <FaFilePdf size={20} color='white'/> Generar PDF </button>
      </form>


      <div>
          <ul className="dnd">
                   {list &&
                     list.map((item, index) => (
                     <li
                     draggable
                     key={index}
                     onDragStart={() => handleDragStart(index)}
                     onDragEnter={(e) => handleDragEnter(e, index)}
                     onDragLeave={(e) => handleDragLeave(e)}
                     onDrop={(e) => handleDrop(e)}
                     onDragOver={(e) => e.preventDefault()}
                   >
                     {item}
                   </li>
                 ))}
          </ul>
      </div>
  </div>
      <br />
  <div>
      <button type="button" class="btn btn-success"> <FaSave size={20} color="white"/> Guardar </button>
      <button type="button" class="btn btn-danger"> <GiCancel size={20} color="white"/> Cancelar </button>
  </div>
  
  </form>
</div>


    //  <div className="Auth-form-container">
    //         <form className="Auth-form">
    //             <div className="Auth-form-content"> 
    //             <h3>Cancun Vive 22-06-23</h3>
    //             <br />
    //             <div> 
    //                 <form className="Button-form">
    //                     <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
    //                     <button type='button' class='btn btn-warning'> Editar Escaleta</button>
    //                     <button type="button" class="btn btn-primary"> Agregar Indicación</button>
    //                     <button type="button" class="btn btn-success">  Agregar Nota</button>
    //                     <button type='button' class='btn btn-danger'> Generar PDF </button>
    //                 </form>
    //             </div>
    //             </div>
    //             <br />

    //             <ul className="dnd">
    //               {list &&
    //                 list.map((item, index) => (
    //                 <li
    //                 draggable
    //                 key={index}
    //                 onDragStart={() => handleDragStart(index)}
    //                 onDragEnter={(e) => handleDragEnter(e, index)}
    //                 onDragLeave={(e) => handleDragLeave(e)}
    //                 onDrop={(e) => handleDrop(e)}
    //                 onDragOver={(e) => e.preventDefault()}
    //               >
    //                 {item}
    //               </li>
    //             ))}
    //             </ul>

    //         </form>
    //   </div>


)
}



export default EscaletaMove
