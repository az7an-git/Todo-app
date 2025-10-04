import { categories } from "./data/todos";
import CategoryList from "./components/CategoryList";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-10 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Todo List
      </h1>
      <CategoryList categories={categories} />
    </div>
  );
}
