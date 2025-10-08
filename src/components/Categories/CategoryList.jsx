import CategoryItem from "./CategoryItem";

function CategoryList({ categories }) {
  return (
    <div>
      {categories.map((cat) => (
        <CategoryItem key={cat.id} category={cat} />
      ))}
    </div>
  );
}

export default CategoryList;
