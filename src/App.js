import "./App.css";
import BuyPage from "./Pages/BuyPage";
// Updated upstream
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
//import express from 'express';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ButonsMain from "./butonsMain";
import { Typography } from "@mui/material";
import BuyProcessPage from "./Pages/BuyProcessPage";

function App() {
  const [doviz, setDoviz] = useState();

  const getDoviz = async () => {
    try {
      const response = await api.get("/api/v1/doviz");
      console.log(response.data);
      setDoviz(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDoviz();
  }, []);
  return (
    <div className="App">
      <Typography variant="h1" color="">
        My Portfolio
      </Typography>
      <Router>
        <div className="middleBox">
          <Switch>
            <Route exact path="/">
              <ButonsMain />
            </Route>

            <Route path="/sell">
              <BuyPage />
            </Route>

            <Route path="/buying">
              <BuyProcessPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    /*<Route path="/buying">
 <BuyPage />
</Route>*/
    
  );
}

export default App;
