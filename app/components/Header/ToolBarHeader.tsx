import { Box, Button, Container, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { ButtonMenuDropdown } from "../ButtonMenuDropdown";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import appLogo from "../../assets/images/dogma-logo.jpg";

interface Props {
  handleDrawerToggle: () => void;
}

export const ToolBarHeader: React.FC<Props> = ({ handleDrawerToggle }) => {
  return (
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
          <Box pr={1}>
            <ButtonMenuDropdown />
          </Box>

          <Link target="_blank" href={`https://wa.me/+5493546477298`}>
            <Button
              startIcon={<WhatsAppIcon />}
              variant="outlined"
              color="success"
              sx={{ color: "#fff" }}
            >
              Contactanos
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </Container>
  );
};
