import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegListAlt } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { API_KEY } from '../API_URL';

const GuionesNotas = () => {
  //Inicializacion de datos
  const [Datos, SetDatos] = useState([]);
  useEffect(() => {
    GetDatos();
  }, []);

  const GetDatos = async () => { //obtener datos de la api
    try {
      const respuesta = await axios.get(API_KEY+'/Nota/GetNoRel');
      console.log(respuesta.data.result);
      SetDatos(respuesta.data.result);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="Auth-form-container">
      <div className="Grid">
        <div className="Auth-form-table">
          <div className="Auth-Maintable">
            <div className="Row">
              <h3>Notas pendientes de escaleta</h3>
              <div className="Button-form">
                <Link to="/Notas">
                  <button
                    type="button"
                    class="btn btn-dark"
                  >
                    {' '}
                    <FaAngleLeft size={20} color="white" /> Regresar
                  </button>
                </Link>
              </div>
            </div>
            {/* mapeado de notas pendientes de escaltea */}
            <div className="Auth-form-container-Main">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" className='id-tablas'>#</th>
                    <th scope="col" className="table-title">
                      Título
                    </th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Formato</th>
                    <th scope="col">Reportero</th>
                    <th scope="col">Fecha Mes/Dia/Año</th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {Datos.map((Dato,i) => (
                    <tr
                      className={Dato.redaccion !== '' ? 'no-redac' : ''}
                      key={Dato.fkNota}
                    >
                      <td className='id-tablas'>{i + 1}</td>
                      <td>{Dato.titulo}</td>
                      <td>{Dato.nombre_Categoria}</td>
                      <td>{Dato.nombre_Formato}</td>
                      <td>{Dato.nombre}</td>
                      <td>{Dato.fecha.split(' ')[0]}</td>
                      <td className="buttons-th">
                        <Link to={'/LeerGuion/' + Dato.pkNota}>
                          <button
                            id="ver"
                            type="button"
                            className="acciones"
                            disabled={Dato.redaccion === ''}
                          >
                            <FaEye size={20} />
                          </button>
                        </Link>
                        <Link to={'/EditarGuion/' + Dato.pkNota}>
                          <button
                            type="button"
                            className="acciones"
                          >
                            <FaRegListAlt size={20} />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuionesNotas;
