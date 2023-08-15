import React, { useState } from 'react'
import './Dropdown.css'
function Dropdown (){
    const [isActive,setIsActive,activeItem]=useState(false)

    
      const [ setActiveItem] = useState(null);
    
      const handleItemClick = (itemIndex) => {
      if (activeItem === itemIndex) {
        setActiveItem(null);
      } else {
        setActiveItem(itemIndex);
      }
    };
    return (
        
        <div className="dropdown">
            
             <div className="dropdown-btn" onClick={e =>
            setIsActive(!isActive)}>
                finans Türü
                <span className='fas fa-caret-down'></span>
             </div>
            {isActive&& (
                <div className="dropdown-content"> 
                   <button className="dropdown-item" onClick={() => handleItemClick(0)}>
                     Döviz
                   </button>
                   {activeItem === 0 && (
                      <div className="dropdown-content-alt">
                            <button className="dropdown-item-alt">Alt Menü 1</button>
                            <button className="dropdown-item-alt">Alt Menü 2</button>
                      </div>
        )}
                   <button className="dropdown-item" onClick={() => handleItemClick(1)}>
                     Altin
                   </button>
                   {activeItem === 1 && (
                      <div className="dropdown-content-alt">
                            <button className="dropdown-item-alt">Alt Menü 3</button>
                            <button className="dropdown-item-alt">Alt Menü 4</button>
                      </div>
        )}
                   <button className="dropdown-item">
                     Fon
                   </button>
                   <button className="dropdown-item">
                     Hisse
                   </button>
                   </div>   
            )}
            
            
        </div>
    )
}
export default Dropdown