import Button from '@mui/material/Button';
const ButonsMain = () => {
    const clickBuy=()=>{
          
        window.location.href = '/buy';
        
        }
    return (  
        <div>
             <Button onClick={clickBuy}
              variant ="contained" color="secondary" size="large">Buy</Button>
              <Button variant ="contained" color="secondary" size="large">Sell</Button>
              <Button variant ="contained" color="secondary" size="large">Portfolio</Button> 
        </div>
       
    );
}
 
export default ButonsMain;