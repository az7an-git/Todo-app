import { categories } from "./data/todos";
import CategoryList from "./components/Categories/CategoryList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
          Todo App
        </h1>
      </header>

      <main className="max-w-5xl px-2">
        <CategoryList categories={categories} />
      </main>
    </div>
  );
}

export default App;
