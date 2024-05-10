"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import appLogo from "../assets/images/dogma-logo.jpg";
import { Container, Slide, useScrollTrigger } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { sendToChat } from "../utils/sendToChat";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement | any;
}

const drawerWidth = 240;
const navItems = ["Nuestros muebles", "Contactanos"];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image src={appLogo} alt="Dogma Muebles" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{ boxShadow: "none", paddingBottom: 20 }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1 }} pt={1}>
              <Image
                src={appLogo}
                alt="Dogma Muebles"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item) =>
                item === "Contactanos" ? (
                  <Box key={item} pl={2}>
                    <Button
                      onClick={() => sendToChat()}
                      startIcon={<WhatsAppIcon />}
                      variant="outlined"
                      color="success"
                      sx={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {item}
                    </Button>
                  </Box>
                ) : (
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                )
              )}
            </Box>
          </Toolbar>
        </Container>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </AppBar>
    </HideOnScroll>
  );
}
