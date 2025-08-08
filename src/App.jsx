// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AllInventories from './pages/AllInventories';
import CreateInventory from './pages/CreateInventory';

/**
 * Обёртка для приватных роутов.
 * Показывает контент только если user есть.
 * Иначе — перебрасывает на /login.
 */
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    // Можно заменить на свой лоадер/скелетон
    return <div style={{ padding: 24 }}>Загрузка...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Публичные */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/inventories" element={<AllInventories />} />

            {/* Приватные */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/inventories/new"
              element={
                <ProtectedRoute>
                  <CreateInventory />
                </ProtectedRoute>
              }
            />

            {/* 404 — в самом конце */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}
