import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Typography, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FreezeButton from "./CardActionItems";
import CardActions from "./CardActionItems";
import CardActionItems from "./CardActionItems";

const CarouselCard = ({ cardsData, setCardsData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const swiperRef = useRef(null);

  const toggleVisibility = () => {
    setShowDetails((prev) => !prev);
  };

  const toggleFreeze = () => {
    setCardsData((prevCards) =>
      prevCards.map((card, index) =>
        index === activeCardIndex
          ? { ...card, frozen: !card.frozen }
          : card
      )
    );
  };

  useEffect(() => {
    if (swiperRef.current && cardsData.length > 0) {
      swiperRef.current.slideTo(0);
    }
  }, [cardsData.length]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 414,
        height: "248px",
        marginX: "auto",
        marginLeft: { xs: "0px", sm: "40px" },
      }}
    >
      {/* Eye button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "12px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <IconButton size="small" onClick={toggleVisibility}>
            {showDetails ? (
              <VisibilityOffIcon sx={{ fontSize: "16px", color: "#01D167" }} />
            ) : (
              <VisibilityIcon sx={{ fontSize: "16px", color: "#01D167" }} />
            )}
          </IconButton>
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Open Sans, sans-serif",
              color: "#01D167",
              fontWeight: 700,
            }}
          >
            {showDetails ? "Hide card number" : "Show card number"}
          </Typography>
        </Box>
      </Box>

      {/* Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveCardIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        style={{ paddingBottom: "50px" }}
      >
        {cardsData?.length > 0 &&
          cardsData?.map((card) => (
            <SwiperSlide key={card.id}>
              <Box
                sx={{
                  backgroundColor: "#01D167",
                  color: "white",
                  borderRadius: "8px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {card?.frozen && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 1,
                      borderRadius: "8px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "bold",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Card Frozen
                    </Typography>
                  </Box>
                )}

                {/* Aspire logo */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "27px",
                    marginRight: "27px",
                  }}
                >
                  <img
                    src="/cardLogo.png"
                    alt="Aspire"
                    width={83}
                    height={23}
                  />
                </Box>
                <Box sx={{ marginTop: "27px" }}>
                  {/* Cardholder Name */}
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontFamily: "Open Sans, sans-serif",
                      color: "#fff",
                      fontWeight: 700,
                      lineHeight: "20px",
                      letterSpacing: "0.58px",
                      textAlign: "left",
                      marginLeft: "27px",
                    }}
                  >
                    {card.name}
                  </Typography>

                  {/* Card number */}

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Open Sans, sans-serif",
                      color: "#fff",
                      fontWeight: 700,
                      lineHeight: "19px",
                      letterSpacing: "3.46px",
                      textAlign: "left",
                      marginTop: "27px",
                      marginLeft: "27px",
                    }}
                  >
                    {showDetails
                      ? card.number
                      : "••••\u00A0\u00A0\u00A0••••\u00A0\u00A0\u00A0••••\u00A0\u00A0\u00A0" +
                        card.number.slice(-4)}
                  </Typography>

                  {/* Thru and CVV */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "21.5px",
                      marginLeft: "27px",
                      gap: "36px",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontFamily: "Open Sans, sans-serif",
                          color: "#fff",
                          fontWeight: 700,
                          lineHeight: "18px",
                          letterSpacing: "0.31px",
                          textAlign: "left",
                        }}
                      >
                        Thru:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontFamily: "Open Sans, sans-serif",
                          color: "#fff",
                          fontWeight: 700,
                          lineHeight: "18px",
                          letterSpacing: "1.56px",
                          textAlign: "left",
                        }}
                      >
                        {card.expiry}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontFamily: "Open Sans, sans-serif",
                          color: "#fff",
                          fontWeight: 700,
                          lineHeight: "18px",
                          letterSpacing: "0.31px",
                          textAlign: "left",
                        }}
                      >
                        CVV:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontFamily: "Open Sans, sans-serif",
                          color: "#fff",
                          fontWeight: 700,
                          lineHeight: "18px",
                          letterSpacing: "2.88px",
                          textAlign: "left",
                        }}
                      >
                        {showDetails ? card.cvv : "***"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* VISA logo */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "27px",
                    marginRight: "27px",
                    marginBottom: "27px",
                  }}
                >
                  <img src="/visaLogo.png" alt="Visa" width={66} height={22} />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Card Action Componnent */}
        <CardActionItems
          isFrozen={cardsData[activeCardIndex]?.frozen}
          toggleFreeze={toggleFreeze}
        />

      {/* Custom Swiper bullet styles */}
      <style>
        {`
        .swiper-pagination {
          position: absolute;
          bottom: -20px; /* Push dots down outside the card */
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
        }
        .swiper-pagination-bullet {
          background: #01D167;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: 0 6px !important;
          transition: width 0.3s ease, border-radius 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 18px;
          border-radius: 10px;
        }
      `}
      </style>
    </Box>
  );
};

export default CarouselCard;
