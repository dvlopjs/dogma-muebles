import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { useState, useRef, useCallback } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

export const ButtonMenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const router = useRouter();
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const handleClose = useCallback((event: Event | React.SyntheticEvent) => {
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
    { label: "Mobiliario de Cocina", icon: <CountertopsIcon />, id: "cocinas" },
    { label: "Placards y vestidores", icon: <CheckroomIcon />, id: "placards" },
    { label: "Más trabajos", icon: <AddIcon />, id: "otros" },
  ];

  const handleOnClickItem = useCallback(
    (id: string) => {
      router.push(`/${id}`);
      handleToggle();
    },
    [router, handleToggle]
  );

  const prevOpen = useRef(open);
  React.useEffect(() => {
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
        style={{
          color: "#fff",
          backgroundColor: "transparent",
        }}
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
                    <MenuItem
                      key={item.id}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleOnClickItem(item.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        color:
                          hoveredButton === item.id ? "rgb(82, 183, 136)" : "",
                        backgroundColor: "transparent",
                        transition: "transform 0.3s, color 0.3s",
                        transform:
                          hoveredButton === item.id
                            ? "scale(1.02)"
                            : "scale(1)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          transition: "transform 0.3s, color 0.3s",
                          color:
                            hoveredButton === item.id
                              ? "rgb(82, 183, 136)"
                              : "",
                          transform:
                            hoveredButton === item.id
                              ? "scale(1.2)"
                              : "scale(1)",
                        }}
                      >
                        {item.icon}
                      </div>
                      {item.label}
                    </MenuItem>
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
