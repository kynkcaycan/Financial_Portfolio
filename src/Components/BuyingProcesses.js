import { Button, Grid } from "@mui/material";
import "./BuyingProcesses.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";

const BuyingProcesses = () => {
  const [step, setStep] = useState(0);

  const [dovizTuru, setDovizTuru] = useState("");
  const [unitPrice, setUnitPrice] = useState(0.0);
  const [created, setCreated] = useState("");
  const [quantity, setQuantity] = useState(0.0);

  const clickBuyMenu = () => {
    window.location.href = "/buying";
  };

  const dolarClick = () => {};

  // Tüm state'leri tanımla...

  const varliklarimaEkle = () => {
    axios.post("http://localhost:8080/api/v1/doviz", {
      dovizTuru: dovizTuru,
      unitPrice: unitPrice,
      created: created,
      quantity: quantity,
    });
  };

  const showingComponent = () => {
    if (step === 0) {
      return <Dropdown setStep={setStep} setDovizTuru={setDovizTuru} />;
    } else if (step === 1) {
      return (
        <div className="form">
          <div className="card">
            <div className="card-header">
              <h3>yatırım bilgileri</h3>
            </div>
            <div className="card-body">
              <form onSubmit={varliklarimaEkle}>
                <div className="form-group">
                  <div className="form-items">
                    <label htmlFor="quantity">Ürün miktarı</label>
                    <input
                      type="number"
                      name="quantity"
                      id="id1"
                      placeholder="ürün miktarı giriniz"
                      class="form-control"
                      onChange={(e) => setQuantity(e.target.value)} //miktar yazılınca quantity set edilsin
                    ></input>
                  </div>
                  <div className="form-items">
                    <label htmlFor="unitPrice">Ürün fiyatı</label>
                    <input
                      type="number"
                      name="unitPrice"
                      id="id2"
                      placeholder="birim fiyatı giriniz"
                      className="form-control"
                      onChange={(e) => setUnitPrice(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-items">
                    <label htmlFor="tarih">alınan tarih</label>
                    <input
                      type="text"
                      name="tarih"
                      id="id3"
                      placeholder="tarih giriniz"
                      className="form-control"
                      onChange={(e) => setCreated(e.target.value)}
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
                      // onClick={varliklarimaEkle}
                    >
                      Varlıklarıma Ekle
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className="dropdown-item"
                      onClick={clickBuyMenu}
                    >
                      Ekle+
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      );
    }
  };
  return showingComponent();
};
export default BuyingProcesses;
