import "../styles/TodosLoading.css";
import { defaultTodos } from "../utils/data";

const TodosLoading = () => {
  return (
    <ul className="loading-ul">
      {defaultTodos.map((todo) => (
        <li key={todo.id} className="loading-ul__li"></li>
      ))}
    </ul>
  );
};

export { TodosLoading };
