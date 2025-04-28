import React from "react";
import { Box, Button, Typography } from "@mui/material";
import cardMenuData from "../services/cardMenuData";

const CardActionItems = ({ isFrozen, toggleFreeze }) => {
  const boxDesign = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "7px",
  };
  const textDesign = {
    fontSize: "13px",
    textAlign: "center",
    color: "#0C365A",
    lineHeight: "14px",
    letterSpacing: 0,
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 414,
        height: "116px",
        backgroundColor: "#EDF3FF",
        display: "flex",
        borderRadius: "16px",
        marginTop: "32px",
        padding: "5px",
      }}
    >
      {cardMenuData?.map((item) => {
        const isFreezeButton = typeof item?.buttonText === "function";

        const menuContent = (
          <Box sx={boxDesign}>
            <img src={item?.src} alt={item?.alt} width={32} height={32} />
            <Typography sx={textDesign}>
              {isFreezeButton ? item?.buttonText(isFrozen) : item.text}
            </Typography>
          </Box>
        );

        return (
          <Box key={item?.id} sx={boxDesign}>
            {isFreezeButton ? (
              <Button
                variant="text"
                disableRipple
                onClick={toggleFreeze}
                sx={{
                  textTransform: "none",
                  fontSize: "13px",
                  textAlign: "center",
                  color: "#0C365A",
                  lineHeight: "14px",
                  letterSpacing: 0,
                  border: "none",
                  ":active": {
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  },
                  ":focus": {
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
              >
                {menuContent}
              </Button>
            ) : (
              menuContent
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default CardActionItems;
