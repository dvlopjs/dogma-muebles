import { Box, Typography } from "@mui/material";
import React from "react";

export const LogoMain: React.FC = () => {
  return (
    <Box
      pt={10}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography
        textAlign={"center"}
        variant="h3"
        pb={1}
        fontFamily={"revert-layer"}
      >
        DOGMA
      </Typography>
      <div style={{ textAlign: "center", color: "rgb(82, 183, 136)" }}>
        <span style={{ display: "inline-block", width: "25px" }}>M</span>
        <span style={{ display: "inline-block", width: "25px" }}>u</span>
        <span style={{ display: "inline-block", width: "25px" }}>e</span>
        <span style={{ display: "inline-block", width: "25px" }}>b</span>
        <span style={{ display: "inline-block", width: "25px" }}>l</span>
        <span style={{ display: "inline-block", width: "25px" }}>e</span>
        <span style={{ display: "inline-block", width: "25px" }}>s</span>
      </div>
    </Box>
  );
};
