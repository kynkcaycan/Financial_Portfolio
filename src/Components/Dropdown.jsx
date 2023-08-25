import React, { useState } from "react";
import "./Dropdown.css";
import { Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
                onClick={() => clickBuying("dolar")}
              >
                Dolar
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying("euro")}
              >
                Euro
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying("sterlin")}
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
                onClick={() => clickBuying()}
              >
                Gram
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying()}
              >
                Çeyrek
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
                onClick={() => clickBuying()}
              >
                Tam
              </Button>
            </div>
          )}
          <Button
            variant="contained"
            color="primary"
            className="dropdown-item"
            onClick={() => handleItemClick(2)}
          >
            Fon
          </Button>
          {activeItem === 2 && (
            <div className="dropdown-content-alt">
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
              >
                Gram
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
              >
                Çeyrek
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
              >
                Tam
              </Button>
            </div>
          )}
          <Button
            variant="contained"
            color="primary"
            className="dropdown-item"
            onClick={() => handleItemClick(3)}
          >
            Hisse
          </Button>
          {activeItem === 3 && (
            <div className="dropdown-content-alt">
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
              >
                Gram
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
              >
                Çeyrek
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="dropdown-item-alt"
              >
                Tam
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
