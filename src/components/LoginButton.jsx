// src/components/LoginButton.jsx
import { getLoginUrl } from '../services/authService';

export default function LoginButton() {
  return (
    <a
      href={getLoginUrl()}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Войти через Google
    </a>
  );
}
