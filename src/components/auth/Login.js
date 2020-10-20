import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  //Función que escucha cuando un input cambia
  const onChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  //onSubmit cuando se quiera iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();
    //validar que no haya campos vacios

    //action para enviar los datos
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to="/nueva-cuenta" className="enlace-cuenta">
          Crear una cuenta nueva
        </Link>
      </div>
    </div>
  );
};

export default Login;
