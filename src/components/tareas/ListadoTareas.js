import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  //obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;
  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Eliminar un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  const tareasProyecto = [
    { name: "Elegir plataforma", status: false },
    { name: "Elegir Colores", status: true },
    { name: "Elegir platafornas de pago", status: false },
    { name: "Elegirn hosting", status: true },
  ];

  return (
    <Fragment>
      <h2>{`Proyecto: ${proyectoActual.name}`}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas por el momento</p>
          </li>
        ) : (
          tareasProyecto.map((tarea, idx) => <Tarea key={idx} tarea={tarea} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
