// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const backend = 'https://kursovaia-backend.onrender.com';

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`${backend}/auth/me`, {
          credentials: 'include', // ОБЯЗАТЕЛЬНО для куки
        });
        if (!res.ok) throw new Error('unauthorized');
        const data = await res.json();
        if (!cancelled) setUser(data.user);
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const loginUrl = `${backend}/auth/google`;

  async function logout() {
    try {
      await fetch(`${backend}/auth/logout`, {
        credentials: 'include',
      });
    } finally {
      setUser(null);
    }
  }

  const value = useMemo(
    () => ({ user, setUser, loading, loginUrl, logout }),
    [user, loading, loginUrl]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
