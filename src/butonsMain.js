import Button from "@mui/material/Button";
const ButonsMain = () => {
  const clickBuy = () => {
    window.location.href = "/buying";
  };

  const clickSell = () => {
    window.location.href = "/sell";
  };

  const clickPortfolio = () => {
    window.location.href = "/portfolio";
  };

  return (
    <div className="buysellport">
      <div class="mainButons">
        {" "}
        <Button onClick={clickBuy} variant="contained" color="success">
          Buy
        </Button>
      </div>
      <div class="mainButons">
        {" "}
        <Button variant="contained" color="success">
          Sell
        </Button>
      </div>
      <div class="mainButons">
        <Button onClick={clickPortfolio} variant="contained" color="success">
          Portfolio
        </Button>{" "}
      </div>
      <div class="mainButons">
        {" "}
        <Button onClick={clickSell} variant="contained" color="success">
          Sell
        </Button>
      </div>
      <div class="mainButons">
        <Button variant="contained" color="success">
          Portfolio
        </Button>{" "}
      </div>
    </div>
  );
};

        window.location.href='/portfolio';
    }
        
    
    return (
        <div className='buysellport'>
            <div class='mainButons' > <Button onClick={clickBuy}
                variant="contained"  color='success'>Buy</Button></div>
            <div class='mainButons' > <Button variant="contained" color='success'>Sell</Button></div>
            <div class='mainButons'><Button onClick={clickPortfolio} variant="contained" color='success' >Portfolio</Button> </div>
            <div class='mainButons' > <Button onClick={clickSell} 
                variant="contained" color='success'>Sell</Button></div>
            <div class='mainButons'><Button onClick={clickPortfolio}
                variant="contained" color='success' >Portfolio</Button> </div>
    const clickPortfolio=()=>{
