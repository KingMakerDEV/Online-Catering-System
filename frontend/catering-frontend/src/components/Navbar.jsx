import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// No import needed for public folder assets

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo from Public Folder */}
        <Link className="navbar-brand" to="/">
          <img src="/catering_logo.png" alt="BiteBook - Book Bites, Savor Nights" className="logo-img" /> {/* Adjust 'logo.png' to your exact filename */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto for right alignment on larger screens */}
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            {user && user.role === 'ROLE_ADMIN' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/add-menu-item">Add Menu Item</Link>
              </li>
            )}
            {user ? (
              <li className="nav-item">
                <button className="btn-logout nav-link btn" onClick={logout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;