import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin, login } from '../services/api'; // ✅ REMOVED getCurrentUser

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    // ✅ FIXED: Use localStorage user INSTEAD of API call
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, [navigate]);

  const handleLogin = async (credentials, isAdmin = false) => {
    try {
      const response = isAdmin ? await adminLogin(credentials) : await login(credentials);
      
      // ✅ FIXED: Store USER in localStorage TOO
      localStorage.setItem('user', JSON.stringify(response.user));
      setUser(response.user);
      
      navigate(response.user.role === 'ROLE_ADMIN' ? '/admin/dashboard' : '/');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login: handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};