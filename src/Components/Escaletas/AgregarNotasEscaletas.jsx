import React from "react";
import { useState, useEffect  } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import {FaAngleLeft} from 'react-icons/fa';
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function AddNotes() {

    const [dataList, setDataList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        axios.get('/api/data')
        .then(response => {
            setDataList(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
        setSelectedItems([...selectedItems, value]);
        } else {
        setSelectedItems(selectedItems.filter(item => item !== value));
        }
    };

    const handleSubmit = () => {
        axios.post('/api/insert', { selectedItems })
        .then(response => {
            console.log('Datos agregados exitosamente');
            setModalOpen(false);
        })
        .catch(error => {
            console.error(error);
        });
    };


    const CheckboxExample = () => {
        const [isChecked, setChecked] = useState(false);
      
        const handleCheckboxChange = () => {
          setChecked(!isChecked);
        };
    }
    return (

    <div className="Auth-form-container">

        <form className="Auth-form-table">
            <div className='Auth-Maintable'>
                    <div>
                        <h3>Agregar notas a Escaleta</h3>
                        <h6>Selecciona las notas que desea colocar en la escaleta
                        </h6>
                    </div>

                    <div>
                        <form className="Button-form">
                            <Link to='/PruebaMove'>
                                <button type="button" class="btn btn-dark"> <FaAngleLeft size={20} color="white"/> Regresar</button>
                            </Link>
                            
                            <button  type="button" class="btn btn-success"> <FaPlusSquare size={20} color="white"/> Agregar Notas</button>
                        
                                <button type="button" class="btn btn-primary"> <FaSearch  size={20} color="white"/> Buscar</button>

                        </form>
                    </div>
                    <br />

                <div className="Auth-form-container-Main">
                    
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No. Nota</th>
                                    <th scope="col">Título</th>
                                    <th scope="col">Categoría</th>
                                    <th scope="col">Formato</th>
                                    <th scope="col">Reportero</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">     </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Manifestacion</td>
                                    <td>Noticias</td>
                                    <td>TX</td>
                                    <td>Brito</td>
                                    <td>11-06-23</td>
                                    <td> 
                                        <input
                                        type="checkbox"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>    
                                    <td>Manifestacion</td>
                                    <td>Noticias</td>
                                    <td>TX</td>
                                    <td>Brito</td>
                                    <td>11-06-23</td>
                                    <td> 
                                        <input
                                        type="checkbox"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Manifestacion</td>
                                    <td>Noticias</td>
                                    <td>TX</td>
                                    <td>Brito</td>
                                    <td>11-06-23</td>
                                    <td>
                                        <input
                                        type="checkbox"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    
                </div>
                <Outlet/>


            </div>
        </form>

        {/* <div>
            <button onClick={() => setModalOpen(true)}>Abrir Modal</button>

            <Modal className='Modal-checkbox'
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                contentLabel="Seleccionar elementos"
            >
                <h2>Seleccionar elementos</h2>
                {dataList.map(data => (
                <div key={data.id}>
                    <label>
                    <input
                        type="checkbox"
                        value={data.id}
                        onChange={handleCheckboxChange}
                        checked={selectedItems.includes(data.id)}
                    />
                    {data.name}
                    </label>
                </div>
                ))}
                <button onClick={handleSubmit}>Agregar a la tabla</button>
            </Modal>
        </div> */}


    
    </div>


    
        
    )
}


export default AddNotes

