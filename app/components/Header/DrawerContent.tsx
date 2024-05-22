import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import appLogo from "../../assets/images/dogma-logo.jpg";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface Props {
  handleDrawerToggle: () => void;
}

export const DrawerContent: React.FC<Props> = ({ handleDrawerToggle }) => {
  const navItems = ["Nuestros muebles", "Contactanos"];
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Link target="_blank" href={`https://wa.me/+5493546477298`}>
        <Button
          startIcon={<WhatsAppIcon />}
          variant="outlined"
          color="success"
          sx={{ color: "#fff", fontWeight: "bold" }}
        >
          Contactanos
        </Button>
      </Link>
    </Box>
  );
};
