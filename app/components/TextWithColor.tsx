import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactTyped } from "react-typed";

type Props = {
  textWithoutColor: string;
  textColored: string;
};

export const TextWithColor: React.FC<Props> = ({
  textWithoutColor,
  textColored,
}) => {
  return (
    <Box>
      <Typography
        variant="h4"
        style={{
          textShadow: "4px 4px 3px rgba(0, 0, 0, 0.3)",
        }}
      >
        {textWithoutColor}
      </Typography>{" "}
      <br />
      <ReactTyped
        typeSpeed={50}
        backSpeed={35}
        style={{
          color: " #52b788",
          fontSize: "2rem",
          textShadow: "0 0 5px #52b788, 0 0 15px #52b788, 0 0 20px #52b788",
        }}
        strings={[textColored]}
      ></ReactTyped>
    </Box>
  );
};
