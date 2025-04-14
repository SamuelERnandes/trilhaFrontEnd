import { useNavigate, useParams } from 'react-router-dom';

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const reservar = () => {
    navigate('/success');
  };

  return (
    <div>
      <h2>Detalhes do Quarto: {id}</h2>
      <button onClick={reservar}>Reservar</button>
    </div>
  );
}
