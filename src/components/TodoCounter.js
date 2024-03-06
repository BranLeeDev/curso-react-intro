import React from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "./shared/TodoContext";

function TodoCounter() {
  const { completed, total } = React.useContext(TodoContext);

  return (
    <h1 className="main-title">
      Has completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter };
