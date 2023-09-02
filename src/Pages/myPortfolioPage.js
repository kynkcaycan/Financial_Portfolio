import {
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";

function MyPortfolioPage({ data }) {
  const { altin, doviz } = data;

  // Altın ve döviz verilerini birleştir
  const allData = [...altin, ...doviz];

  const rows = allData.map((item, index) => {
    const row = {
      id: index,
      turu: item.altinTuru || item.dovizTuru,
      zaman: item.created || item.created_altin,
      adet: item.quantity || item.quantity_altin,
      birimFiyati: item.unitPrice || item.unitPrice_altin,
    };

    return row;
  });

  const [veriler, setVeriler] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    // API'den verileri çekin ve state'e atayın
    api.get("/api/v1/doviz").then((response) => {
      setVeriler(response.data);
    });
  }, []);

  const columns = [
    { id: "dovizTuru", label: "Türü" },
    { id: "unitPrice", label: "Birim Fiyatı" },
    { id: "created", label: "Oluşturulma Tarihi" },
    { id: "quantity", label: "Miktar" },
  ];

  const handleCheckboxClick = (event, id) => {
    event.stopPropagation(); // Satıra tıklama olayını engelle
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDeleteClick = async () => {
    try {
      // Seçilen satırları API'den sil
      await Promise.all(
        selectedRows.map(async (id) => {
          await api.delete(`/api/v1/doviz/${id}`);
        })
      );

      // Silme işlemi başarılıysa, seçili satırları temizle
      setSelectedRows([]);
    } catch (error) {
      console.error("Veri silme hatası:", error);
    }
  };

  return (
    <div className="portfoliotableandtitle">
      <Typography variant="h4">Portföyüm</Typography>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < rows.length
                    }
                    checked={selectedRows.length === rows.length}
                    onChange={() => {
                      if (selectedRows.length === rows.length) {
                        setSelectedRows([]);
                      } else {
                        setSelectedRows(rows.map((veri) => veri.id));
                      }
                    }}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map((veri) => (
                <TableRow
                  key={veri.id}
                  selected={selectedRows.includes(veri.id)}
                  onClick={() => handleCheckboxClick(veri.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.includes(veri.id)}
                      onClick={(event) => handleCheckboxClick(event, veri.id)}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{veri[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDeleteClick}
        disabled={selectedRows.length === 0}
      >
        Seçili Verileri Sil
      </Button>
    </div>
  );
}

export default MyPortfolioPage;
