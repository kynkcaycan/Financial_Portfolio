import { Button, Grid } from "@mui/material";
import "./BuyingProcesses.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../components/Dropdown";

const SellingProcesses = () => {
  const [step, setStep] = useState(0);

  /* const [post, setPost] = useState({
    dovizTuru: "",
    unitPrice: 0,
    created: "",
    quantity: 0,
  });*/

  /*const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };*/

  const [dovizTuru, setDovizTuru] = useState("");
  const [unitPrice, setUnitPrice] = useState(0.0);
  const [created, setCreated] = useState("");
  const [quantity, setQuantity] = useState(0.0);
  const[status,setStatus]=useState("");

  const clickBuyMenu = () => {
    window.location.href = "/buying";
  };

  const dolarClick = () => {};

  // Tüm state'leri tanımla...

  function varliklarimaEkle(event) {
    event.preventDefault();
    axios.post(
      "http://localhost:8080/api/v1/doviz",
      // post
      {
        dovizTuru: dovizTuru,
        unitPrice: unitPrice,
        created: created,
        quantity: quantity,
        status:"Satış"
      }
    );
  }


  const showingComponent = () => {
    if (step === 0) {
      return <Dropdown setStep={setStep} setDovizTuru={setDovizTuru} />;
    } else if (step === 1) {
      return (
        <div className="form">
          <div className="card">
            <div className="card-header">
              <h3>Satış bilgileri</h3>
            </div>
            <div className="card-body">
              <form onSubmit={varliklarimaEkle}>
                <div className="form-group">
                  
                  <div className="form-items">
                    Ürün miktarı:
                    <input
                      type="number"
                      placeholder="ürün miktarı giriniz"
                      class="form-control"
                      onChange={(e) => setQuantity(e.target.value)} //miktar yazılınca quantity set edilsin
                      name="quantity"
                    ></input>
                  </div>
                  <div className="form-items">
                    Ürün fiyatı:
                    <input
                      type="number"
                      placeholder="birim fiyatı giriniz"
                      className="form-control"
                      onChange={(e) => setUnitPrice(e.target.value)} //
                      name="unitPrice"
                    ></input>
                  </div>
                  <div className="form-items">
                    Satış Tarihi
                    <input
                      type="text"
                      placeholder="tarih giriniz"
                      className="form-control"
                      onChange={(e) => setCreated(e.target.value)} //
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
                      Satış Ekle
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
export default SellingProcesses;
