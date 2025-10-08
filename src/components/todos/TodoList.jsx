import TodoItem from "../todos/TodoItem";

function TodoList({ todos, onToggle, categoryId }) {
  return (
    <ul className="list-none p-0 mt-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          categoryId={categoryId}
        />
      ))}
    </ul>
  );
}

export default TodoList;
