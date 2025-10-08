function TodoItem({ todo, onToggle, categoryId }) {
  return (
    <li
      className="flex items-center justify-between gap-3 bg-gray-100 hover:bg-gray-200 transition-colors 
                 p-3 rounded-lg shadow-sm mb-2"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id={`check-${categoryId}-${todo.id}`}
          defaultChecked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="size-4 accent-blue-600 cursor-pointer"
        />

        <span id={`todo-${categoryId}-${todo.id}`}>{todo.text}</span>
      </div>
    </li>
  );
}

export default TodoItem;
