import { categories } from "./data/todos";
import CategoryList from "./components/Categories/CategoryList";

function App() {
  return (
    <div className="font-sans  ">
      <h1 className="p-[20px] text-4xl text-blue-700">Todo App</h1>
      <CategoryList categories={categories} />
    </div>
  );
}

export default App;
