
import './App.css';
import BuyPage from './Pages/BuyPage';
// Updated upstream



//Stashed changes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ButonsMain from './butonsMain';
import { Typography } from '@mui/material';
import BuyProcessPage from './Pages/BuyProcessPage';

import MyPortfolioPage from './Pages/myPortfolioPage';

function App() {
 

  return (
    <div className="App">

     <Typography variant='h1'color=''>My Portfolio</Typography>
    <Router>

        <div className="middleBox">
         
            <Switch>
              <Route exact path="/">
               <ButonsMain/>
              
              </Route>
              <Route path="/buy">
                <BuyPage/>
               </Route>

              <Route path="/sell">
                <SellPage/>
              </Route>

              <Route path="/buying">
                <BuyProcessPage/>
              </Route>


            </Switch>         
        </div>

   
    </Router>
    </div>
   
//Updated upstream

 
// Stashed changes

  );
}

export default App;
