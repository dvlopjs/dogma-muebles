import { Box, Container, Divider } from "@mui/material";
import React from "react";
import { imagesWorks } from "../assets/images/images";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import { ReusableContentJob } from "../components/ReusableContentJob";
import Template from "../utils/template";

//   Mobiliario de cocina con alacenas rebatibles

export default function PlacardsPage() {
  const arrayChipsJob1 = ["Melamina Blanca 18mm", "Barra oval", "Soportes"];
  const arrayChipsJob2 = [
    "Melamina Seda Notte 18mm",
    "Correderas telescópicas",
    "Perfiles de aluminio",
  ];
  return (
    <Container sx={{ paddingBottom: 20, paddingTop: 10 }}>
      <Template>
        <Box pb={10}>
          <BasicBreadcrumbs text={"Placards y vestidores"} />
        </Box>
        <Box pb={5}>
          <ReusableContentJob
            titleHeader="Vestidor Total White"
            chipArray={arrayChipsJob1}
            images={imagesWorks.habitaciones.trabajo1}
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Amoblamiento integral"
            chipArray={arrayChipsJob2}
            images={imagesWorks.habitaciones.trabajo2}
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Mobiliario de cocina color Gaudí"
            chipArray={arrayChipsJob2}
            images={imagesWorks.habitaciones.trabajo3}
          />
        </Box>
      </Template>
    </Container>
  );
}
