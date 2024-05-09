"use client";
import { Box } from "@mui/material";
import { SectionContent } from "./SectionContent";
import { TextWithColor } from "./TextWithColor";
import cocinaImg from "../assets/images/cocinas/cocina1.jpg";
import { useEffect, useRef, useState } from "react";

export const Catalogs: React.FC = () => {
  return (
    <Box mt={30}>
      <SectionContent
        urlImage={cocinaImg}
        text={
          <TextWithColor
            textWithoutColor="¡Algunos de nuestros trabajos"
            textColored="sobre cocinas... !"
          />
        }
        id={"#cocinas"}
      />

      <Box mt={30}>
        <SectionContent
          urlImage={cocinaImg}
          text={
            <TextWithColor
              textWithoutColor="¡Pegále una mirada a los"
              textColored="placards y vestidores... !"
            />
          }
        />
      </Box>
    </Box>
  );
};
