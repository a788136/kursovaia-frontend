// src/components/LogoutButton.jsx
import { logout } from '../services/authService';
import { useAuth } from '../contexts/AuthContext';

export default function LogoutButton() {
  const { setUser } = useAuth();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    window.location.reload();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-1 text-sm text-red-500 hover:underline"
    >
      Выйти
    </button>
  );
}
