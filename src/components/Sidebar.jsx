import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const menuItems = [
  { text: "Home", icon: "/icons/Home.png" },
  { text: "Cards", icon: "/icons/Card.png" },
  { text: "Payments", icon: "/icons/Payments.png" },
  { text: "Credit", icon: "/icons/Credit.png" },
  { text: "Settings", icon: "/icons/Account.png" },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 340,
        height: "100vh",
        backgroundColor: "#0B2447",
        color: "#fff",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginBottom: 5,
          marginLeft: "48px",
          marginTop: "48px",
          marginRight: "167px",
          justifyContent: "center",
        }}
      >
        <img
          src="/SidebarLogo.png"
          alt="Logo"
          style={{ width: 125, height: 35 }}
        />
        <Box sx={{ width: "237px" }}>
          <Typography
            sx={{
              width: "100%",
              marginTop: "19px",
              marginLeft: "48px",
              letterSpacing: "0px",
              fontWeight: 400,
              textAlign: "left",
              fontSize: "15px",
              fontFamily: "Open Sans, sans-serif",
              opacity: "30%",
              color: "#fff",
              lineHeight: "20px",
            }}
          >
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </Typography>
        </Box>
      </Box>
      <List sx={{ width: "100%", marginLeft: "48px" }}>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: "white" }}>
              <img
                src={item.icon}
                alt={item.text}
                style={{ width: 24, height: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              sx={{ fontFamily: "Open Sans, sans-serif", fontSize:"16px", textAlign:"left", lineHeight:"32px", letterSpacing:"0px", color:item?.text === "Cards" ? "#01D167" : "#fff" }}
              primary={item?.text}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
