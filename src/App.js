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
import ProfitPage from "./Pages/ProfitPage";

function App() {
  const [doviz, setDoviz] = useState([]);
  const [altin, setAltin] = useState([]);
  const [profit, setProfit] = useState([]);

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
    const getAltin = async () => {
      try {
        const response = await api.get("/api/v1/altin");
        setAltin(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAltin();
    const getProfit = async () => {
      try {
        const response = await api.get("/api/v1/profit");
        setProfit(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProfit();
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
            <Route path="/instancePrices">
              <ProfitProcesses />
            </Route>
            <Route path="/add">
              <BuyingProcesses />
            </Route>
            <Route path="/portfolio">
              <MyPortfolioPage data={{ altin, doviz }} />
            </Route>
            <Route path="/profitTable">
              <ProfitPage data={{ profit }} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
