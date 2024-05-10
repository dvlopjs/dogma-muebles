import { Box, Container, Divider, Typography } from "@mui/material";
import { MainContent } from "./components/MainContent";
import Template from "./utils/template";

import { Catalogs } from "./components/Catalogs";

export default function Home() {
  return (
    <Container>
      <Template>
        <MainContent />
        <Box pt={10}>
          <Divider
            sx={{
              width: "80%", // Ancho del Divider
              margin: "0 auto", // Centrar el Divider
              borderColor: "white", // Color verde matrix
              borderWidth: "1px", // Grosor del Divider
            }}
          />
        </Box>
        <Catalogs />
      </Template>
    </Container>
  );
}
