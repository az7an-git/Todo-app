import TodoList from "../todos/TodoList";

function CategoryItem({ category }) {
  const handleToggle = (todoId) => {
    // Toggle todo state
    const todo = category.todos.find((todo) => todo.id === todoId);
    todo.completed = !todo.completed;

    // Apply or remove line-through
    const span = document.getElementById(`todo-${category.id}-${todo.id}`);
    span.style.textDecoration = todo.completed ? "line-through" : "";

    // Check if all tasks are done
    const allDone = category.todos.every((todo) => todo.completed);
    const msg = document.getElementById(`msg-${category.id}`);
    msg.style.display = allDone ? "block" : "";
  };

  return (
    <div
      className="bg-white border border-gray-300 rounded-xl p-5 mb-4 
                 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Category Title */}
      <h2 className="text-xl font-semibold mb-3 border-b pb-1">
        {category.name}
      </h2>

      {/* Todo list */}
      <TodoList
        todos={category.todos}
        onToggle={handleToggle}
        categoryId={category.id}
      />

      {/* Message after all tasks complete */}
      <p
        id={`msg-${category.id}`}
        className="text-green-600 font-semibold mt-4 hidden"
      >
        All tasks completed!
      </p>
    </div>
  );
}

export default CategoryItem;
