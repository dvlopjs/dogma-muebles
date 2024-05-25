"use client";
import { Typography } from "@mui/material";
import React from "react";
import { ReactTyped } from "react-typed";

export const SubtitleStyled: React.FC = () => {
  return (
    <Typography
      align="center"
      variant="h5"
      fontWeight="bold"
      pt={10}
      sx={{
        fontSize: {
          xs: "1rem",
          sm: "1.5rem",
        },

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
  );
};
