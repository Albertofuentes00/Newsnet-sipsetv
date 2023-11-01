//dependencias e inmportaciones
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import whitReactContent from 'sweetalert2-react-content';
import Cookies from 'js-cookie';
import { API_KEY } from '../API_URL'; //linea de conexion a la api 
//Iconos
import { show_alerta } from '../../Funciones';
import { FaPlusSquare } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';

const Bitacora = () => {
  const [Datos, SetDatos] = useState([]);
  const [Categorias, SetCategorias] = useState([]);
  const [Formatos, SetFormatos] = useState([]);
  const [Fuentes, SetFuentes] = useState([]);
  const [Usuarios, SetUsuarios] = useState([]);
  const [pkNota, setPkNota] = useState('');
  const [titulo, setTitulo] = useState('');
  const [reportero, setReportero] = useState('');
  const [fecha, setFecha] = useState('');
  const [fkCategoria, setFkCategoria] = useState('');
  const [fkFormato, setFkFormato] = useState('');
  const [fkUsuario, setFkUsuario] = useState('');
  const [fkfuente, setFkFuente] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);
  useEffect(() => {
    GetDatos();
  }, []);

  const GetDatos = async () => {  
    try {
      const respuesta = await axios.get(API_KEY+'/Nota/Get');
      const respuesta2 = await axios.get(API_KEY+'/Categoria/Get');
      const respuesta3 = await axios.get(API_KEY+'/Formato/Get');
      const respuesta4 = await axios.get(API_KEY+'/Fuente/Get');
      const respuesta5 = await axios.get(API_KEY+'/Usuario/Get/Obtener_Reporteros');
      //asignar a las variables los resultados de la api
      SetDatos(respuesta.data.result);
      SetCategorias(respuesta2.data.result);
      SetFormatos(respuesta3.data.result);
      SetFuentes(respuesta4.data.result);
      SetUsuarios(respuesta5.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  

  //Asignar su funcion al abrir modal
  const OpenModal = (
    op,
    pkNota,
    titulo,
    fecha,
    fkCategoria,
    fkFormato,
    fkfuente,
    fkUsuario
  ) => {
    setPkNota('');
    setTitulo('');
    setFkFuente('1');
    setFkCategoria('1');
    setFkFormato('1');
    setFkUsuario('');
    setFecha('');
    setOperation(op);
    setReportero();
    if (op === 1) {
      setTitle('Crear Nota');
    } else if (op === 2) {
      setTitle('Actualizar Nota');
      setPkNota(pkNota);
      setTitulo(titulo);
      setFkFuente(fkfuente);
      setFkCategoria(fkCategoria);
      setFkFormato(fkFormato);
      setFkUsuario(fkUsuario);
      setFkFuente(fkfuente);

      const fechaObjeto = new Date(fecha);

      const dia = fechaObjeto.getDate();
      const mes = fechaObjeto.getMonth() + 1;
      const año = fechaObjeto.getFullYear();
      const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${
        dia < 10 ? '0' : ''
      }${dia}`;
      setFecha(fechaFormateada);
    }
    window.setTimeout(function () {
      document.getElementById('nombre').focus();
    }, 500);
  };
  const Validar = () => {  
    var parametros;
    setBotonDeshabilitado(true);
    if (operation === 1) {
      const cadenas = Cookies.get('Usuario');
      const partess = cadenas.split('/');
      const rol = partess[2];
      if (titulo.trim() === '') {
        show_alerta('Escribe el titulo', 'warning');
        setBotonDeshabilitado(false);
      } else if (fkCategoria === '') {
        show_alerta('Escoge una categoria', 'warning');
        setBotonDeshabilitado(false);
      } else if (fkFormato === '') {
        show_alerta('Seleccion un Formato', 'warning');
        setBotonDeshabilitado(false);
      } else if (fkfuente === '') {
        show_alerta('Seleccion una fuente', 'warning');
        setBotonDeshabilitado(false);
      } else if (rol == 'Responsable' || rol == 'Administrador') {
        if (fkUsuario === '') {
          show_alerta('Seleccion un reportero', 'warning');
          setBotonDeshabilitado(false);
        } else {
          try {
            const fechaActual = new Date();
            const año = fechaActual.getFullYear();
            const mes = fechaActual.getMonth() + 1;
            const dia = fechaActual.getDate();
            const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${
              dia < 10 ? '0' : ''
            }${dia}`;

            var Varreportero;
            Varreportero = fkUsuario;

            var redaccion = '';
            parametros = {
              titulo: titulo.trim(),
              fecha: fechaFormateada,
              redaccion: redaccion,
              fkFormato: fkFormato.trim(),
              fkfuente: fkfuente.trim(),
              fkUsuario: Varreportero,
              fkCategoria: fkCategoria.trim(),
            };
            axios
              .post(API_KEY+'/Nota/Post', parametros)
              .then(function (respuesta) {
                console.log(respuesta.data.result);
                document.getElementById('btnCerrar').click();
                buscar();
                setTimeout(() => {
                  setBotonDeshabilitado(false);
                }, 2000);
                setText('');
              })
              .catch(function (error) {
                show_alerta('Error en la solicitud', 'error');
                console.log(error);
                setBotonDeshabilitado(false);
                setText('');
              });
          } catch (error) {
            console.log(error);
            setBotonDeshabilitado(false);
            setText('');
          }
        }
      } else {
        try {
          const fechaActual = new Date();
          const año = fechaActual.getFullYear();
          const mes = fechaActual.getMonth() + 1;
          const dia = fechaActual.getDate();
          const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${
            dia < 10 ? '0' : ''
          }${dia}`;
          var Varreportero;
          const cadena = Cookies.get('Usuario');
          const partes = cadena.split('/');
          const user = partes[0];
          Varreportero = user;

          var redaccion = '';
          parametros = {
            titulo: titulo.trim(),
            fecha: fechaFormateada,
            redaccion: redaccion,
            fkFormato: fkFormato.trim(),
            fkfuente: fkfuente.trim(),
            fkUsuario: Varreportero,
            fkCategoria: fkCategoria.trim(),
          };
          axios
            .post(API_KEY+'/Nota/Post', parametros)
            .then(function (respuesta) {
              console.log(respuesta.data.result);
              document.getElementById('btnCerrar').click();
              buscar();
              setTimeout(() => {
                setBotonDeshabilitado(false);
              }, 2000);
              setText('');
            })
            .catch(function (error) {
              show_alerta('Error en la solicitud', 'error');
              console.log(error);
              setBotonDeshabilitado(false);
              setText('');
            });
        } catch (error) {
          console.log(error);
          setBotonDeshabilitado(false);
          setText('');
        }
      }
    } else {
      const cadena = Cookies.get('Usuario');
      const partes = cadena.split('/');
      const rol = partes[2];
      if (titulo.trim() === '') {
        show_alerta('Escribe el titulo', 'warning');
        setBotonDeshabilitado(false);
      } else if (fkCategoria === '') {
        show_alerta('Escoge una categoria', 'warning');
        setBotonDeshabilitado(false);
      } else if (fkFormato === '') {
        show_alerta('Seleccion un Formato', 'warning');
        setBotonDeshabilitado(false);
      } else if (fecha === '') {
        show_alerta('Introduce la fecha', 'warning');
        setBotonDeshabilitado(false);
      } else if (rol == 'Responsable' || rol == 'Administrador') {
        if (fkUsuario === '') {
          show_alerta('Seleccion un reportero', 'warning');
          setBotonDeshabilitado(false);
        } else {
          const cadena = Cookies.get('Usuario');
          const partes = cadena.split('/');
          const user = partes[2];

          var Varreportero;
          console.log(reportero);
          Varreportero = fkUsuario;
          var redaccion = '';
          parametros = {
            titulo: titulo.trim(),
            fecha: fecha.trim(),
            redaccion: redaccion,
            fkCategoria: fkCategoria,
            fkFormato: fkFormato,
            fkfuente: fkfuente,
            fkUsuario: Varreportero,
          };
          axios
            .put(API_KEY+'/Nota/Put/' + pkNota, parametros)
            .then(function (respuesta) {
              document.getElementById('btnCerrareditar').click();
              buscar();
              setBotonDeshabilitado(false);
            })
            .catch(function (error) {
              show_alerta('Error en la solicitud', 'error');
              console.log(error);
              setBotonDeshabilitado(false);
            });
        }
      } else if (fkfuente === '') {
        show_alerta('Seleccion una fuente', 'warning');
        setBotonDeshabilitado(false);
      } else if (fecha === '') {
        show_alerta('Introduce la fecha', 'warning');
        setBotonDeshabilitado(false);
      } else if (fkfuente === '') {
        show_alerta('Seleccion una fuente', 'warning');
        setBotonDeshabilitado(false);
      } else {
        var Varreportero;

        const cadena = Cookies.get('Usuario');
        const partes = cadena.split('/');
        const user = partes[0];
        Varreportero = user;
        var redaccion = '';
        parametros = {
          titulo: titulo.trim(),
          fecha: fecha.trim(),
          redaccion: redaccion,
          fkCategoria: fkCategoria,
          fkFormato: fkFormato,
          fkfuente: fkfuente,
          fkUsuario: fkUsuario,
        };
        axios
          .put(API_KEY+'/Nota/Put/' + pkNota, parametros)
          .then(function (respuesta) {
            document.getElementById('btnCerrareditar').click();
            buscar();
          })
          .catch(function (error) {
            show_alerta('Error en la solicitud', 'error');
            console.log(error);
          });
      }
      console.log('Se termino el consumo de la api');
    }
  };

  //Borrar un registro
  const deleteDatos = (pkNota) => {
    const MySwal = whitReactContent(Swal);
    MySwal.fire({
      title: 'Seguro que quieres borrar esta Nota?',
      icon: 'question',
      text: 'No se podra recuperar despues',
      showCancelButton: true,
      confirmButtonText: 'si, eliminar',
      cancelbuttonText: 'cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setPkNota(pkNota);
        axios
          .delete(API_KEY+'/Nota/Delete/' + pkNota)
          .then(function (respuesta) {
            if (respuesta.data.mensaje === 'Esta relacionada') {
              show_alerta(
                'No se pudo cumplir la solicitud, esta nota se encuentra dentro de una escaleta'
              );
            } else {
              buscar();
            }
          })
          .catch(function (error) {
            show_alerta('Error en la solicitud', 'error');
            console.log(error);
          });
      }
    });
  };

  //Comprueba el rol y filtra las opciones
  function rol() {
    try {
      const cadena = Cookies.get('Usuario');
      const partes = cadena.split('/');
      const rol = partes[2];

      if (rol === 'Responsable' || rol === 'Administrador') {
        return (
          <div className="Grid">
            <label> Reportero </label>
            <div className="input-group mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i>
                    <FaUser size={20} color="black" />
                  </i>
                </span>
                <select
                  required
                  className="form-select"
                  value={fkUsuario}
                  onChange={(e) => setFkUsuario(e.target.value)}
                >
                  <option></option>
                  {Usuarios.map((Usuarios) => (
                    <option value={Usuarios.pkUsuario}>
                      {Usuarios.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
      } else {
        return null; // No devuelve nada cuando el rol no es "Usuario"
      }
    } catch (error) {
      console.log(error);
    }
  }

  //Filtra la opcion de editar 
  function rolEditar() {
    try {
      const cadena = Cookies.get('Usuario');
      const partes = cadena.split('/');
      const rol = partes[2];

      if (rol === 'Responsable' || rol === 'Administrador') {
        return (
          <div className="Grid">
            <label> Reportero </label>
            <div className="input-group mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i>
                    {' '}
                    <FaUser size={20} color="black" />
                  </i>
                </span>
                <select
                  required
                  className="form-select"
                  value={fkUsuario}
                  onChange={(e) => setFkUsuario(e.target.value)}
                >
                  <option></option>
                  {Usuarios.map((Usuarios) => (
                    <option value={Usuarios.pkUsuario}>
                      {Usuarios.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
      } else {
        return null; // No devuelve nada cuando el rol no es "Usuario"
      }
    } catch (error) {
      console.log(error);
    }
  }

  const buscar = async () => {
    try {
      var variable = document.getElementById('Buscador').value;
      var fechaFI = document.getElementById('FI').value;
      var fechaFF = document.getElementById('FF').value;
      if (variable == '') {
        try {
          const respuesta = await axios.get(
            API_KEY+'/Nota/BuscarDefault/' +
              fechaFI +
              '/' +
              fechaFF
          );

          console.log(respuesta.data.result);
          SetDatos(respuesta.data.result);
        } catch (error) {}
      } else {
        try {
          const respuesta = await axios.get(
            API_KEY+'/Nota/Buscar/' +
              variable +
              '/' +
              fechaFI +
              '/' +
              fechaFF
          );

          console.log(respuesta.data.result);
          SetDatos(respuesta.data.result);
        } catch (error) {}
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="Auth-form-container">
      <div className="Grid">
        <div className="Auth-form-searchbar">
          <div className="Row-searchbar">
            <div className="Row">
              //Buscador
              <div className="buscador_admin">
                <input
                  id="Buscador"
                  type="search"
                  className="inputbus"
                  placeholder="Buscar..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      buscar();
                    }
                  }}
                />
              </div>
            </div>
            <div className="Row">
              <div className="Grid">
                <label> Fecha Inicial</label>
                <input
                  id="FI"
                  type="date"
                  className="input-search"
                  value={fechaFI}
                  min={fechaMinima}
                  required
                  onChange={(e) => setFechaFI(e.target.value)}
                />
                <div className="Grid">
                  <label> Fecha Final</label>
                  <input
                    id="FF"
                    type="date"
                    className="input-search"
                    value={fechaFF}
                    min={fechaMinima}
                    required
                    onChange={(e) => setFechaFF(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="Row">
              <div className="Grid"></div>
              <button className="btn btn-primary" onClick={() => buscar()}>
                <FaSearch size={20} color="white" /> Buscar
              </button>
            </div>
          </div>
        </div>

        <div className="Auth-form-table">
          <div className="Auth-Maintable">
            <div className="Row">
              <h3>Bitácora de notas</h3>
              <div>
                <button
                  onClick={() => OpenModal(1)}
                  data-bs-toggle="modal"
                  data-bs-target="#modaldefault"
                  type="button"
                  class="btn btn-success"
                >
                  {' '}
                  <FaPlusSquare size={20} color="white" /> Agregar Nota
                </button>
              </div>
            </div>

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
                    <th scope="col">Fuente</th>
                    <th scope="col">Fecha Mes/Dia/Año</th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {Datos.map((Datos,i) => (
                    <tr key={Datos.pkNota}>
                      <td className='id-tablas'>{i + 1}</td>
                      <td>{Datos.titulo}</td>
                      <td>{Datos.nombre_Categoria}</td>
                      <td>{Datos.nombre_Formato}</td>
                      <td>{Datos.nombre}</td>
                      <td>{Datos.nombre_Fuente}</td>
                      <td>{Datos.fecha.split(' ')[0]}</td>
                      <td>
                        //botones de opciones
                        <button
                          onClick={() => {
                            OpenModal(
                              2,
                              Datos.pkNota,
                              Datos.titulo,
                              Datos.fecha,
                              Datos.fkCategoria,
                              Datos.fkFormato,
                              Datos.fkFuente,
                              Datos.fkUsuario
                            );
                            setText(Datos.titulo);
                          }}
                          className="acciones"
                          data-bs-toggle="modal"
                          data-bs-target="#modaleditar"
                        >
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        &nbsp;
                        <button
                          onClick={() => deleteDatos(Datos.pkNota)}
                          className="acciones"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="Row">
              <h3></h3>
              <div>
                <button
                  onClick={() => OpenModal(1)}
                  data-bs-toggle="modal"
                  data-bs-target="#modaldefault"
                  type="button"
                  class="btn btn-success"
                >
                  {' '}
                  <FaPlusSquare size={20} color="white" /> Agregar Nota
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="modaldefault" className="modal fade" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <label className="modal-title">Crear Nota</label>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <br />
            <div>
              <h6>Ingresa los datos requeridos para crear una nota nueva</h6>
            </div>

            <div className="modal-body">
              <label> Titulo</label>
              <input type="hidden" id="id"></input>
              <div className="input-group mb-3">
                <textarea
                  type="text"
                  id="nombre"
                  className="form-control"
                  placeholder="Titulo"
                  value={text}
                  maxLength="250"
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <label> Categoria </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i>
                          {' '}
                          <BiCategory size={20} color="black" />{' '}
                        </i>
                      </span>
                      <select
                        required
                        className="form-select"
                        value={fkCategoria}
                        onChange={(e) => setFkCategoria(e.target.value)}
                      >
                        {Categorias.map((Categorias) => (
                          <option value={Categorias.pkCategoria}>
                            {Categorias.nombre_Categoria}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div class="col">
                    <label> Formato </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i>
                          {' '}
                          <FaList size={20} color="black" />
                        </i>
                      </span>
                      <select
                        required
                        className="form-select"
                        value={fkFormato}
                        onChange={(e) => setFkFormato(e.target.value)}
                      >
                        {Formatos.map((Formatos) => (
                          <option value={Formatos.pkFormato}>
                            {Formatos.nombre_Formato}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div class="w-100">
                    <div className="Row">
                      <div class="col">
                        <label> Fuentes </label>
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <i>
                              {' '}
                              <FaMicrophone size={20} color="black" />
                            </i>
                          </span>
                          <select
                            required
                            className="form-select"
                            value={fkfuente}
                            onChange={(e) => setFkFuente(e.target.value)}
                          >
                            
                            {Fuentes.map((Fuentes) => (
                              <option value={Fuentes.pkFuente}>
                                {Fuentes.nombre_Fuente}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div class="col">{rol(true)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Button-form">
                <div className="Row">
                  <button
                    onClick={() => Validar()}
                    className="btn btn-success"
                    disabled={botonDeshabilitado}
                  >
                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                  </button>

                  <button
                    type="button"
                    id="btnCerrar"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-circle-xmark" /> Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="modaleditar" className="modal fade" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <label className="modal-title">Editar Nota</label>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setText('')}
              ></button>
            </div>
            <h6>
              Ingresa los nuevos datos que requiere para editar la nota
              seleccionada
            </h6>

            <div className="modal-body">
              <div className="Row">
                <div class="col">
                  <label> Titulo </label>
                  <input type="hidden" id="id"></input>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="nombre"
                      className="form-control"
                      placeholder="Titulo"
                      value={text}
                      maxLength="250"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>

                <div class="col">
                  <label> Fecha</label>
                  <div className="input-group mb-3">
                    <input
                      type="Date"
                      className="form-control mt-1"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="Row">
                <div class="col">
                  <label> Categoria </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i>
                        <BiCategory size={20} color="black" />{' '}
                      </i>
                    </span>
                    <select
                      required
                      className="form-select"
                      value={fkCategoria}
                      onChange={(e) => setFkCategoria(e.target.value)}
                    >
                      <option></option>
                      {Categorias.map((Categorias) => (
                        <option value={Categorias.pkCategoria}>
                          {Categorias.nombre_Categoria}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div class="col">
                  <label> Formato </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i>
                        {' '}
                        <FaList size={20} color="black" />
                      </i>
                    </span>
                    <select
                      required
                      className="form-select"
                      value={fkFormato}
                      onChange={(e) => setFkFormato(e.target.value)}
                    >
                      <option></option>
                      {Formatos.map((Formatos) => (
                        <option value={Formatos.pkFormato}>
                          {Formatos.nombre_Formato}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="Row">
                <div class="col">
                  <label> Fuentes </label>
                  <div className="input-group mb-3">
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i>
                          {' '}
                          <FaMicrophone size={20} color="black" />
                        </i>
                      </span>
                      <select
                        required
                        className="form-select"
                        value={fkfuente}
                        onChange={(e) => setFkFuente(e.target.value)}
                      >
                        <option></option>
                        {Fuentes.map((Fuentes) => (
                          <option value={Fuentes.pkFuente}>
                            {Fuentes.nombre_Fuente}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col">{rolEditar(true)}</div>
              </div>

              <div className="Button-form">
                <div className="Row">
                  <div class="col">
                    <button
                      onClick={() => Validar()}
                      className="btn btn-success"
                      disabled={botonDeshabilitado}
                    >
                      <i className="fa-solid fa-floppy-disk"></i> Guardar
                    </button>

                    <button
                      type="button"
                      id="btnCerrareditar"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                      onClick={() => setText('')}
                    >
                      <i className="fa-solid fa-circle-xmark" /> Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bitacora;
