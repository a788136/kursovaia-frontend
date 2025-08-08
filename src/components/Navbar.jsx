import { useAuth } from '../contexts/AuthContext';
import LoginButton from './LoginButton';
import UserMenu from './UserMenu';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="bg-gray-100 py-4 px-8 shadow flex justify-between items-center">
      <span className="font-bold text-xl">Inventory App</span>
      <div>
        {user ? <UserMenu /> : <LoginButton />}
      </div>
    </header>
  );
}
