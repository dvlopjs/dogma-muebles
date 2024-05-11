import { Box, Chip, Grid } from "@mui/material";
import React from "react";

type ChipListProps = {
  chips: Array<string>;
};

export const ChipList: React.FC<ChipListProps> = ({ chips }) => {
  return (
    <Grid container spacing={2}>
      {chips.map((chip, index) => (
        <Grid item xs={12} md={2} key={index}>
          <Chip variant="outlined" color="primary" label={chip} />
        </Grid>
      ))}
    </Grid>
  );
};
