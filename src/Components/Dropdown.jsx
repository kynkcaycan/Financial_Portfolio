import React, { useState } from 'react'
import './Dropdown.css'
function Dropdown (){
    const [isActive,setIsActive]=useState(false)
    return (
        
        <div className="dropdown">
            
             <div className="dropdown-btn" onClick={e =>
            setIsActive(!isActive)}>
                finans Türü
                <span className='fas fa-caret-down'></span>
             </div>
            {isActive&& (
                <div className="dropdown-content"> 
                   <div className="dropdown-item">
                     Döviz
                   </div>
                   <div className="dropdown-item">
                     Altin
                   </div>
                   <div className="dropdown-item">
                     Fon
                   </div>
                   <div className="dropdown-item">
                     Hisse
                   </div>
                   </div>   
            )}
            
            
        </div>
    )
}
export default Dropdown