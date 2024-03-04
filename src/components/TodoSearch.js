import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
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
