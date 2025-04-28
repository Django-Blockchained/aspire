import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import dummyTransactions from "../services/recentTransaction";


const textTitleCSS = {
  fontFamily: "Open Sans, sans-serif",
  fontSize: "14px",
  textAlign: "left",
  lineHeight: "18px",
  letterSpacing: 0,
  color: "#0C365A",
};

const summaryCSS = {
  height: "72px",
  marginTop: "24px",
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
    outline: "none",
  },
  "&:focus": {
    outline: "none",
  },
};

export default function RecentTransactions() {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "366px" },
        borderRadius: "8px",
        marginRight: { xs: "0", sm: "40px" },
        marginX: "auto",
      }}
    >
      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          width: "100%",
          borderRadius: "8px",
          backgroundColor: "#F5F9FF",
          "&::before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <img
              src="/down-arrow.png"
              alt="down arrow"
              width={24}
              height={24}
            />
          }
          sx={summaryCSS}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/cardDetailsAcc.png"
              alt="Card Detail"
              width={24}
              height={24}
            />
            <Typography sx={textTitleCSS}>Card Details</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Card Holder: Mark Henry
            <br />
            Card Number: **** **** **** 2020
            <br />
            Expiry Date: 12/24
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        disableGutters
        elevation={0}
        square
        sx={{
          width: "100%",
          backgroundColor: "#F5F9FF",
          borderRadius: "8px",
          "&::before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <img
              src="/down-arrow.png"
              alt="down arrow"
              width={24}
              height={24}
            />
          }
          sx={summaryCSS}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/cardDetailsAcc.png"
              alt="Card Detail"
              width={24}
              height={24}
            />
            <Typography sx={textTitleCSS}>Recent Transactions</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#fff" }}>
          <List>
            {dummyTransactions.map((txn) => (
              <ListItem
                key={txn.id}
                alignItems="flex-start"
                sx={{
                  flexDirection: "column",
                  alignItems: "stretch",
                  paddingY: 1,
                }}
              >
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <Box sx={{display:"flex"}}>
                    <ListItemAvatar>
                      <Box
                        sx={{
                          width: "48px",
                          height: "48px",
                          backgroundColor: txn.color,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={txn.imgSrc}
                          alt="Transaction Logos"
                          width={16}
                          height={15}
                        />
                      </Box>
                    </ListItemAvatar>
                    <ListItemText
                      primary={txn?.merchant}
                      secondary={txn?.date}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#222222",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "18px",
                        },
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          fontSize: "13px",
                          color: "#AAAAAA",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "18px",
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      color: txn?.txtcolor,
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {txn.amount > 0
                      ? `+\u00A0S$\u00A0${txn.amount}`
                      : `-\u00A0S$\u00A0${Math.abs(txn.amount)}`}
                      {"\u00A0\u00A0"}
                      <img src="/next.png" alt="next-button" width={6} height={12}/>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "64px",
                    marginTop: "8px",
                    gap: "6px",
                  }}
                >
                <Box sx={{width: "24px",
                          height: "20px",
                          backgroundColor: "#325BAF",
                          borderRadius: "35%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",}}>
                <img
                    src="/business-and-finance.png"
                    alt="Status"
                    width={10}
                    height={8}
                  />
                </Box>
                  
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#325BAF",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "18px",
                      textAlign:"left"
                    }}
                  >
                    {txn.status}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
