import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import tareaContext from "../../context/tarea/tareaContext";

const Proyecto = ({ proyecto }) => {
  //obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //obtener el context de tareas
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  // Agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); //fijar un proyecto actual
    obtenerTareas(id); //filtrar las tareas del proyecto cuando se de click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.name}
      </button>
    </li>
  );
};

export default Proyecto;
