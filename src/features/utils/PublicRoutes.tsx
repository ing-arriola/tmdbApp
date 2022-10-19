import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export const PublicRoutes = () => {
  const context = useAuthContext();

  return context?.isAuthenticated ? (
    <Navigate to="/home" replace />
  ) : (
    <Outlet />
  );
};
