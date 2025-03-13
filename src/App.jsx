import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import ProductList from './pages/Products/ProductList';
import CategoryProducts from './pages/Products/CategoryProducts';
import ProductDetail from './pages/Products/ProductDetail';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route index element={<Home />} />
          
          {/* Product routes */}
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<ProductDetail />} />
            <Route path="category/:categoryId" element={<CategoryProducts />} />
          </Route>
          
          {/* Auth routes */}
          <Route path="login" element={<Login />} />
          
          {/* Protected routes */}
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
