import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function ProfitPage({ data }) {
  // Doviz verilerini kullanabilirsiniz
  // console.log("Doviz Verileri:", profit);

  const { profit } = data;
  const allData = [...profit];
  return (
    <div>
      <div className="baslikaltibosluk">
        <h1>Portföyüm</h1>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tür</TableCell>
              <TableCell>Kar Zarar Durumu</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.profitTypeEuro}</TableCell>
                <TableCell>{item.profitEuro}</TableCell>
              </TableRow>
            ))}
            {allData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.profitTypeDolar}</TableCell>
                <TableCell>{item.profitDolar}</TableCell>
              </TableRow>
            ))}
            {allData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.profitTypeSterlin}</TableCell>
                <TableCell>{item.profitSterlin}</TableCell>
              </TableRow>
            ))}
            {allData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.profitTypeG_Gold}</TableCell>
                <TableCell>{item.profitG_Gold}</TableCell>
              </TableRow>
            ))}
            {allData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.profitTypeQ_Gold}</TableCell>
                <TableCell>{item.profitQ_Gold}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProfitPage;
