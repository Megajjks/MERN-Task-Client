import React, { useReducer } from "react";
import ProyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = (props) => {
  //creando el state inicial
  const initialState = {
    formulario: false,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //serie de funciones o actions para el crud

  return (
    <ProyectoContext.Provider value={{ formulario: state.formulario }}>
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
