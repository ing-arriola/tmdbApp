import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Notfound, Details } from './screens/';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":movieId" element={<Details />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
