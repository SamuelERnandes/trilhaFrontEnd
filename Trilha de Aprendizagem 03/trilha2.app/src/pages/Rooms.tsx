import { Link } from 'react-router-dom';

const mockQuartos = [
  { id: '101', nome: 'Quarto Luxo' },
  { id: '102', nome: 'Quarto Simples' },
  { id: '103', nome: 'Suíte Master' },
];

export default function Rooms() {
  return (
    <div>
      <h2>Lista de Quartos</h2>
      <ul>
        {mockQuartos.map((quarto) => (
          <li key={quarto.id}>
            <Link to={`/rooms/${quarto.id}`}>{quarto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
