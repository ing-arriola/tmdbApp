import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './features/utils/PrivateRoutes';
import { Login, Home, Notfound, Details } from './screens/';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home">
            <Route index element={<Home />} />
            <Route path="/home/:movieId" element={<Details />} />
          </Route>
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
