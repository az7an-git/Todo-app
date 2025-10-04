import CategoryItem from "./CategoryItem";

export default function CategoryList({ categories }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
