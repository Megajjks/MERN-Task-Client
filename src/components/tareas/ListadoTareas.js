import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { name: "Elegir plataforma", status: false },
    { name: "Elegir Colores", status: true },
    { name: "Elegir platafornas de pago", status: false },
    { name: "Elegirn hosting", status: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtuak</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas por el momento</p>
          </li>
        ) : (
          tareasProyecto.map((tarea, idx) => <Tarea key={idx} tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
