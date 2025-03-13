import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  // Get the page they were trying to visit before being redirected to login
  const from = location.state?.from?.pathname || '/dashboard';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const success = login(username, password);
    
    if (success) {
      // Redirect to the page they were trying to access or dashboard
      navigate(from, { replace: true });
    } else {
      setError('Invalid username or password');
    }
  };
  
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
        <div className="login-help">
          <p>For demo purposes, use:</p>
          <p>Username: user</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  );
}

export default Login;