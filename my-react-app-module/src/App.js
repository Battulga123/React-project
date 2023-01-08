import './App.css';
import MainMenu from '../src/components/MainMenu';
import Upper from './components/Upper'
import Search from './components/search'
import productSlider from './components/productSlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Upper'>
          
          <Upper/>
          <Search/>
          <MainMenu/>
          <productSlider/>
        </div>
     
      </header>
    </div>
  );
}

export default App;