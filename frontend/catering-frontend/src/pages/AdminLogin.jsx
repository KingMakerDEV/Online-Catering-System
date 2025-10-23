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
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('❌ ADMIN LOGIN ERROR:', error.response?.status, error.message);
      setError(error.response?.data?.message || 'Admin login failed');
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      background: "url('https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backdropFilter: 'blur(5px)'
    }}>
      <style>{`
        .admin-login-card {
          background: rgba(0, 0, 0, 0.75);
          padding: 2.5rem 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
          width: 380px;
          animation: fadeIn 1s ease forwards;
        }
        .admin-login-title {
          color: #fff;
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          font-weight: 600;
        }
        .admin-login-form .form-group {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }
        .admin-login-form label {
          color: #ddd;
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
        }
        .admin-login-form input {
          padding: 0.75rem;
          border-radius: 8px;
          border: none;
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .admin-login-form input:focus {
          outline: none;
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.02);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }
        .admin-btn {
          width: 100%;
          padding: 0.8rem;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #ff7b00, #ff4500);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .admin-btn:hover {
          background: linear-gradient(135deg, #ff944d, #ff5500);
          transform: scale(1.05);
        }
        .alert {
          background-color: rgba(255, 80, 80, 0.15);
          color: #ff5c5c;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          text-align: center;
        }
        .switch-link {
          margin-top: 1rem;
          text-align: center;
          color: #ccc;
        }
        .switch-link a {
          color: #ff944d;
          text-decoration: none;
        }
        .switch-link a:hover {
          text-decoration: underline;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="admin-login-card">
        <h2 className="admin-login-title">👨‍💼 Admin Login</h2>
        {error && <div className="alert">{error}</div>}
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your admin email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="admin-btn">Login</button>
        </form>
        <p className="switch-link">
          Not an admin? <a href="/login">Login as User</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
