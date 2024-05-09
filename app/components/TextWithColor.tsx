import { Box, Typography } from "@mui/material";
import React from "react";

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
      <Typography variant="h4">{textWithoutColor}</Typography> <br />
      <Typography variant="h4" sx={{ color: " #52b788" }}>
        {textColored}
      </Typography>
    </Box>
  );
};
