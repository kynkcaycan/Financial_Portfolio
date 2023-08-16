import Button from '@mui/material/Button';
const ButonsMain = () => {
    const clickBuy = () => {

        window.location.href = '/buy';

    }
    return (
        <div>
            <div class='mainButons' > <Button onClick={clickBuy}
                variant="contained"  color='success'>Buy</Button></div>
            <div class='mainButons' > <Button variant="contained" color='success'>Sell</Button></div>
            <div class='mainButons'><Button variant="contained" color='success' >Portfolio</Button> </div>

        </div>


    );
}

export default ButonsMain;