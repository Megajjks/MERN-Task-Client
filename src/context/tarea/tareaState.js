import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { name: "Elegir plataforma", status: false, proyectoId: 1 },
      { name: "Elegir Colores", status: true, proyectoId: 2 },
      { name: "Elegir platafornas de pago", status: false, proyectoId: 3 },
      { name: "Elegirn hosting", status: true, proyectoId: 4 },
      { name: "Elegir plataforma", status: false, proyectoId: 3 },
      { name: "Elegir Colores", status: true, proyectoId: 2 },
      { name: "Elegir platafornas de pago", status: false, proyectoId: 2 },
      { name: "Elegirn hosting", status: true, proyectoId: 4 },
    ],
    tareasproyecto: null,
  };

  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //crear las funciones

  //Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        obtenerTareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
