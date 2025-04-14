import './App.css';
import Contador from './components/contador';
import Saudacao from './components/saudacao';
import ListaTarefas from './ListaTarefas';
import ToggleVisibilidade from './ToggleVisibilidade';

function App() {
  return (
    <>
      <h1>Exercício: Contador Simples</h1>
      <Contador valorInicial={0} />

      <h1>Exercício: Saudação Personalizada</h1>
      <Saudacao nomeInicial="João" />

      <h1>Exercício: Lista de Tarefas</h1>
      <ListaTarefas tarefasIniciais={['Estudar React', 'Beber água']} />

      <h1>Exercício: Controle de Visibilidade</h1>
      <ToggleVisibilidade texto="Este é o conteúdo oculto que pode ser exibido." />
    </>
  );
}

export default App;
