import { useState } from 'react';

type SaudacaoProps = {
  nomeInicial: string;
};

export default function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState(nomeInicial);
  const [novoNome, setNovoNome] = useState('');

  const atualizarNome = () => {
    if (novoNome.trim() !== '') {
      setNome(novoNome);
      setNovoNome('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Olá, {nome}!</h2>
      <input
        type="text"
        placeholder="Digite um novo nome"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />
      <button onClick={atualizarNome}>Atualizar nome</button>
    </div>
  );
}
