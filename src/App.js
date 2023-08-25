// App.js
import "./App.css"; // App.js içinde CSS dosyasını içe aktarıyorsunuz

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Typography } from "@mui/material";
import BuyPage from "./Pages/BuyPage";
import api from "./api/axiosConfig";
import ButonsMain from "./butonsMain";
import BuyProcessPage from "./Pages/BuyProcessPage";
import MyPortfolioPage from "./Pages/myPortfolioPage";

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
            <Route path="/sell">
              <BuyPage />
            </Route>
            <Route path="/buying">
              <BuyProcessPage />
            </Route>
            <Route path="/portfolio">
              {/* Doviz verilerini MyPortfolioPage'e iletiyoruz */}
              <MyPortfolioPage doviz={doviz} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
