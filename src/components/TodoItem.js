import "../styles/TodoItem.css";

function TodoItem({ id, text, completed, todosList, setTodosList }) {
  const removeTodo = () => {
    const newTodosList = todosList.filter((todo) => todo.id !== id);
    setTodosList(newTodosList);
  };

  const checkTodo = () => {
    const newTodosList = todosList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    setTodosList(newTodosList);
  };

  return (
    <li className="todo-item">
      <button
        className={`icon icon-check ${completed && "icon-check--active"}`}
        onClick={checkTodo}
      >
        <i class="bx bx-check"></i>
      </button>
      <p
        className={`todo-item__paragraph ${
          completed && "todo-item__paragraph--complete"
        }`}
      >
        {text}
      </p>
      <button className="icon icon-delete" onClick={removeTodo}>
        <i class="bx bx-x"></i>
      </button>
    </li>
  );
}

export { TodoItem };
