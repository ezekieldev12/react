import logo from './logo.png';
import NavBar from './componentes/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos
        </p>
    <NavBar />
        
      </header>
      
    </div>
  );
}

export default App;
