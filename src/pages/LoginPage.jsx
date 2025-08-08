import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const { login } = useAuth();
  return (
    <div style={{ display:'grid', placeItems:'center', minHeight:'60vh' }}>
      <button onClick={login}>Войти через Google</button>
    </div>
  );
}
