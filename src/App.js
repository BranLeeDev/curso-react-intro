import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  {
    text: "Aprender Express.js",
    completed: true,
  },
  {
    text: "Aprender los principios SOLID",
    completed: false,
  },
  {
    text: "Aprender el termino ACID",
    completed: false,
  },
  {
    text: "Aprender Next.js",
    completed: false,
  },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
