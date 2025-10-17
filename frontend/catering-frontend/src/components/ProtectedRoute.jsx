import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, requireRole }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="text-center">Loading...</div>;

  if (!user) {
    console.log('🚫 NO USER - Redirect to /login');
    return <Navigate to="/login" />;
  }

  // ✅ FIXED: Handle BOTH "ROLE_ADMIN" AND "ADMIN"
  const hasRole = requireRole && (
    user.role === requireRole || 
    user.role === requireRole.replace('ROLE_', '')
  );

  if (requireRole && !hasRole) {
    console.log('🚫 WRONG ROLE:', user.role, '≠', requireRole, '- Redirect to /login');
    return <Navigate to="/login" />;
  }

  console.log('✅ ACCESS GRANTED:', user.role);
  return children;
};

export default ProtectedRoute;