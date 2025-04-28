import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import CreditHeader from "../components/CreditHeader";
import CardsTabs from "../components/CardsTabs";
import { getCards } from "../services/cardData";

export default function Dashboard() {
  const [cardsData, setCardsData] = useState(() => {
    const storedCards = localStorage.getItem("cardsData");
    return storedCards ? JSON.parse(storedCards) : [];
  });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('cardsData', JSON.stringify(cardsData));
  }, [cardsData]);

  useEffect(() => {
    const storedCards = localStorage.getItem("cardsData");
    if (!storedCards || JSON.parse(storedCards).length === 0) {
      getCards().then((data) => {
        setCardsData(data);
      });
    }
  }, []);

  const handleAddCard = (newCard) => {
    const cardWithId = { ...newCard, id: cardsData.length + 1, frozen: false };
    setCardsData((prev) => [...prev, cardWithId]);
  };
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh", flexDirection: { xs: "column", md: "row" },  }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: { xs: 2, md: 4 },
          backgroundColor: "#F9FAFB",
          width: { xs: "100%", md: "calc(100% - 340px)" },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CreditHeader
          openModal={openModal}
          setOpenModal={setOpenModal}
          addCard={handleAddCard}
        />
        <CardsTabs cardsData={cardsData} setCardsData={setCardsData} />
      </Box>
    </Box>
  );
}
