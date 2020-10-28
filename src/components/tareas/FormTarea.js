import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import tareaContext from "../../context/tarea/tareaContext";

const FormTarea = () => {
  //obtener el state del context
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener el context de tareas
  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizatTarea,
    limpiarTarea,
  } = tareasContext;

  //effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      setTarea(tareaseleccionada);
    } else {
      setTarea({ name: "" });
    }
  }, [tareaseleccionada]);

  //State del formulario
  const [tarea, setTarea] = useState({
    name: "",
  });

  //Si no hay proyecto seleccionado
  if (!proyecto) return null;
  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //leer los valores de cada campo del form
  const handleChange = ({ target }) => {
    setTarea({
      ...tarea,
      [target.name]: target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validar
    if (tarea.name.trim() === "") {
      validarTarea();
      return;
    }

    // revisar si es una tarea para editar o una nueva
    if (tareaseleccionada === null) {
      // agregar la nueva tarea al state de tarea
      tarea.proyectoId = proyectoActual.id;
      tarea.status = false;
      agregarTarea(tarea);
    } else {
      //Actualizo la tarea
      actualizatTarea(tarea);
      //Elimina tarea seleccionada
      limpiarTarea();
    }

    //obtener y filtrar las tareas del proyecto para actualizarlo
    obtenerTareas(proyectoActual.id);

    // reiniciar el form tarea
    setTarea({ name: "" });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="name"
            value={tarea.name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea && (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      )}
    </div>
  );
};

export default FormTarea;
