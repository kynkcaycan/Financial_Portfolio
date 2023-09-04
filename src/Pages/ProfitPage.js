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
import React from "react";

function ProfitPage({ data }) {
  const { profit } = data;
  const allData = [...profit];
  return (
    <div className="portfoliotableandtitle">
      <Typography
        fontFamily={"EB Garamond"}
        variant="h6"
        component="div"
        fontSize={"26px"}
        paddingBottom={"10px"}
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        KAR-ZARAR DURUMU
      </Typography>

      <TableContainer
        component={Paper}
        style={{
          maxHeight: "300px",
          marginBottom: "20px",
          backgroundColor: "#e1e1e1",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tür</TableCell>
              <TableCell>Kar-Zarar Durumu</TableCell>
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
