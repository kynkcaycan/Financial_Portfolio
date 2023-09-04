import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ProfitProcesses() {
  const [dolarData, setDolarData] = useState([]); // Sadece DOLAR verilerini saklayacağız
  const [euroData, setEuroData] = useState([]);
  const [sterlinData, setSterlinData] = useState([]);
  const [g_goldData, setG_GoldData] = useState([]);
  const [q_goldData, setQ_GoldData] = useState([]);
  const [prices, setPrices] = useState({
    gGold: 0,
    qGold: 0,
    dolar: 0,
    euro: 0,
    sterlin: 0,
  });

  const clickProfit = () => {
    window.location.href = "/profitTable";
  };

  //dövizleri türüne göre filtreleyerek çekme
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/doviz")
      .then((response) => {
        const filteredDolarData = response.data.filter(
          (item) => item.tur === "DOLAR"
        );
        setDolarData(filteredDolarData);

        const filteredEuroData = response.data.filter(
          (item) => item.tur === "EURO"
        );
        setEuroData(filteredEuroData);

        const filteredSterlinData = response.data.filter(
          (item) => item.tur === "STERLIN"
        );
        setSterlinData(filteredSterlinData);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []);

  //altınları türüne göre filtreleyerek çekme
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/altin")
      .then((response) => {
        const filteredG_GoldData = response.data.filter(
          (item) => item.tur === "GRAM"
        );
        setG_GoldData(filteredG_GoldData);

        const filteredQ_GoldData = response.data.filter(
          (item) => item.tur === "CEYREK"
        );
        setQ_GoldData(filteredQ_GoldData);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []);

  //toplam kar-zararı hesaplama
  function calculateTotal(data, value) {
    let ourTotal = 0;
    let newTotal = 0;
    let totalProfit = 0;

    data.forEach((item) => {
      //sadece dolarları attığımız datanın elemanlarına ulaşıyoruz
      ourTotal += item.unitPrice * item.quantity;
      newTotal += value * item.quantity;
    });
    totalProfit = newTotal - ourTotal;

    return totalProfit;
  }

  //hepsinin toplam kar zararlarını hesaplatıp değişkenlere atıyoruz
  const totalDolarValue = calculateTotal(dolarData, prices.dolar);
  const totalEuroValue = calculateTotal(euroData, prices.euro);
  const totalSterlinValue = calculateTotal(sterlinData, prices.sterlin);
  const totalG_GoldValue = calculateTotal(g_goldData, prices.gGold);
  const totalQ_GoldValue = calculateTotal(q_goldData, prices.qGold);

  //onChange için handleInput'lar
  const handleInputDolar = (event) => {
    setPrices({ ...prices, dolar: event.target.value });
  };
  const handleInputEuro = (event) => {
    setPrices({ ...prices, euro: event.target.value });
  };
  const handleInputSterlin = (event) => {
    setPrices({ ...prices, sterlin: event.target.value });
  };
  const handleInputG_Gold = (event) => {
    setPrices({ ...prices, gGold: event.target.value });
  };
  const handleInputQ_Gold = (event) => {
    setPrices({ ...prices, qGold: event.target.value });
  };

  //hesaplanan profitleri ve türlerini veri tabanına ekler
  function varliklarimaEkle(event) {
    event.preventDefault();

    axios.post("http://localhost:8080/api/v1/profit", {
      profitTypeDolar: "DOLAR",
      profitTypeEuro: "EURO",
      profitTypeSterlin: "STERLIN",
      profitTypeG_Gold: "GRAM",
      profitTypeQ_Gold: "CEYREK",
      profitDolar: totalDolarValue,
      profitEuro: totalEuroValue,
      profitSterlin: totalSterlinValue,
      profitG_Gold: totalG_GoldValue,
      profitQ_Gold: totalQ_GoldValue,
    });

    clickProfit();
  }

  return (
    <div>
      <Typography
        fontFamily={"EB Garamond"}
        variant="h6"
        component="div"
        fontSize={"26px"}
        paddingBottom={"10px"}
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        ANLIK BİRİM FİYATLAR
      </Typography>

      <div className="form1">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-items">
                  Gram Altın:
                  <input
                    type="number"
                    placeholder="Fiyat giriniz"
                    class="form-control"
                    onChange={handleInputG_Gold} //miktar yazılınca quantity set edilsin
                    name="gramAltin"
                  ></input>
                </div>
                <div className="form-items">
                  Çeyrek Altın:
                  <input
                    type="number"
                    placeholder="Fiyat giriniz"
                    className="form-control"
                    onChange={handleInputQ_Gold}
                    name="ceyrekAltin"
                  ></input>
                </div>

                <div className="form-items">
                  Dolar:
                  <input
                    type="text"
                    placeholder="Fiyat giriniz"
                    className="form-control"
                    onChange={handleInputDolar}
                    name="dolar"
                  ></input>
                </div>
                <div className="form-items">
                  Euro:
                  <input
                    type="text"
                    placeholder="Fiyat giriniz"
                    className="form-control"
                    onChange={handleInputEuro}
                    name="euro"
                  ></input>
                </div>
                <div className="form-items">
                  Sterlin:
                  <input
                    type="text"
                    placeholder="Fiyat giriniz"
                    className="form-control"
                    onChange={handleInputSterlin}
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
                    Kar-Zarar Hesapla
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
