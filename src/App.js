
import './App.css';
import BuyPage from './Pages/BuyPage';
// Updated upstream
import api from './api/axiosConfig';
import { useState,useEffect } from 'react';

//Stashed changes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ButonsMain from './butonsMain';
import { Typography } from '@mui/material';
import BuyProcessPage from './Pages/BuyProcessPage';

import MyPortfolioPage from './Pages/myPortfolioPage';

function App() {
 
const [doviz,setDoviz]=useState();

const getDoviz=async ()=>{
  try{
  const response=await api.get("/api/v1/doviz")
  console.log(response.data);
  setDoviz(response.data);
  }
  catch(err){
      console.log(err);
  }

}
useEffect(()=> {
  getDoviz();
},[])
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
                <BuyPage/>
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
