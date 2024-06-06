import { Box, Button, Container, Divider } from "@mui/material";
import React from "react";
import { imagesWorks } from "../assets/images/images";
import { ReusableContentJob } from "../components/ReusableContentJob/ReusableContentJob";
import Template from "../utils/template";
import { HeaderPage } from "../components/HeaderPage";

//   Mobiliario de cocina con alacenas rebatibles

export default function OtrosPage() {
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
    "Exhibidor con estantes regulables",
    "Mostrador",
    "Estantes flotantes",
    "Cubos multipropósito",
  ];
  const arrayChipsJob4 = [
    "Melamina blanca 18mm sobre MDF",
    "Correderas telescópicas",
    "Fondos macizos",
  ];
  return (
    <Container sx={{ paddingBottom: 20, paddingTop: 10 }}>
      <Template>
        <HeaderPage textName="Otros trabajos" />
        <Box pb={5}>
          <ReusableContentJob
            titleHeader="Remodelación zapatería de la zona"
            chipArray={arrayChipsJob3}
            images={imagesWorks.otros.trabajo3}
            url="https://www.instagram.com/p/C3Tm3tysJq5/?img_index=1"
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Vestidor aéreo + Mueble de guardado mixto"
            chipArray={arrayChipsJob2}
            images={imagesWorks.otros.trabajo2}
            url="https://www.instagram.com/p/Cc3sMfhvzrX/?img_index=1"
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Despensero realizado a medida"
            chipArray={arrayChipsJob4}
            images={imagesWorks.otros.trabajo4}
            url="https://www.instagram.com/p/CDU-WGHHdad/?img_index=1"
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Puerta divisora de ambientes - Kit corredizo estilo granero"
            chipArray={arrayChipsJob1}
            images={imagesWorks.otros.trabajo1}
            url="https://www.instagram.com/p/Co8MWC1PWUD/?img_index=1"
          />
        </Box>
      </Template>
    </Container>
  );
}
