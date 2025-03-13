import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`} className="button">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
