import { Box, Container, Divider, Typography } from "@mui/material";
import { MainContent } from "./components/MainContent/MainContent";

import { Catalogs } from "./components/Catalogs";
import Animate from "./utils/animate";
import TestimonialSlider from "./components/SlideUsuarios";
import { testimonials } from "./components/SlideUsuarios/testimonios";
import LeftToRightAnimate from "./utils/LeftToRightAnimate";
import ScrollToTop from "./utils/ScrollToTopButton";

export default function Home() {
  return (
    <Container>
      <Animate>
        <MainContent />

        <Box pt={10}>
          <Divider
            sx={{
              width: "80%",
              margin: "0 auto",
              borderColor: "white",
              borderWidth: "1px",
            }}
          />
        </Box>
      </Animate>
      <Catalogs />

      <LeftToRightAnimate>
        <Box pb={20} pt={20}>
          <Box className="customTitleContainer">
            <Typography variant="h4" className="customTitle">
              Clientes felices, nosotros satisfechos...
            </Typography>
          </Box>
          <Box pt={2}>
            <TestimonialSlider testimonials={testimonials} />
          </Box>
        </Box>
      </LeftToRightAnimate>
      {/* <ScrollToTop /> */}
    </Container>
  );
}
