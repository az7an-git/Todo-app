import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  const handleCheck = (e) => {
    const container = e.target.closest(".todo-container");
    const checkboxes = container.querySelectorAll("input[type='checkbox']");
    const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
    const message = container.querySelector(".all-done");

    if (message) {
      message.classList.toggle("hidden", !allChecked);
    }
  };

  return (
    <div className="todo-container">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onCheck={handleCheck} />
        ))}
      </ul>
      <p className="all-done hidden text-center mt-4 text-green-600 font-semibold">
        All tasks completed!
      </p>
    </div>
  );
}
