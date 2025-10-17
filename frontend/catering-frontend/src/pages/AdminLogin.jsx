import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { adminLogin } from '../services/api';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log('🔐 Logging in with:', { email, password });
      
      const response = await adminLogin({ email, password });
      console.log('✅ ADMIN LOGIN SUCCESS:', response);
      
      setUser(response.user);
      
      console.log('🎉 ADMIN STORED:', {
        role: response.user.role,
        token: localStorage.getItem('token')?.substring(0, 20) + '...'
      });
      
      // ✅ FIXED: Go to DASHBOARD first
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('❌ ADMIN LOGIN ERROR:', error.response?.status, error.message);
      setError(error.response?.data?.message || 'Admin login failed');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        Not an admin? <a href="/login">Login as User</a>
      </p>
    </div>
  );
};

export default AdminLogin;