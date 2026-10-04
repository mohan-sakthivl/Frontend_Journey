const Products = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
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
      name: "Backpack",
      price: 1500,
      category: "Accessories"
    }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;