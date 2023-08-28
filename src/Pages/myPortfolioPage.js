// MyPortfolioPage.js

import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function MyPortfolioPage({ doviz }) {
  // Doviz verilerini kullanabilirsiniz
  console.log("Doviz Verileri:", doviz);

  return (
  
    <div>
      <div className="baslikaltibosluk">
      <h1 >Portföyüm</h1>
      </div>
    
     
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Gold Type</TableCell>
              <TableCell>Buyed</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doviz.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.dovizTuru}</TableCell>
                <TableCell>{item.created}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.unitPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyPortfolioPage;
