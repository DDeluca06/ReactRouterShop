import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="user-info">
        <h2>Welcome, {user.name}!</h2>
        <p>This is your personal dashboard.</p>
      </div>
      
      <div className="dashboard-actions">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
