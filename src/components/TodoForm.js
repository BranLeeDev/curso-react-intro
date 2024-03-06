import React from "react";
import "../styles/TodoForm.css";
import { TodoContext } from "./shared/TodoContext";

const TodoForm = () => {
  const { addTodo, setIsOpenModal } = React.useContext(TodoContext);
  const [valueTextarea, setValueTextarea] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    addTodo(valueTextarea);
    setIsOpenModal(false);
  };

  const onCancel = () => {
    setIsOpenModal(false);
  };

  const onChange = (event) => {
    setValueTextarea(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <label className="todo-form__label">Escribe un nuevo TODO</label>
      <textarea
        placeholder="Aprender la nueva versión de Angular"
        className="todo-form__textarea"
        value={valueTextarea}
        onChange={onChange}
      ></textarea>
      <div className="todo-form__button-container">
        <button
          className="todo-form__button todo-form__button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="todo-form__button todo-form__button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
