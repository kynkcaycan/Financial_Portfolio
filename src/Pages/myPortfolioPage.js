import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";

function MyPortfolioPage({ data }) {
  const { altin, doviz } = data;

  // Altın ve döviz verilerini birleştir
  const allData = [...altin, ...doviz];

  // Tablo sütunlarını tanımla
  const columns = [
    { id: "turu", label: "Tür" },
    { id: "zaman", label: "Zaman" },
    { id: "adet", label: "Adet" },
    { id: "birimFiyati", label: "Birim Fiyatı" },
    { id: "karZararDurumu", label: "Kar Zarar Durumu" },
  ];

  // Verileri tabloya uygun hale getir
  const rows = allData.map((item, index) => ({
    id: index,
    turu: item.altinTuru || item.dovizTuru,
    zaman: item.created || item.created_altin,
    adet: item.quantity || item.quantity_altin,
    birimFiyati: item.unitPrice || item.unitPrice_altin,
    karZararDurumu: "kar durumu",
  }));

  // Seçilen satırları takip etmek için bir state kullan
  const [selectedRows, setSelectedRows] = useState([]);

  // Satır seçimini yöneten bir işlev tanımla
  const handleRowSelection = (rowId) => {
    const selectedIndex = selectedRows.indexOf(rowId);
    let newSelectedRows = [...selectedRows];

    if (selectedIndex === -1) {
      // Eğer seçili değilse, seçili satırlara ekle
      newSelectedRows.push(rowId);
    } else {
      // Eğer zaten seçiliyse, seçili satırlardan çıkar
      newSelectedRows.splice(selectedIndex, 1);
    }

    setSelectedRows(newSelectedRows);
  };

  // Seçili satırları silmek için bir işlev tanımla
  const handleDeleteRows = async () => {
    // Seçili satırları silmek için bir API isteği gönder
    try {
      const response = await fetch("/api/v1/altin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rowIds: selectedRows }),
      });

      if (response.ok) {
        // Başarılı silme işlemi sonrası UI'yi veya state'i güncelle
        console.log("Satırlar başarıyla silindi");

        // API isteği başarılı olduğunda seçili satırları temizle
        setSelectedRows([]);

        // Burada değişiklikleri yansıtmak için state'i veya veriyi güncelleyebilirsiniz
      } else {
        console.error("Satırları silme hatası");
      }
    } catch (error) {
      console.error("Hata:", error);
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
                      selectedRows.length > 0 && selectedRows.length < rows.length
                    }
                    checked={selectedRows.length === rows.length}
                    onChange={() => {
                      if (selectedRows.length === rows.length) {
                        setSelectedRows([]);
                      } else {
                        setSelectedRows(rows.map((row) => row.id));
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
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  selected={selectedRows.includes(row.id)}
                  onClick={() => handleRowSelection(row.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleRowSelection(row.id);
                      }}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Button variant="contained" color="secondary" onClick={handleDeleteRows}>
        Sil
      </Button>
    </div>
  );
}

export default MyPortfolioPage;
