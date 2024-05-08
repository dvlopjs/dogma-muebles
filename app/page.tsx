import { Container, Typography } from "@mui/material";
import Header from "./components/Header";
import { MainContent } from "./components/MainContent";
import Template from "./utils/template";

export default function Home() {
  return (
    <Container>
      <Template>
        <MainContent />
      </Template>
    </Container>
  );
}
