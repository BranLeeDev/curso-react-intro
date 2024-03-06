import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos } from "./components/EmptyTodos";

export const defaultTodos = [
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
  const { todosList, saveTodos, loading, error } = useLocalStorage(
    "TODOS_V1",
    defaultTodos
  );

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
        {loading ? (
          <TodosLoading />
        ) : error ? (
          <TodosError />
        ) : filterTodosList.length === 0 && loading ? (
          <EmptyTodos />
        ) : (
          filterTodosList.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              todosList={todosList}
              saveTodos={saveTodos}
            />
          ))
        )}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
