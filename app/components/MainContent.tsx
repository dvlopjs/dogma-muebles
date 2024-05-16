"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import React from "react";
import { scrollSmooth } from "../utils/scrollSmooth";
import { ReactTyped } from "react-typed";
import { useMediasQuerys } from "../utils/useMediasQuerys";
import Image from "next/image";
import DogmaLogo from "../assets/images/dogma-logo.jpg";
import { LogoMain } from "./LogoMain";
export const MainContent: React.FC = () => {
  const { downSm } = useMediasQuerys();

  return (
    <>
      <LogoMain />
      <Typography
        pt={5}
        align="center"
        variant="h1"
        fontWeight="bold"
        style={{
          fontSize: downSm ? "2.5rem" : "3rem",
          color: "white",
          textShadow: "4px 4px 9px rgba(0, 0, 0, 0.7)",
        }}
      >
        ¡Transformá tus espacios con nosotros!
      </Typography>

      <Typography color={"#F0F9E6"} padding={5} textAlign={"center"}>
        Carpintería en melamina, diseños propios y trabajos a medida, contamos
        con herramientas de diseño modernas que nos permiten realizar una
        recreacion fiel del espacio a trabajar y anticiparnos al resultado
        final.
      </Typography>

      <Typography
        align="center"
        variant="h5"
        fontWeight="bold"
        style={{
          paddingTop: 10,
          fontSize: downSm ? "1rem" : "1.5rem",

          color: "#52b788",
          textShadow: "4px 4px 9px rgba(0, 0, 0, 0.7)",
        }}
      >
        Descubrí muebles{" "}
        <ReactTyped
          strings={["únicos", "a medida"]}
          loop
          typeSpeed={60}
          backSpeed={40}
        />{" "}
        para tu hogar.
      </Typography>

      <Box pt={5} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          // style={{ color: "#fff" }}
          sx={{
            color: "#fff",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
          onClick={() => scrollSmooth("#cocinas")}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={1}
          >
            VER MUEBLES
            <ExpandCircleDownIcon />
          </Box>
        </Button>
      </Box>
    </>
  );
};
