import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const [newuser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { email, password, name, confirm } = newuser;

  //Función que escucha cuando un input cambia
  const onChange = ({ target }) => {
    setNewUser({
      ...newuser,
      [target.name]: target.value,
    });
  };

  //onSubmit para guardar usuario
  const onSubmit = (e) => {
    e.preventDefault();
    //validar que no haya campos vacios

    //validar que el password sea min 6 caracteres

    //validar que el confirmas password sean los mismos

    //action para enviar los datos
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear usuario</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="text">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="name"
              value={name}
              placeholder="Tu nombre"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="passwordl"
              name="password"
              value={password}
              placeholder="Tu contraseña"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirmar password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              placeholder="Repite tu contraseña"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear cuenta"
            />
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">
          Volver a iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
