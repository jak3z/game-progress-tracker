
import GlobalStyle, { InsertGame } from './styles'
import PrimaryButton from './components/primaryButton/'
import GameInput from './components/gameInput/gameInput'
import GameList from './components/gameList/gameList'
import Profile from './components/profile'
import Modal from './components/modal'

function App() {
  return (
    <>
      <header className="header">
        <h1 className="logo">GMT</h1>
        <ul className="main-nav">
          <li>
            <Profile />
          </li>
        </ul>
      </header>
      <div className="App">
        <GlobalStyle />
        <h1>Gerenciador de Progresso</h1>
        <InsertGame>
          <GameInput type="text" placeholder="Nome do jogo"></GameInput>
          <PrimaryButton text="Adicionar jogo" />
        </InsertGame>
        <div className="gameList">
          <GameList userId="ckj371ym60000bkva1dl11742" />
        </div>
      </div>
    </>
  );
}

export default App;
