"use client";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import SliderReusable from "./SliderReusable";
import { ImageModel } from "../assets/images/images";
import HandymanIcon from "@mui/icons-material/Handyman";
import { ChipList } from "./ChipsList";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { InstagramButton } from "./InstagramButton";
type Props = {
  titleHeader: string;
  images: ImageModel[];
  chipArray: Array<string>;
  url: string;
};

export const ReusableContentJob: React.FC<Props> = ({
  titleHeader,
  images,
  chipArray,
  url,
}) => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={1} pb={5}>
        <LabelImportantIcon />
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            textShados: "4px 4px 9px rgba(0, 0, 0, 0.7)",
          }}
        >
          {titleHeader}
        </Typography>
      </Box>
      <Grid
        container
        spacing={6}
        display={"flex"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Grid item xs={12} md={7}>
          <SliderReusable images={images} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box pt={2} pb={1} display={"flex"} alignItems={"center"} gap={1}>
            <HandymanIcon />

            <Typography variant="h6">Los materiales que utilizamos</Typography>
          </Box>
          <Box pb={2}>
            <Divider />
          </Box>

          <ChipList chips={chipArray} />
          <Box pt={5} display={"flex"} pl={1} justifyContent={"start"}>
            <InstagramButton url={url} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};