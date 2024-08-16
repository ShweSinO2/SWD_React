export default function App() {
  const ttl = "Product Categories";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  return (
    <div id="category-section" className="p-5">
      <p className="text-2xl text-gray-2500 mb-3">{ttl}</p>
      <div>
        {categories.map(category => (
          <button className="border border-black px-4 py-2 me-2">{category}</button>
        ))}
      </div>
    </div>
  );
}