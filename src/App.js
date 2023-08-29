// App.js
import "./App.css"; // App.js içinde CSS dosyasını içe aktarıyorsunuz

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Typography } from "@mui/material";

import api from "./api/axiosConfig";
import ButonsMain from "./butonsMain";

import MyPortfolioPage from "./Pages/myPortfolioPage";
import BuyingProcesses from "./Pages/BuyingProcesses";
import ProfitProcesses from "./Pages/ProfitProcesses";

function App() {
  const [doviz, setDoviz] = useState([]);

  useEffect(() => {
    const getDoviz = async () => {
      try {
        const response = await api.get("/api/v1/doviz");
        setDoviz(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getDoviz();
  }, []);

  return (
    <div className="App">
      <Typography variant="h1">My Portfolio</Typography>
      <Router>
        <div className="middleBox">
          <Switch>
            <Route exact path="/">
              <ButonsMain />
              
            </Route>
            <Route path="/instantPrices">
              <ProfitProcesses />
    
            <Route path="/enterValue">
             <h1>enter value</h1>

            </Route>
            <Route path="/buying">
              <BuyingProcesses />
        
            <Route path="/add">
            <BuyingProcesses />

            </Route>
            <Route path="/portfolio">
            
              <MyPortfolioPage doviz={doviz} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
