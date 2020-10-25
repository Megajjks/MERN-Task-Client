import React, { useReducer } from "react";
import ProyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  GET_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
} from "../../types";

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
    errorformulario: false,
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

  //Agregar proyecto
  const agregarProyecto = (proyecto) => {
    //proyecto.id = uuid.v4()
    proyecto.id = 6;
    dispatch({ type: AGREGAR_PROYECTO, payload: proyecto });
  };

  //Validar el formulario por errores
  const mostrarError = () => {
    dispatch({ type: VALIDAR_FORMULARIO });
  };

  return (
    <ProyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        mostrarFormulario,
        getProyectos,
        agregarProyecto,
        mostrarError,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
