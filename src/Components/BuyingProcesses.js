
import { Button,Grid } from "@mui/material";
import { Component } from "react";
import './BuyingProcesses.css'


class BuyingProcesses extends Component {
    
   clickBuyMenu  ()  {

    window.location.href = '/buy';
   }  
  dolarClick(){
       
    }
   
   
    render() {
        return(
          <div className="form">
             
             <div className="card">
               <div className="card-header">
                <h3>yatırım bilgileri</h3>
               </div>
               <div className="card-body">
                <form>
                  <div className="form-group">
                    <div className="form-items">
                    <label htmlFor="miktar">Ürün miktarı</label>
                    <input
                    type="text"
                    name="miktar"
                    id="id1"
                    placeholder="ürün miktarı giriniz"
                    class="form-control"
                    ></input>
                  </div>
                  <div className="form-items">
                  <label htmlFor="bfiyat">Ürün fiyatı</label>
                    <input
                    type="text"
                    name="bfiyat"
                    id="id2"
                    placeholder="birim fiyatı giriniz"
                    class="form-control"
                    ></input>
                  </div>
                  <div className="form-items">
                  <label htmlFor="tarih">alınan tarih</label>
                    <input
                    type="text"
                    name="tarih"
                    id="id3"
                    placeholder="tarih giriniz"
                    class="form-control"
                    ></input>
                  </div>
                  </div>
                  <Grid container spacing={2} direction="column">
                  <Grid item>
                  
                  <Button variant="contained" color="primary" className="btn btn-save btn-block"type="submit">Varlıklarıma Ekle</Button>
                  </Grid>
                  <Grid item>
                  <Button variant="contained" color="primary" className="dropdown-item" onClick={this.clickBuyMenu} >Ekle+</Button>
                  </Grid>
                  </Grid>

                </form>
               </div>
             </div>

          </div>
        )
    }

}
export default BuyingProcesses