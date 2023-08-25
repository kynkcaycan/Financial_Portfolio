import { Button, Grid } from "@mui/material";
import "./BuyingProcesses.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";

const BuyingProcesses = () => {
  const [step, setStep] = useState(0);

  const [dovizTuru, setDovizTuru] = useState("EURO");
  const [unitPrice, setUnitPrice] = useState(0.0);
  const [created, setCreated] = useState();
  const [quantity, setQuantity] = useState(0.0);

  /*useEffect(() => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  }, [variable]);*/

  const clickBuyMenu = () => {
    window.location.href = "/buying";
  };

  const dolarClick = () => {};

  /*const handleChangeMiktar = (e) => {
    setMiktar(e.target.value);
  };*/

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
              <form>
                <div className="form-group">
                  <div className="form-items">
                    <label htmlFor="miktar">Ürün miktarı</label>
                    <input
                      type="number"
                      name="miktar"
                      id="id1"
                      placeholder="ürün miktarı giriniz"
                      class="form-control"
                      onChange={(e) => setQuantity(e)} //miktar yazılınca quantity set edilsin
                    ></input>
                  </div>
                  <div className="form-items">
                    <label htmlFor="bfiyat">Ürün fiyatı</label>
                    <input
                      type="text"
                      name="bfiyat"
                      id="id2"
                      placeholder="birim fiyatı giriniz"
                      class="form-control"
                      onChange={(e) => setUnitPrice(e)}
                    ></input>
                  </div>
                  <div className="form-items">
                    <label htmlFor="tarih">alınan tarih</label>
                    <input
                      type="text"
                      name="tarih"
                      id="id3"
                      placeholder="tarih giriniz"
                      class="form-control"
                      onChange={(e) => setCreated(e)}
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
