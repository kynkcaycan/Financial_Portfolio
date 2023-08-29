import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";

function ProfitProcesses() {
  const [profit, setProfit] = useState();
  const [prices, setPrices] = useState({
    gramAltin: 0,
    tamAltin: 0,
    ceyrekAltin: 0,
    dolar: 0,
    euro: 0,
    sterlin: 0,
  });

  const handleInput = (event) => {
    setPrices({ ...prices, [event.target.name]: event.target.value });
  };
  const varliklarimaEkle = async (event) => {
    await axios.post(
      "http://localhost:8080/api/v1/doviz",
      // post
      {
        profit: profit,
      }
    );
  };
  return (
    <div>
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
                    name="quantity"
                  ></input>
                </div>
                <div className="form-items">
                  çeyrek altın BF:
                  <input
                    type="number"
                    placeholder="çeyrek altın giriniz"
                    className="form-control"
                    onChange={handleInput}
                    name="unitPrice"
                  ></input>
                </div>
                <div className="form-items">
                  tam altın BF:
                  <input
                    type="text"
                    placeholder="tam altın giriniz"
                    className="form-control"
                    onChange={handleInput}
                    name="tarih"
                  ></input>
                </div>
                <div className="form-items">
                  Dolar BF:
                  <input
                    type="text"
                    placeholder="dolar fiyatı giriniz"
                    className="form-control"
                    onChange={handleInput} //
                    name="tarih"
                  ></input>
                </div>
                <div className="form-items">
                  euro BF:
                  <input
                    type="text"
                    placeholder="tam altın giriniz"
                    className="form-control"
                    onChange={handleInput} //
                    name="tarih"
                  ></input>
                </div>
                <div className="form-items">
                  Sterlin BF:
                  <input
                    type="text"
                    placeholder="sterlin fiyat giriniz"
                    className="form-control"
                    onChange={handleInput} //
                    name="tarih"
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
                    //onClick={varliklarimaEkle}
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
