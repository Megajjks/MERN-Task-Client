import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";

const NuevoProyecto = () => {
  //obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  const [proyecto, setProyecto] = useState({
    name: "",
  });

  //onChange para llenar los datos del input con el del state
  const onChangeProyecto = ({ target }) => {
    setProyecto({
      ...proyecto,
      [target.name]: target.value,
    });
  };

  //cuando el usuario envie un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar el proyecto
    if (name === "") {
      mostrarError();
      return;
    }

    //agregar el state
    agregarProyecto(proyecto);

    //Reiniciar el form
    setProyecto({ name: "" });
  };

  const { name } = proyecto;

  return (
    <Fragment>
      <button
        onClick={mostrarFormulario}
        type="button"
        className="btn btn-block btn-primario"
      >
        Nuevo Proyecto
      </button>
      {formulario && (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del proyecto"
            name="name"
            value={name}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      )}

      {errorformulario && (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      )}
    </Fragment>
  );
};

export default NuevoProyecto;
