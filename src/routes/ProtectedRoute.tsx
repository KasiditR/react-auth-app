import { Navigate } from 'react-router';
import { JSX } from 'react/jsx-runtime';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('profile');

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
