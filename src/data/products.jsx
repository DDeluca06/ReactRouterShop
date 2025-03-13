export const products = [
    {
      id: '1',
      name: 'Wireless Headphones',
      category: 'electronics',
      price: 59.99,
      image: 'https://placehold.co/300x200?text=Headphones',
      description: 'High-quality wireless headphones with noise cancellation.'
    },
    {
      id: '2',
      name: 'Smartphone',
      category: 'electronics',
      price: 699.99,
      image: 'https://placehold.co/300x200?text=Smartphone',
      description: 'Latest smartphone with advanced camera and long battery life.'
    },
    {
      id: '3',
      name: 'Cotton T-Shirt',
      category: 'clothing',
      price: 19.99,
      image: 'https://placehold.co/300x200?text=T-Shirt',
      description: 'Comfortable 100% cotton t-shirt in various colors.'
    },
    {
      id: '4',
      name: 'Jeans',
      category: 'clothing',
      price: 49.99,
      image: 'https://placehold.co/300x200?text=Jeans',
      description: 'Classic fit jeans with durable denim material.'
    },
    {
      id: '5',
      name: 'Mystery Novel',
      category: 'books',
      price: 12.99,
      image: 'https://placehold.co/300x200?text=Book',
      description: 'Bestselling mystery novel with unexpected twists.'
    },
    {
      id: '6',
      name: 'Cookbook',
      category: 'books',
      price: 24.99,
      image: 'https://placehold.co/300x200?text=Cookbook',
      description: 'Collection of recipes from around the world.'
    }
  ];
  
  export const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'books', name: 'Books' }
  ];
  
  // Filter the array of products by category
  export function getProductsByCategory(categoryId) {
    return products.filter(product => product.category === categoryId);
  }
  
  // Search the array for a product by id
  export function getProductById(productId) {
    return products.find(product => product.id === productId);
  }
  