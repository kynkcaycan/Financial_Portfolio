import Button from "@mui/material/Button";
const ButonsMain = () => {
  const clickBuy = () => {
    window.location.href = "/add";
  };

  const clickSell = () => {
    window.location.href = "/portfolio";
  };

  const clickPortfolio = () => {
    window.location.href = "/portfolio";
  };

  return (
    <div className="buysellport">
      <div class="mainButons">
        {" "}
        <Button onClick={clickBuy} variant="contained" color="success">
          Alım Ekle
        </Button>
      </div>
      <div class="mainButons">
        {" "}
        <Button onClick={clickSell} variant="contained" color="success">
          Değer Girişi Yap
        </Button>
      </div>
      <div class="mainButons">
        <Button onClick={clickPortfolio} variant="contained" color="success">
          Portfolyö
        </Button>{" "}
      </div>
    </div>
  );
};

export default ButonsMain;
