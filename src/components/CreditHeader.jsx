import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NewCardModal from "./NewCardModal";

export default function CreditHeader({ openModal, setOpenModal, addCard }) {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginX:"60px"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Open Sans, sans-serif",
            lineHeight: "16px",
            marginBottom: "0.286rem",
          }}
        >
          Available balance
        </Typography>

        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Box
            sx={{
              padding: "4px",
              backgroundColor: "#01D167",
              width: "40px",
              height: "24px",
              borderRadius: "8px",
              alignItems: "center",
              marginY: "9px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "bold",
                color: "#fff",
                fontSize: "13px",
                margin: "2px 13px 4px 13px",
              }}
            >
              S$
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "26px",
              fontFamily: "Open Sans, sans-serif",
              color: "#000",
              fontWeight: 700,
            }}
          >
            3,000
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#325BAF",
            textTransform: "none",
            gap: "4px",
            padding: "10px",
          }}
          onClick={() => setOpenModal(true)}
        >
          <img src="/buttonBox.png" alt="plusButton" width={16} height={16} />
          <Typography
            sx={{
              fontSize: "13px",
              lineHeight: "18px",
            }}
          >
            New Card
          </Typography>
        </Button>
      </Box>

      <NewCardModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        addCard={addCard}
      />
    </Box>
  );
}
