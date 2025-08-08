// src/components/UserMenu.jsx
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LogoutButton from './LogoutButton';

export default function UserMenu() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2"
        onClick={() => setOpen((v) => !v)}
      >
        <img
          src={user.avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">{user.name}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded p-2 z-10 min-w-[180px]">
          <div className="mb-2">{user.email}</div>
          <LogoutButton />
        </div>
      )}
    </div>
  );
}
