import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyecto/proyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, getProyectos } = proyectosContext;

  useEffect(() => {
    getProyectos();
    //eslint-disable-next-line
  }, []);

  //revisar si hay proyectos
  if (proyectos.length === 0)
    return <p>No hay proyectos actuales, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto, idx) => (
          <CSSTransition key={idx} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
