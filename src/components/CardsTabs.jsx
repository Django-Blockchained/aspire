import React, { useState } from "react";
import MyDebitCards from "./MyDebitCards";
import AllCompanyCards from "./AllCompanyCards";
import { Box, Tab, Tabs } from "@mui/material";

export default function CardsTabs({ cardsData, setCardsData }) {
  const [value, setValue] = useState(0);
  const handleTabSwitch = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleTabSwitch}
        aria-label="Card Tabs"
        sx={{
          ".MuiTabs-flexContainer": {
            gap: 2,
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            display: "flex",
            alignItems: "center",
            border: "none",
            marginX: { xs: "10px", sm: "60px" },
            marginTop: "34px",
          },
          ".MuiTab-root": {
            color: "#3B3D3B",
            padding: "10px 20px",
            minHeight: 0,
            marginTop: "8px",
            textAlign: "center",
            fontSize: "14px",
            fontFamily: `"Avenir Next", "Open Sans", sans-serif`,
            textTransform: "none",
            border: "none",
            outline: "none",
            "&:hover": {
              backgroundColor: "#e0e0e0",
              color: "#3B3D3B",
              border: "none",
              outline: "none",
            },
            "&.Mui-selected": {
              backgroundColor: "transparent",
              color: "#3B3D3B",
              fontWeight: 700,
              borderRadius: 0,
              border: "none",
              outline: "none",
            },
          },
          ".MuiTabs-indicator": {
            backgroundColor: "#007FFF",
            height: "3px",
            borderRadius: "3px",
          },
        }}
      >
        <Tab label="My debit cards" />
        <Tab label="All company cards" />
      </Tabs>
      {value === 0 && (
        <MyDebitCards cardsData={cardsData} setCardsData={setCardsData} />
      )}
      {value === 1 && <AllCompanyCards />}
    </>
  );
}
