
import './App.css';
import Button from '@mui/material/Button';
import BuyPage from './Pages/BuyPage';
import {useHistory} from "react-router-dom"

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Deneme from './deneme';
import ButonsMain from './butonsMain';


function App() {
 

  return (
    <div className="App">
       <header className="App-header">My Potfolio</header>
    <Router>
     
      <div className="App">

        <div className="middleBox">
          <header className="App-header">My Potfolio</header>
      
            <Switch>
              <Route exact path="/">
               <ButonsMain/>
              
              </Route>
              <Route path="/buy">
                <Deneme/>
              </Route>

            </Switch>         
        </div>

      </div>
    </Router>
    </div>


  );
}

export default App;
