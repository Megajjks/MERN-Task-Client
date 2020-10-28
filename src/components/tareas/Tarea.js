import React, { useContext } from "react";
import tareaContext from "../../context/tarea/tareaContext";
import proyectoContext from "../../context/proyecto/proyectoContext";

const Tarea = ({ tarea }) => {
  //obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  //array destructioring
  const [proyectoActual] = proyecto;
  //obtener el context de tareas
  const tareasContext = useContext(tareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareasContext;

  //Funcion para eliminar tarea
  const tareaEliminar = (id) => () => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  //Funcion para cambiar de estado
  const cambiarEstado = (tarea) => () => {
    if (tarea.status) {
      tarea.status = false;
    } else {
      tarea.status = true;
    }
    cambiarEstadoTarea(tarea);
  };

  //Funcion para seleccionar tarea actual
  const seleccionarTarea = (tarea) => () => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.name}</p>
      <div className="estado">
        {tarea.status ? (
          <button
            type="button"
            className="completo"
            onClick={cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          onClick={tareaEliminar(tarea.id)}
          type="button"
          className="btn btn-secundario"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
