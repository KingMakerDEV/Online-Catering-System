import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { login } from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      setUser(response.user);
      navigate(response.user.role === 'ROLE_ADMIN' ? '/admin/add-menu-item' : '/');
    } catch (err) {
      if (err.response?.status === 403 && err.response?.data?.error.includes('admin')) {
        navigate('/admin/login');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.overlay}></div>
      <div style={styles.card} className="fade-in">
        <h2 style={styles.title}>Welcome Back 🍴</h2>
        <p style={styles.subtitle}>
          Login to continue your <span style={styles.brand}>BiteBook</span> experience
        </p>

        {error && (
          <div style={styles.errorBox} className="shake">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" style={styles.button} className="glow-on-hover">
            Login
          </button>
        </form>

        <p style={styles.footerText}>
          Admin?{' '}
          <a href="/admin/login" style={styles.link}>
            Login as Admin
          </a>
        </p>
      </div>

      {/* Inline animations and background styling */}
      <style>
        {`
          .fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .shake {
            animation: shake 0.4s ease-in-out;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
          }

          .glow-on-hover:hover {
            box-shadow: 0 0 12px #ff6f61;
            transform: scale(1.04);
          }
        `}
      </style>
    </div>
  );
};

// 🎨 Styles
const styles = {
  pageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: "'Inter', sans-serif",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')", // Elegant catering background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.35)',
    backdropFilter: 'blur(2px)',
    zIndex: 1,
  },
  card: {
    position: 'relative',
    zIndex: 2,
    background: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '18px',
    padding: '40px 35px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
  },
  title: {
    fontSize: '28px',
    color: '#222',
    marginBottom: '10px',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '15px',
    color: '#444',
    marginBottom: '25px',
  },
  brand: {
    color: '#ff6f61',
    fontWeight: '600',
  },
  errorBox: {
    backgroundColor: '#ffe5e5',
    color: '#d63031',
    border: '1px solid #ffb3b3',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '15px',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  inputGroup: {
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontWeight: '600',
    fontSize: '14px',
    color: '#333',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    fontSize: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  button: {
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 0',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  footerText: {
    marginTop: '18px',
    fontSize: '14px',
    color: '#555',
  },
  link: {
    color: '#ff6f61',
    fontWeight: '600',
    textDecoration: 'none',
  },
};

export default Login;
