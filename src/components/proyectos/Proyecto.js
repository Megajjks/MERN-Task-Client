import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";

const Proyecto = ({ proyecto }) => {
  //obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => proyectoActual(proyecto.id)}
      >
        {proyecto.name}
      </button>
    </li>
  );
};

export default Proyecto;
