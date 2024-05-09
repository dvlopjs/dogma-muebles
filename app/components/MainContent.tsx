"use client";
import { Box, Button, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import React from "react";
import { scrollSmooth } from "../utils/scrollSmooth";
import { ReactTyped } from "react-typed";
export const MainContent: React.FC = () => {
  return (
    <>
      <Typography
        pt={10}
        align="center"
        variant="h3"
        fontWeight="bold"
        style={{
          color: "white",
          textShadow: "4px 4px 9px rgba(0, 0, 0, 0.7)",
        }}
      >
        ¡Transformá tus espacios con nosotros!
      </Typography>

      <Typography
        align="center"
        variant="h5"
        fontWeight="bold"
        style={{
          paddingTop: 10,
          //   fontFamily: "Arial, sans-serif",
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
