import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { useState, useRef, useCallback, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export const ButtonMenuDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const anchorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const handleClose = useCallback((event: MouseEvent | TouchEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  }, []);

  const handleListKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Tab" || event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }, []);

  const handleMouseEnter = useCallback((button: string) => {
    setHoveredButton(button);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredButton(null);
  }, []);

  const menuItems = [
    {
      label: "Mobiliario de Cocina",
      icon: <CountertopsIcon />,
      href: "/cocinas",
    },
    {
      label: "Placards y vestidores",
      icon: <CheckroomIcon />,
      href: "/placards",
    },
    { label: "Más trabajos", icon: <AddIcon />, href: "/otros" },
  ];

  const handleMenuItemClick = useCallback(() => {
    setOpen(false);
  }, []);

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{ color: "#fff", backgroundColor: "transparent" }}
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      >
        NUESTROS MUEBLES
      </Button>
      <Popper
        sx={{ paddingTop: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {menuItems.map((item) => (
                    <Link key={item.href} href={item.href} passHref>
                      <MenuItem
                        onMouseEnter={() => handleMouseEnter(item.href)}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleMenuItemClick}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          color:
                            hoveredButton === item.href ||
                            currentPath === item.href
                              ? "rgb(82, 183, 136)"
                              : "",
                          backgroundColor: "transparent",
                          transition: "transform 0.3s, color 0.3s",
                          transform:
                            hoveredButton === item.href ||
                            currentPath === item.href
                              ? "scale(1.02)"
                              : "scale(1)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          {item.icon}
                        </div>
                        {item.label}
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
