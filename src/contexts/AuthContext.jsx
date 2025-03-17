import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Initialize user from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  // Update localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  
  // Simulated login function
  const login = (username, password) => {
    // For demo purposes only - in a real app, you would validate with a backend
    if (username === 'user' && password === 'password') {
      const newUser = {
        id: '1',
        username,
        name: 'Demo User',
        isAdmin: false
      };
      setUser(newUser);
      return true;
    }
    return false;
  };
  
  // Simulated logout function
  const logout = () => {
    setUser(null);
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}