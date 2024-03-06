import React from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "./shared/TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      className="todo-search"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      type="text"
      placeholder="Cortar cebolla"
    />
  );
};

export { TodoSearch };
