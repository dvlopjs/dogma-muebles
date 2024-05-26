import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import DogmaMain from "../../assets/images/DogmaMain.jpg";
import { LogoMain } from "../LogoMain";
import Image from "next/image";
import { ButtonVerMuebles } from "./ButtonVerMuebles";
import { SubtitleStyled } from "./SubtitleStyled";
import { InitialTitle } from "./InitialTitle";
import { LinksRedes } from "./LinksRedes";
export const MainContent: React.FC = () => {
  return (
    <>
      <InitialTitle />
      <Box display={"flex"} justifyContent={"center"}>
        <Divider sx={{ width: "80%" }} />
      </Box>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Box pt={5} pb={5} display={"flex"} justifyContent={"center"}>
            <Image
              style={{
                borderRadius: "5%",
                border: "2px solid #555555", // Borde gris oscuro
                boxShadow:
                  "0 0 10px #555555, 0 0 20px #555555, 0 0 30px #555555", // Sombra suave gris oscuro
              }}
              width={450}
              height={450}
              src={DogmaMain}
              alt="Dogma Muebles"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <LogoMain />
          <Box pt={2} display={"flex"} justifyContent={"center"}>
            <Divider sx={{ width: "50%" }} />
          </Box>
          <Typography
            variant="h6"
            color={"#F0F9E6"}
            padding={5}
            textAlign={"center"}
          >
            Carpintería en melamina, diseños propios y trabajos a medida,
            contamos con herramientas de diseño modernas que nos permiten
            realizar una recreacion fiel del espacio a trabajar y anticiparnos
            al resultado final.
          </Typography>
          <Box pt={1}>
            <LinksRedes />
          </Box>
        </Grid>
      </Grid>

      <SubtitleStyled />

      <Box pt={5} display={"flex"} justifyContent={"center"}>
        <ButtonVerMuebles />
      </Box>
    </>
  );
};
