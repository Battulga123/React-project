import './App.css';
import MainMenu from './components/MainMenu';
import Upper from './components/Upper'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Upper'>
          <Upper/>
          <MainMenu/>
        </div>
     
      </header>
    </div>
  );
}

export default App;