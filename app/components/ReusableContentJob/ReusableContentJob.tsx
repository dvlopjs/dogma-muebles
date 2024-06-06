"use client";
import { Box, Card, Grid, Typography } from "@mui/material";
import SliderReusable from "../SliderReusable";
import { ImageModel } from "../../assets/images/images";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import ModalFullWindow from "../ModalFullWindow";
import { useState } from "react";
import { CardMateriales } from "./CardMateriales";
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
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={1} pb={5}>
        <LabelImportantIcon />
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
            },
            fontFamily: "fantasy",
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
          <CardMateriales
            handleOpenModal={handleOpenModal}
            url={url}
            chipArray={chipArray}
          />
        </Grid>
      </Grid>

      {openModal ? (
        <ModalFullWindow
          title={titleHeader}
          images={images}
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      ) : null}
    </>
  );
};
