import TodoList from "../todos/TodoList";

function CategoryItem({ category }) {
  const handleToggle = (todoId) => {
    // todo toggle
    const todo = category.todos.find((t) => t.id === todoId);
    todo.completed = !todo.completed;

    // linethrough conditonal
    const span = document.getElementById(`todo-${category.id}-${todo.id}`);
    span.style.textDecoration = todo.completed ? "line-through" : "none";

    // Checking tasks done
    const allDone = category.todos.every((t) => t.completed);
    const msg = document.getElementById(`msg-${category.id}`);
    msg.style.display = allDone ? "block" : "none";
  };

  return (
    <div className="border-1 border-[#ddd] rounded p-15 mb-[20px]">
      <h2>{category.name}</h2>

      {/* Todo list */}
      <TodoList
        todos={category.todos}
        onToggle={handleToggle}
        categoryId={category.id}
      />

      {/* Message after task complete */}
      <p
        id={`msg-${category.id}`}
        className="text-green-500 font-bold mt-[10px] hidden"
      >
        All tasks done!
      </p>
    </div>
  );
}

export default CategoryItem;
