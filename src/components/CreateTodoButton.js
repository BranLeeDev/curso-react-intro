import React from "react";
import "../styles/CreateTodoButton.css";
import { TodoContext } from "./shared/TodoContext";

const CreateTodoButton = () => {
  const { isOpenModal, setIsOpenModal } = React.useContext(TodoContext);

  const createNewTask = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <button className="create-todo-button" onClick={createNewTask}>
      +
    </button>
  );
};

export { CreateTodoButton };
