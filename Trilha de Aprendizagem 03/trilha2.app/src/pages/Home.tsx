import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Bem-vindo à Home!</h2>
      <button onClick={() => navigate('/about')}>Ir para Sobre</button>
    </div>
  );
}
