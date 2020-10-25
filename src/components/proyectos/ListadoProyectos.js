import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyecto/proyectoContext";

const ListadoProyectos = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, getProyectos } = proyectosContext;

  useEffect(() => {
    getProyectos();
  }, []);

  //revisar si hay proyectos
  if (proyectos.length === 0)
    return <p>No hay proyectos actuales, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
