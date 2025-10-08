function TodoItem({ todo, onToggle, categoryId }) {
  return (
    <li className="flex items-center gap-4">
      <input
        type="checkbox"
        id={`check-${categoryId}-${todo.id}`}
        defaultChecked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span
        id={`todo-${categoryId}-${todo.id}`}
        className={todo.completed ? "line-through" : ""}
      >
        {todo.text}
      </span>
    </li>
  );
}

export default TodoItem;
