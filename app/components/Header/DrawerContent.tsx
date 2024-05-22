import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import appLogo from "../../assets/images/dogma-logo.jpg";

interface Props {
  handleDrawerToggle: () => void;
}

export const DrawerContent: React.FC<Props> = ({ handleDrawerToggle }) => {
  const navItems = ["Nuestros muebles", "Contactanos"];

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
};
