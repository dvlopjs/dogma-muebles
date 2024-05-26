"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import { Slide, useScrollTrigger } from "@mui/material";
import { DrawerContent } from "./DrawerContent";
import { ToolBarHeader } from "./ToolBarHeader";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement | any;
}

const drawerWidth = 300;

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function HideOnScroll(props: Props) {
    const { children, window } = props;
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
        <ToolBarHeader handleDrawerToggle={handleDrawerToggle} />

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
                backgroundColor: "black",
              },
            }}
          >
            <DrawerContent handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        </nav>
      </AppBar>
    </HideOnScroll>
  );
}
