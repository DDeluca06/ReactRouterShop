import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="user-welcome">
          <h3>Welcome, {user.name}!</h3>
        </div>
        
        <nav className="dashboard-nav">
          <ul>
            <li>
              <Link 
                to="/dashboard" 
                className={isActive('/dashboard') ? 'active' : ''}
                end
              >
                Dashboard Home
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/orders" 
                className={isActive('/dashboard/orders') ? 'active' : ''}
              >
                Order History
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/profile" 
                className={isActive('/dashboard/profile') ? 'active' : ''}
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
        {/* Forgot to close your aside bracket! */}
      </aside>
      
      <main className="dashboard-content">
        {/* This is where nested routes will render */}
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
