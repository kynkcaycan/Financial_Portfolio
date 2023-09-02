import { Button, Grid } from "@mui/material";
import "./BuyingProcesses.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Dropdown from "../components/Dropdown";

const BuyingProcesses = () => {
  const [step, setStep] = useState(0);



  const [dovizTuru, setDovizTuru] = useState("");
  const [unitPrice, setUnitPrice] = useState(0.0);
  const [created, setCreated] = useState("");
  const [quantity, setQuantity] = useState(0.0);

  const { handleSubmit, reset } = useForm();

  const [unitPrice_altin, setUnitPrice_altin] = useState(0.0);
  const [created_altin, setCreated_altin] = useState("");
  const [quantity_altin, setQuantity_altin] = useState(0.0);
  const clickBuyMenu = () => {
    window.location.href = "/buying";
  };

  // Tüm state'leri tanımla...

  const varliklarimaEkle = async (event) => {


if(dovizTuru==="GRAM"||dovizTuru=="CEYREK"){
  await axios.post(
    "http://localhost:8080/api/v1/altin",
    // post
    {
      altinTuru: dovizTuru,
      unitPrice_altin: unitPrice,
      created_altin: created,
      quantity_altin: quantity,
    }
  );
  reset();
}else if(dovizTuru==="DOLAR"||dovizTuru==="STERLİN"||dovizTuru==="EURO"){
  await axios.post(
    "http://localhost:8080/api/v1/doviz",
    // post
    {
      dovizTuru: dovizTuru,
      unitPrice: unitPrice,
      created: created,
      quantity: quantity,
    }
  );
  reset();

}
  }


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
              <form onSubmit={handleSubmit(varliklarimaEkle)}>
                <div className="form-group">
                  <div className="form-items">
                    Ürün miktarı:
                    <input
                      type="number"
                      placeholder="ürün miktarı giriniz"
                      class="form-control"
                      onChange={(e) => dovizTuru==="DOLAR"||"EURO"||"STERLİN"? setQuantity(e.target.value):setQuantity_altin(e.target.value)} //miktar yazılınca quantity set edilsin
                      name="quantity"
                    ></input>
                  </div>
                  <div className="form-items">
                    Ürün fiyatı:
                    <input
                      type="number"
                      placeholder="birim fiyatı giriniz"
                      className="form-control"
                      onChange={(e) => dovizTuru==="DOLAR"||"EURO"||"STERLİN"? setUnitPrice(e.target.value):setUnitPrice_altin(e.target.value)} //miktar yazılınca quantity set edilsin
                      name="unitPrice"
                    ></input>
                  </div>
                  <div className="form-items">
                    alınan tarih
                    <input
                      type="text"
                      placeholder="tarih giriniz"
                      className="form-control"
                      onChange={(e) => 
                        dovizTuru==="DOLAR"||"EURO"||"STERLİN"? setCreated(e.target.value):setCreated_altin(e.target.value)} //miktar yazılınca quantity set edilsin
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