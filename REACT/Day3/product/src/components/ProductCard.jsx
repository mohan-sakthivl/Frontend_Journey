import "./ProductCard.css";
import productImage from "../assets/hp.webp";
function ProductCard() {
  return (
    <div className="product-card">
      <img src={productImage} alt="Product" />

      <h2>Wireless Headphones</h2>

      <p>₹1,999</p>

      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;