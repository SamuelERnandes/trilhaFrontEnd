import { useState } from 'react';

type ToggleVisibilidadeProps = {
  texto: string;
};

export default function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
  const [visivel, setVisivel] = useState(false);

  const alternar = () => setVisivel(!visivel);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={alternar}>{visivel ? 'Ocultar' : 'Mostrar'}</button>
      {visivel && <p>{texto}</p>}
    </div>
  );
}
