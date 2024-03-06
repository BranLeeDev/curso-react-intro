import React from "react";
import { defaultTodos } from "../../utils/data";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const { todosList, saveTodos, loading, error } = useLocalStorage(
    "TODOS_V1",
    defaultTodos
  );

  const [searchValue, setSearchValue] = React.useState("");

  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const completed = todosList.reduce((prevValue, currValue) => {
    if (currValue.completed) return ++prevValue;

    return prevValue;
  }, 0);

  const total = todosList.length;

  const filterTodosList = todosList.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <TodoContext.Provider
      value={{
        todosList,
        saveTodos,
        filterTodosList,
        completed,
        total,
        searchValue,
        setSearchValue,
        loading,
        error,
        isOpenModal,
        setIsOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
