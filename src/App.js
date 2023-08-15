
import './App.css';
import Button from '@mui/material/Button';




import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">

        <div className="middleBox">
          <header className="App-header">My Potfolio</header>
      
            <Switch>
              <Route path="/a">
              <Button variant ="contained" color="secondary" size="large">Buy</Button>
             <Button variant ="contained" color="secondary" size="large">Sell</Button>
              <Button variant ="contained" color="secondary" size="large">Portfolio</Button> 

              </Route>
            </Switch>


          
        </div>

      </div>
    </Router>

  );
}

export default App;
