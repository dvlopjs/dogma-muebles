import { Box, Container } from "@mui/material";
import React from "react";
import { imagesWorks } from "../assets/images/images";
import { ReusableContentJob } from "../components/ReusableContentJob/ReusableContentJob";
import Template from "../utils/template";
import { HeaderPage } from "../components/HeaderPage";

//   Mobiliario de cocina con alacenas rebatibles

export default function PlacardsPage() {
  const arrayChipsJob1 = ["Melamina Blanca 18mm", "Barra oval", "Soportes"];
  const arrayChipsJob2 = [
    "Melamina Seda Notte 18mm",
    "Correderas telescópicas",
    "Perfiles de aluminio",
  ];
  const arrayChipsJob3 = [
    "Melamina Olmo finlandés",
    "Perfil tirador euro classic negro",
    "Bisagras hafele cierre suave",
    "Correderas telescópicas hafele",
  ];
  return (
    <Container sx={{ paddingBottom: 20, paddingTop: 10 }}>
      <Template>
        <HeaderPage textName="Placards y vestidores" />
        <Box pb={5}>
          <ReusableContentJob
            titleHeader="Vestidor Total White"
            chipArray={arrayChipsJob1}
            images={imagesWorks.habitaciones.trabajo1}
            url={"https://www.instagram.com/p/Czzts0apt4Y/?img_index=1"}
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Amoblamiento integral"
            chipArray={arrayChipsJob2}
            images={imagesWorks.habitaciones.trabajo2}
            url={"https://www.instagram.com/p/C0uaht8P6kd/?img_index=1"}
          />
        </Box>
      </Template>

      <Template>
        <Box pt={25} pb={5}>
          <ReusableContentJob
            titleHeader="Baúleras y torres de guardado mixto"
            chipArray={arrayChipsJob3}
            images={imagesWorks.habitaciones.trabajo3}
            url="https://www.instagram.com/p/CuvAh9XPB48/?img_index=2"
          />
        </Box>
      </Template>
    </Container>
  );
}
