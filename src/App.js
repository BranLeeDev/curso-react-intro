import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos } from "./components/EmptyTodos";
import { TodoContext, TodoProvider } from "./components/shared/TodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({ loading, error, filterTodosList, todosList, saveTodos }) => (
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </TodoProvider>
  );
}

export default App;
