import './App.css';
import PrimaryButton from './components/primaryButton/primaryButton'
import GameInput from './components/gameInput/gameInput'
import GameList from './components/gameList/gameList'

function App() {
  return (
    <div className="App">
      <h1>Gerenciador de Progresso</h1>
      <div className="insertGame">
        <GameInput type="text" placeholder="Nome do jogo"></GameInput>
        <PrimaryButton text="Adicionar jogo" />
      </div>
      <div className="gameList">
        <GameList userId="ckj371ym60000bkva1dl11742" />
      </div>
    </div>
  );
}

export default App;
