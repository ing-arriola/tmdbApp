import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './features/utils/PrivateRoutes';
import { Login, Home, Notfound, Details } from './screens/';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":movieId" element={<Details />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
