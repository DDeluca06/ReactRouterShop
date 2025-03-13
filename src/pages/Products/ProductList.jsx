import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../../data/products';
import ProductCard from '../../components/ProductCard';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || 'name';
  
  // Sort products based on query parameter
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else {
      // Default to sorting by name
      return a.name.localeCompare(b.name);
    }
  });
  
  // Handle sort change
  const handleSortChange = (e) => {
    setSearchParams({ sort: e.target.value });
  };
  
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>All Products</h1>
        
        <div className="filters">
          <div className="categories">
            <span>Categories: </span>
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/products/category/${category.id}`}
                className="category-link"
              >
                {category.name}
              </Link>
            ))}
          </div>
          
          <div className="sort">
            <label htmlFor="sort">Sort by: </label>
            <select 
              id="sort" 
              value={sortBy} 
              onChange={handleSortChange}
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="products-grid">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
