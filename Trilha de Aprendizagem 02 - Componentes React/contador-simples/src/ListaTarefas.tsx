import { useState } from 'react';

type ListaTarefasProps = {
  tarefasIniciais: string[];
};

export default function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
