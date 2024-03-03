import "../styles/TodoItem.css";

function TodoItem({ text, completed }) {
  return (
    <li className="todo-item">
      <span className={`icon icon-check ${completed && "icon-check--active"}`}>
        V
      </span>
      <p
        className={`todo-item__paragraph ${
          completed && "todo-item__paragraph--complete"
        }`}
      >
        {text}
      </p>
      <span className="icon icon-delete">X</span>
    </li>
  );
}

export { TodoItem };
