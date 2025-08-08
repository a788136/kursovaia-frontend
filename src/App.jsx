import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import { AuthProvider } from './contexts/AuthContext'; // <-- Должен быть импорт
import AllInventories from './pages/AllInventories'; 
import CreateInventory from './pages/CreateInventory'; 

export default function App() {
  return (
    <AuthProvider>   {/* Оборачиваем всё приложение */}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/inventories" element={<AllInventories />} />
            <Route path="/inventories/new" element={<CreateInventory />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

