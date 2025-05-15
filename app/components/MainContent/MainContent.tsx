import { Box, Divider, Grid, Typography, Container } from "@mui/material";
import React from "react";
import BackgroundImage2 from "../../assets/images/BackgroundImage2.jpg";
import { LogoMain } from "../LogoMain";
import Image from "next/image";
import { ButtonVerMuebles } from "./ButtonVerMuebles";
import { SubtitleStyled } from "./SubtitleStyled";
import { InitialTitle } from "./InitialTitle";
import { LinksRedes } from "./LinksRedes";
import { ImageBackground } from "./ImageBackground";
export const MainContent: React.FC = () => {
  return (
    <>
      {/* <InitialTitle /> */}
      {/* <Box display={"flex"} justifyContent={"center"}>
        <Divider sx={{ width: "80%" }} />
      </Box> */}

      {/* <Grid container> */}
      {/* <Grid item xs={12} md={12}> */}
      {/* <Box pt={5} pb={5}>
        <div
          className="w-full"
          style={{ position: "relative", width: "100%", height: "700px" }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: 0,
            }}
            quality={80}
            fill
            src={BackgroundImage2}
            alt="Dogma Muebles"
          />
        </div>
      </Box> */}
      <ImageBackground />
      {/* </Grid> */}
      {/* <Grid item xs={12} md={6}>
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
        </Grid> */}
      {/* </Grid> */}

      <SubtitleStyled />

      <Box pt={5} display={"flex"} justifyContent={"center"}>
        <ButtonVerMuebles />
      </Box>
    </>
  );
};
