const Products = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Shoes",
      price: 3000,
      category: "Fashion"
    },
    {
      id: 4,
      name: "Watch",
      price: 5000,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Backpack",
      price: 1500,
      category: "Bags"
    }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;