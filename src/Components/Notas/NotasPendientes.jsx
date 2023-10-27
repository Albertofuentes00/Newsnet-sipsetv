import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegListAlt } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const GuionesNotas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [Datos, SetDatos] = useState([]);
  useEffect(() => {
    GetDatos();
  }, []);

  const GetDatos = async () => {
    try {
      const respuesta = await axios.get('https://localhost:7201/Nota/GetNoRel');
      console.log(respuesta.data.result);
      SetDatos(respuesta.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = Datos.slice(startIndex, endIndex);
  const [itemNumber, setItemNumber] = useState(0);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    setItemNumber(startIndex + 1);
  }, [currentPage, itemsPerPage, Datos]);

  const GuardarPaginaActual = () => {
    sessionStorage.setItem('paginaActual', currentPage);
  };

  useEffect(() => {
    const paginaGuardada = sessionStorage.getItem('paginaActual');
    if (paginaGuardada) {
      setCurrentPage(parseInt(paginaGuardada, 10));
    }
  }, []);

  const LimpiarSession = () => {
    sessionStorage.removeItem('paginaActual');
  };

  return (
    <div className="Auth-form-container">
      <div className="Grid">
        <div className="Auth-form-table">
          <div className="Auth-Maintable">
            <div className="Row">
              <h3>Notas Pendientes</h3>
              <div className="Button-form">
                <Link to="/MainMenu/Notas">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onClick={() => LimpiarSession()}
                  >
                    {' '}
                    <FaAngleLeft size={20} color="white" /> Regresar
                  </button>
                </Link>
              </div>
            </div>

            <div className="Auth-form-container-Main">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
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
                  {currentData.map((Dato, i) => (
                    <tr
                      className={Dato.redaccion !== '' ? 'no-redac' : ''}
                      key={Dato.fkNota}
                    >
                      <td>{itemNumber + i}</td>
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
                            onClick={() => GuardarPaginaActual()}
                          >
                            <FaEye size={20} />
                          </button>
                        </Link>
                        <Link to={'/EditarGuion/' + Dato.pkNota}>
                          <button
                            type="button"
                            className="acciones"
                            onClick={() => GuardarPaginaActual()}
                          >
                            <FaRegListAlt size={20} />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination-list">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FaArrowAltCircleLeft size={20} />
                </button>
                <span>Página {currentPage}</span>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={endIndex >= Datos.length}
                >
                  <FaArrowAltCircleRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuionesNotas;
