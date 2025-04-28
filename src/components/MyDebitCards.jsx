import { Box, Grid } from "@mui/material";
import React from "react";
import CarouselCard from "./CarouselCard";
import RecentTransactions from "./RecentTransactions";

export default function MyDebitCards({ cardsData, setCardsData }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "24px", sm: "47px" },
        marginTop: "21px",
        borderRadius: "8px",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        padding: "20px",
        height: "100%",
        marginX: { xs: "20px", sm: "40px", md: "60px" },
        maxWidth: "100%",
      }}
    >
      <Box sx={{ marginTop: { xs: "0px", sm: "30px" }, width: "100%" }}>
        <CarouselCard cardsData={cardsData} setCardsData={setCardsData} />
      </Box>
      <Box
        sx={{
          marginTop: { xs: "30px", sm: "70px" },
          width: "100%",
        }}
      >
        <RecentTransactions />
      </Box>
    </Box>
  );
}
