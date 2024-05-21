"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import appLogo from "../assets/images/dogma-logo.jpg";
import { Container, Slide, useScrollTrigger } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { sendToChat } from "../utils/sendToChat";
import { ButtonMenuDropdown } from "./ButtonMenuDropdown";
import Link from "next/link";

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
        sx={{
          boxShadow: "none",
        }}
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

            <Box sx={{ flexGrow: 1, pt: "0.4rem", pb: "0.4rem" }}>
              <Link href={"/"}>
                <Image
                  src={appLogo}
                  priority
                  alt="Dogma Muebles"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                />
              </Link>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Box pr={2}>
                <ButtonMenuDropdown />
              </Box>
              <Button
                onClick={() => sendToChat()}
                startIcon={<WhatsAppIcon />}
                variant="outlined"
                color="success"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Contactanos
              </Button>
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
