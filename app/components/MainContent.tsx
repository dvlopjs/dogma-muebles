import { Box, Typography } from "@mui/material";
import React from "react";

export const MainContent: React.FC = () => {
  return (
    <>
      <Typography
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
        Descubrí muebles únicos para tu hogar.
      </Typography>
    </>
  );
};
