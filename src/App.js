import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  {
    id: 1,
    text: "Aprender Express.js",
    completed: true,
  },
  {
    id: 2,
    text: "Aprender los principios SOLID",
    completed: false,
  },
  {
    id: 3,
    text: "Aprender el termino ACID",
    completed: false,
  },
  {
    id: 4,
    text: "Aprender Next.js",
    completed: false,
  },
];

function App() {
  const [todosList, setTodosList] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completed = todosList.reduce((prevValue, currValue) => {
    if (currValue.completed) return ++prevValue;

    return prevValue;
  }, 0);

  const total = todosList.length;

  const filterTodosList = todosList.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <TodoCounter completed={completed} total={total} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {filterTodosList.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
