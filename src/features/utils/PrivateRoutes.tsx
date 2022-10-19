import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export const PrivateRoutes = () => {
  const context = useAuthContext();
  return context?.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
