import { Box, Button, Container, Divider } from "@mui/material";
import React from "react";
import { imagesWorks } from "../assets/images/images";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import { ReusableContentJob } from "../components/ReusableContentJob/ReusableContentJob";
import Template from "../utils/template";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HeaderPage } from "../components/HeaderPage";

//   Mobiliario de cocina con alacenas rebatibles

export default function CocinasPage() {
  const arrayChipsJob1 = [
    "Melamina color venezia",
    "Herrajes de primera calidad",
    "Perfil tirador de aluminio",
    "Granito negro Brasil",
  ];
  const arrayChipsJob2 = [
    "Melamina color Gaudí",
    "Correderas telescópicas cierre suave",
    "Bisagras cierre suave",
    "Granito negro Brasil",
  ];
  const arrayChipsJob3 = [
    "Melamina blanca ",
    "Perfilería de aluminio negra",
    " Granito Franco veteado",
    "Correderas telescópicas ",
    "Bisagras sistema cierre suave",
  ];
  return (
    <Container sx={{ paddingBottom: 20, paddingTop: 10 }}>
      <Template>
        <HeaderPage textName="Cocinas" />
        <Box pb={5}>
          <ReusableContentJob
            titleHeader="Mobiliario de cocina con alacenas rebatibles"
            chipArray={arrayChipsJob1}
            images={imagesWorks.cocinas.trabajo1}
            url="https://www.instagram.com/p/CnIVBX3vQ3E/?img_index=1"
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Mobiliario de cocina color Gaudí"
            chipArray={arrayChipsJob2}
            images={imagesWorks.cocinas.trabajo2}
            url="https://www.instagram.com/p/B5Ja7JUHbKB/?img_index=1"
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Mobiliario de cocina - Black & White"
            chipArray={arrayChipsJob3}
            images={imagesWorks.cocinas.trabajo3}
            url="https://www.instagram.com/p/C3Tm3tysJq5/?img_index=1"
          />
        </Box>
      </Template>
    </Container>
  );
}
