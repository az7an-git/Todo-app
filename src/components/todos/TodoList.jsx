import TodoItem from "../todos/TodoItem";

function TodoList({ todos, onToggle, categoryId }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
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
