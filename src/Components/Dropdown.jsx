import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ setStep, setDovizTuru }) {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    if (activeItem === itemIndex) {
      setActiveItem(null);
    } else {
      setActiveItem(itemIndex);
    }
  };

  const clickBuying = (dovizTuru) => {
    //döviz türünü clickbuying fonk parametre verdik.tıklayınca dovizturunu set edecek.
    setStep(1);
    setDovizTuru(dovizTuru);
  };
  return (
    <div className="dropdown">
      <p>Lütfen ekleme yapacağınız türü seçiniz. </p>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Finans Türü
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <Button
            variant="contained"
            color="primary"
            className="dropdown-item"
            onClick={() => handleItemClick(0)}
          >
            Döviz
          </Button>
          {activeItem === 0 && (
            <div className="dropdown-content-alt">
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying("DOLAR")} //"dolar"
              >
                Dolar
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying("EURO")}
              >
                Euro
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying("STERLIN")}
              >
                Sterlin
              </Button>
            </div>
          )}
          <Button
            variant="contained"
            color="primary"
            className="dropdown-item"
            onClick={() => handleItemClick(1)}
          >
            Altin
          </Button>
          {activeItem === 1 && (
            <div className="dropdown-content-alt">
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying("GRAM")}
              >
                Gram
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying("CEYREK")}
              >
                Çeyrek
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
