import { Box, Chip } from "@mui/material";
import React from "react";

type ChipListProps = {
  chips: Array<string>;
};

export const ChipList: React.FC<ChipListProps> = ({ chips }) => {
  return (
    <Box display={"flex"} gap={2}>
      {chips.map((chip, index) => (
        <Chip key={index} variant="outlined" color="primary" label={chip} />
      ))}
    </Box>
  );
};
