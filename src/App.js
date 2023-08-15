import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
       <header className="App-header">My Potfolio</header>
      <div className="butons">
      <Button variant ="contained" color="secondary" size="large">Buy</Button>
      <Button variant ="contained" color="secondary" size="large">Sell</Button>
      <Button variant ="contained" color="secondary" size="large">Portfolio</Button>
      </div>
    </div>
  );
}

export default App;
