import "../App.css";

export default function TodoItem({ todo }) {
  const handleCheck = (e) => {
    const checkbox = e.target;
    const li = checkbox.closest("li");

    if (checkbox.checked) {
      li.classList.add(
        "line-through",
        "opacity-60",
        "bg-green-50",
        "border-green-200"
      );
      li.querySelector(".check").classList.remove("hidden");
    } else {
      li.classList.remove(
        "line-through",
        "opacity-60",
        "bg-green-50",
        "border-green-200"
      );
      li.querySelector(".check").classList.add("hidden");
    }

    // All Tasks Done?
    const list = li.closest("ul");
    const all = Array.from(list.querySelectorAll("input[type='checkbox']"));
    const allDone = all.every((input) => input.checked);

    const msg = list.nextElementSibling;
    msg.style.display = allDone ? "block" : "none";
  };

  return (
    <li
      className={`flex items-center justify-between gap-3 px-4 py-3 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300
        ${
          todo.completed
            ? "bg-green-50 border-green-200 line-through opacity-60"
            : "bg-white border-gray-200"
        }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={handleCheck}
          className="w-5 h-5 accent-green-600 cursor-pointer"
        />

        <span className="text-gray-700">{todo.text}</span>
      </div>
      <span className="check hidden text-green-500 font-bold text-xl"></span>
    </li>
  );
}
