import { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, { ...product, variant: selectedVariant }]);
    alert("Product added to cart!");
  };

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <p>Available: {product.available ? "In Stock" : "Out of Stock"}</p>
      <label>Choose Variant:</label>
      <select onChange={(e) => setSelectedVariant(e.target.value)}>
        {product.variants.map((variant) => (
          <option key={variant} value={variant}>
            {variant}
          </option>
        ))}
      </select>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
