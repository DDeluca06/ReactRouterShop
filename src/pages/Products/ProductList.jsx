import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../../data/products';
import ProductCard from '../../components/ProductCard';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || 'name';
  const searchTerm = searchParams.get('q') || '';
  
  // State for the search input
  const [searchInput, setSearchInput] = useState(searchTerm);
  
  // Update input field when URL parameter changes
  useEffect(() => {
    setSearchInput(searchTerm);
  }, [searchTerm]);
  
  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else {
      // Default to sorting by name
      return a.name.localeCompare(b.name);
    }
  });
  
  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Update URL parameters while preserving existing ones
    const newParams = { ...Object.fromEntries(searchParams) };
    
    if (searchInput) {
      newParams.q = searchInput;
    } else {
      delete newParams.q; // Remove q parameter if search is empty
    }
    
    setSearchParams(newParams);
  };
  
  // Handle sort change
  const handleSortChange = (e) => {
    // Update URL parameters while preserving existing ones
    const newParams = { ...Object.fromEntries(searchParams), sort: e.target.value };
    setSearchParams(newParams);
  };
  
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>All Products</h1>
        
        {/* Search form */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
          {searchTerm && (
            <button 
              type="button" 
              className="clear-search"
              onClick={() => {
                setSearchInput('');
                const newParams = { ...Object.fromEntries(searchParams) };
                delete newParams.q;
                setSearchParams(newParams);
              }}
            >
              Clear
            </button>
          )}
        </form>
        
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
      
      {searchTerm && (
        <div className="search-results-info">
          <p>
            Showing results for: <strong>"{searchTerm}"</strong> 
            ({sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found)
          </p>
        </div>
      )}
      
      {sortedProducts.length === 0 ? (
        <div className="no-results">
          <p>No products match your search criteria.</p>
          <button 
            onClick={() => {
              setSearchInput('');
              const newParams = { ...Object.fromEntries(searchParams) };
              delete newParams.q;
              setSearchParams(newParams);
            }}
            className="button"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;