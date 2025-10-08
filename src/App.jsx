import { categories } from "./data/todos";
import CategoryList from "./components/Categories/CategoryList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans ">
      <header className="text-center py-5">
        <h1 className="text-3xl md:text-5xl font-bold text-sky-500">
          Todo App
        </h1>
      </header>

      <main className="max-w-6xl">
        <CategoryList categories={categories} />
      </main>
    </div>
  );
}

export default App;
