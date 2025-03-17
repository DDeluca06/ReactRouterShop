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
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

// Dashboard Pages
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome';
import OrderHistory from './pages/Dashboard/OrderHistory';
import UserProfile from './pages/Dashboard/UserProfile';

function App() {
  return (<AuthProvider>
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* Public routes */}
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />

      {/* Product routes */}
      <Route path="products">
        <Route index element={<ProductList />} />
        <Route path=":productId" element={<ProductDetail />} />
        <Route path="category/:categoryId" element={<CategoryProducts />} />
      </Route>

      {/* Auth routes */}
      <Route path="login" element={<Login />} />

      {/* Protected dashboard routes with nested routes */}
      <Route
        path="dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="orders" element={<OrderHistory />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
    </Route>
    </Routes>
  </AuthProvider>
  );
}

export default App;