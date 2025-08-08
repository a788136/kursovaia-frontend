// src/services/authService.js
const API = import.meta.env.VITE_API_URL || '';

export async function fetchMe() {
  const res = await fetch(`${API}/auth/me`, { credentials: 'include' });
  if (!res.ok) return null;
  return res.json();
}

export function getLoginUrl() {
  return `${API}/auth/google`;
}

export async function logout() {
  const res = await fetch(`${API}/auth/logout`, { credentials: 'include' });
  return res.ok;
}
