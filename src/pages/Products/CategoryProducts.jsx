import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory, categories } from '../../data/products';
import ProductCard from '../../components/ProductCard';

function CategoryProducts() {
  const { categoryId } = useParams();
  const products = getProductsByCategory(categoryId);
  
  // Find the category name
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="error-container">
        <h2>Category Not Found</h2>
        <p>Sorry, the category you're looking for doesn't exist.</p>
        <Link to="/products" className="button">
          Back to All Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="category-products">
      <div className="category-header">
        <h1>{category.name}</h1>
        <Link to="/products" className="back-link">
          &larr; Back to All Products
        </Link>
      </div>
      
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryProducts;
