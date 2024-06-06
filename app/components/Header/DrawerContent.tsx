import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import appLogo from "../../assets/images/dogma-logo.jpg";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AddIcon from "@mui/icons-material/Add";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { useEffect, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

interface Props {
  handleDrawerToggle: () => void;
}

export const DrawerContent: React.FC<Props> = ({ handleDrawerToggle }) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
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

  return (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={handleDrawerToggle}
    >
      <Box>
        <Box display={"flex"} justifyContent={"center"} pt={1} pb={1}>
          <Image
            height={100}
            width={100}
            style={{ borderRadius: "50%", cursor: "pointer" }}
            src={appLogo}
            alt="Dogma Muebles"
          />
        </Box>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link href={item.href} passHref>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {item.icon && (
                    <ListItemIcon
                      sx={{
                        color:
                          currentPath === item.href ? "#52b788" : "inherit",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    sx={{
                      color: currentPath === item.href ? "#52b788" : "inherit",
                    }}
                    primary={item.label}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Link target="_blank" href={`https://wa.me/+5493546477298`}>
          <Button
            startIcon={<WhatsAppIcon />}
            variant="outlined"
            color="success"
            style={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            sx={{
              color: "#fff",
              mt: 1,
              mb: 2,
            }}
          >
            Contactanos
          </Button>
        </Link>
        <Box pb={1}>
          <Divider />
        </Box>

        <Box
          sx={{
            p: 1,
            textAlign: "left",
            gap: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2">
            <strong>
              <LocalPhoneIcon sx={{ fontSize: "1rem" }} />
            </strong>{" "}
            +54-93546477298
          </Typography>
          <Typography variant="body2">
            <strong>
              <AlternateEmailIcon sx={{ fontSize: "1rem" }} />
            </strong>{" "}
            dogmamuebles@hotmail.com
          </Typography>
          <Typography variant="body2">
            <strong>
              <FmdGoodIcon sx={{ fontSize: "1rem" }} />
            </strong>{" "}
            Santa Rosa de Calamuchita
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
