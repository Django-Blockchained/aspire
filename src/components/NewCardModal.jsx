import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function NewCardModal({ open, handleClose, addCard }) {
  const [formData, setFormData] = useState({
    name: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateCardNumber = () => {
    let number = "";
    for (let i = 0; i < 16; i++) {
      number += Math.floor(Math.random() * 10);
      if ((i + 1) % 4 === 0 && i !== 15) {
        number += " ";
      }
    }
    return number;
  };

  const generateExpiry = () => {
    const month = Math.floor(Math.random() * 12) + 1;
    const year = Math.floor(Math.random() * 5) + 25;
    return `${month.toString().padStart(2, "0")}/${year}`;
  };

  const handleSubmit = () => {
    const cardNumber = generateCardNumber();
    const expiryDate = generateExpiry();
    const newCard = {
      ...formData,
      number: cardNumber,
      expiry: expiryDate,
    };
    addCard(newCard);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          Add New Card
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="CVV"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Add Card
        </Button>
      </Box>
    </Modal>
  );
}
