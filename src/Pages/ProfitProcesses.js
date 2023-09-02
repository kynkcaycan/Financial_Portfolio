import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import api from "../api/axiosConfig";


function ProfitProcesses() {
  const [profit, setProfit] = useState(0.0);
  const [profitType, setProfitType] = useState("");

  const [data, setData] = useState([]);
  const [dolarData, setDolarData] = useState([]); // Sadece DOLAR verilerini saklayacağız

  const [prices, setPrices] = useState({
    //input alanları için
    gramAltin: 0,
    tamAltin: 0,
    ceyrekAltin: 0,
    dolar: 0,
    euro: 0,
    sterlin: 0,
  });

  const handleInput = (event) => {
    //onChange için
    setPrices({ ...prices, [event.target.name]: event.target.value });
  };

  //const [doviz, setDoviz] = useState([]);

  useEffect(() => {
    //doviz türü dolar olanları filtreleyip çekiyoruz. setdolardata ya atıyoruz
    axios
      .get("http://localhost:8080/api/v1/doviz")
      .then((response) => {
        const filteredData = response.data.filter(
          (item) => item.dovizTuru === "DOLAR"
        );
        setDolarData(filteredData);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []);

  /*
  useEffect(() => {
    axios
      .get('"http://localhost:8080/api/v1/doviz"')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []);*/
  function calculateTotal(data) {
    let ourTotal = 0;
    let newTotal = 0;
    let totalProfit = 0;

    data.forEach((item) => {
      //sadece dolarları attığımız datanın elemanlarına ulaşıyoruz
      ourTotal += item.unitPrice * item.quantity;
      newTotal += prices.dolar * item.quantity;
    });
    totalProfit = newTotal - ourTotal;

    return totalProfit;
  }
  const totalDolarValue = calculateTotal(dolarData);
  function varliklarimaEkle(event) {
    //calculateTotal(data);
    event.preventDefault();
    axios.post(
      "http://localhost:8080/api/v1/profit",
      // post
      {
        profitType: "DOLAR",
        profit: totalDolarValue,
      }
    );
  }

  //profit = setProfit(totalDolarValue);
  //profitType = setProfitType("DOLAR");
  return (
    <div>
      <h1>Dolar Verileri</h1>

      <p>Toplam Değer (Dolar): {totalDolarValue}</p>

      <div className="form1">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-items">
                  gram altın bf:
                  <input
                    type="number"
                    placeholder="gram altın fiyatını giriniz"
                    class="form-control"
                    onChange={handleInput} //miktar yazılınca quantity set edilsin
                    name="gramAltin"
                  ></input>
                </div>
                <div className="form-items">
                  çeyrek altın BF:
                  <input
                    type="number"
                    placeholder="çeyrek altın giriniz"
                    className="form-control"
                    onChange={handleInput}
                    name="ceyrekAltin"
                  ></input>
                </div>
                <div className="form-items">
                  tam altın BF:
                  <input
                    type="text"
                    placeholder="tam altın giriniz"
                    className="form-control"
                    onChange={handleInput}
                    name="tamAltin"
                  ></input>
                </div>
                <div className="form-items">
                  Dolar BF:
                  <input
                    type="text"
                    placeholder="dolar fiyatı giriniz"
                    className="form-control"
                    onChange={handleInput}
                    //  {...setProfitType("DOLAR")} //
                    name="dolar"
                  ></input>
                </div>
                <div className="form-items">
                  euro BF:
                  <input
                    type="text"
                    placeholder="tam altın giriniz"
                    className="form-control"
                    onChange={handleInput} //
                    name="euro"
                  ></input>
                </div>
                <div className="form-items">
                  Sterlin BF:
                  <input
                    type="text"
                    placeholder="sterlin fiyat giriniz"
                    className="form-control"
                    onChange={handleInput} //
                    name="sterlin"
                  ></input>
                </div>
              </div>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn btn-save btn-block"
                    type="submit"
                    onClick={varliklarimaEkle}
                  >
                    Kar Zarar Hesapla
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfitProcesses;
