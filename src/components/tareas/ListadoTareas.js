import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import tareaContext from "../../context/tarea/tareaContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  //obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //obtener el context de tareas
  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;
  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Eliminar un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>{`Proyecto: ${proyectoActual.name}`}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas por el momento</p>
          </li>
        ) : (
          tareasproyecto.map((tarea, idx) => <Tarea key={idx} tarea={tarea} />)
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
