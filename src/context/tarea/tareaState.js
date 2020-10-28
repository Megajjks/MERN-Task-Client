import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { v4 as uuidv4 } from "uuid";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, name: "Elegir plataforma", status: false, proyectoId: 1 },
      { id: 2, name: "Elegir Colores", status: true, proyectoId: 2 },
      {
        id: 3,
        name: "Elegir platafornas de pago",
        status: false,
        proyectoId: 3,
      },
      { id: 4, name: "Elegirn hosting", status: true, proyectoId: 4 },
      { id: 5, name: "Elegir plataforma", status: false, proyectoId: 3 },
      { id: 6, name: "Elegir Colores", status: true, proyectoId: 2 },
      {
        id: 7,
        name: "Elegir platafornas de pago",
        status: false,
        proyectoId: 2,
      },
      { id: 8, name: "Elegirn hosting", status: true, proyectoId: 4 },
    ],
    tareasproyecto: null,
    tareaseleccionada: null,
    errortarea: false,
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

  //Agregar Tareas
  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //Validar tarea
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //eliminar tareas por id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //cambiar el estado de una tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //extrae una tarea para edicion
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //editar tarea
  const actualizatTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  //elimina la tarea seleccionada
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        tareaseleccionada: state.tareaseleccionada,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizatTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
