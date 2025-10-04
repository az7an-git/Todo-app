import TodoList from "./TodoList";

function CategoryItem({ category }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border border-slate-200 delay-100">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
        <span className="inline-block w-3 h-3 bg-blue-600 rounded-full"></span>
        {category.name}
      </h2>
      <TodoList todos={category.todos} />
    </div>
  );
}

export default CategoryItem;
