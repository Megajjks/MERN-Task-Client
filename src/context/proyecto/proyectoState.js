import React, { useReducer } from "react";
import ProyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO, GET_PROYECTOS } from "../../types";

const ProyectoState = (props) => {
  const fakeProyectos = [
    { id: 1, name: "Tienda virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Diseño de sitio web" },
    { id: 4, name: "MERN" },
  ];

  //creando el state inicial
  const initialState = {
    proyectos: [],
    formulario: false,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //serie de funciones para el crud
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //Obtener Proyectos
  const getProyectos = () => {
    dispatch({
      type: GET_PROYECTOS,
      payload: fakeProyectos,
    });
  };

  return (
    <ProyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        mostrarFormulario,
        getProyectos,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
