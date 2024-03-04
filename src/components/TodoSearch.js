import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");

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
