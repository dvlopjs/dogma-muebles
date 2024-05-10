import { Box, Container, Divider } from "@mui/material";
import React from "react";
import { imagesWorks } from "../assets/images/images";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import { ReusableContentJob } from "../components/ReusableContentJob";
import Template from "../utils/template";

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
  return (
    <Container sx={{ paddingBottom: 20, paddingTop: 10 }}>
      <Template>
        <Box pb={10}>
          <BasicBreadcrumbs text={"Cocinas"} />
        </Box>
        <Box pb={5}>
          <ReusableContentJob
            titleHeader="Mobiliario de cocina con alacenas rebatibles"
            chipArray={arrayChipsJob1}
            images={imagesWorks.cocinas.trabajo1}
          />
        </Box>
      </Template>

      <Template>
        <Box pt={15} pb={5}>
          <ReusableContentJob
            titleHeader="Mobiliario de cocina color Gaudí"
            chipArray={arrayChipsJob2}
            images={imagesWorks.cocinas.trabajo2}
          />
        </Box>
      </Template>
    </Container>
  );
}
