import { Box, Container, Typography } from "@mui/material";
import { MainContent } from "./components/MainContent";
import Template from "./utils/template";

import { Catalogs } from "./components/Catalogs";

export default function Home() {
  return (
    <Container>
      <Template>
        <MainContent />
        <Catalogs />
      </Template>
    </Container>
  );
}
