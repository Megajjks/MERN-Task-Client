import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
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

    //agregar el state

    //Reiniciar el form
  };

  const { name } = proyecto;

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
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
    </Fragment>
  );
};

export default NuevoProyecto;
