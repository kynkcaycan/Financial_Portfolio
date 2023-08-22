
import React, { useEffect } from 'react';
import Axios from "axios";
const MyPortfolioPage = () => {
  const[data,setData]=useStage();
  const getData=async()=>{
    const response =await Axios.get("http://localhost:5000/getData")
   setData(response.data);
  
  }
  useEffect(()=>{
    getData()
  },[]);
    return ( 
  <div>{data}</div>


     );
}
 
export default MyPortfolioPage;