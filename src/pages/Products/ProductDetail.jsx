import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../data/products';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const product = getProductById(productId);
  
  // Handle case when product is not found
  if (!product) {
    return (
      <div className="error-container">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/products')}
          className="button"
        >
          Back to Products
        </button>
      </div>
    );
  }
  
  return (
    <div className="product-detail">
      <button 
        onClick={() => navigate(-1)}
        className="back-button"
      >
        &larr; Back
      </button>
      
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          
          <button className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;