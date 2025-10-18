import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import AddMenuItem from './components/AddMenuItem';
import './styles/index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute requireRole="ROLE_ADMIN">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">🛠️ Admin Dashboard</h1>
                    <a href="/admin/add-menu-item" className="btn btn-primary mr-2">➕ Add Menu Item</a>
                    <a href="/menu" className="btn btn-secondary">👁️ View Menu</a>
                  </div>
                </ProtectedRoute>
              } />
              <Route path="/admin/add-menu-item" element={
                <ProtectedRoute requireRole="ROLE_ADMIN">
                  <AddMenuItem />
                </ProtectedRoute>
              } />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
