import "./App.css";
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
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
