import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Router Shop</Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Cart
          </NavLink>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <span className="user-name">Welcome, {user.name}!</span>
            </li>
          </>
        ) : (
          <li>
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;