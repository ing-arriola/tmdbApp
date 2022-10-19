import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './features/context/AuthContext';
import { PrivateRoutes, PublicRoutes } from './features/utils/';
import { Login, Home, Notfound, Details } from './screens/';

export const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route index element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/home">
              <Route index element={<Home />} />
              <Route path="/home/:movieId" element={<Details />} />
            </Route>
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};
