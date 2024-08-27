import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Layout } from '../components/Layout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
