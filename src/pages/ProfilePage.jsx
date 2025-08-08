import { useAuth } from '../contexts/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();
  if (!user) return <div>Пожалуйста, войдите.</div>;

  return (
    <div>
      <h1 className="text-xl mb-2">Профиль</h1>
      <div>Имя: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}
