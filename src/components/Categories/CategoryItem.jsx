import TodoList from "../todos/TodoList";

function CategoryItem({ category }) {
  const handleToggle = (todoId) => {
    // todoToggleState
    const todo = category.todos.find((todo) => todo.id === todoId);
    todo.completed = !todo.completed;

    // lineThrough
    const span = document.getElementById(`todo-${category.id}-${todo.id}`);
    span.style.textDecoration = todo.completed ? "line-through" : "";

    // allTasksDone
    const allDone = category.todos.every((todo) => todo.completed);
    const msg = document.getElementById(`msg-${category.id}`);
    msg.style.display = allDone ? "block" : "";
  };

  return (
    <div
      className="bg-white border border-gray-300 rounded-xl p-5 mb-3 
                 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* categoryTitle */}
      <h2 className="text-xl font-semibold mb-3 border-b pb-2 text-sky-600 ">
        {category.name}
      </h2>

      {/* todoList */}
      <TodoList
        todos={category.todos}
        // assignedToggleHandler
        onToggle={handleToggle}
        categoryId={category.id}
      />

      {/* tasksCompleteMsg */}
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
