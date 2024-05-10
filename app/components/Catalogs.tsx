"use client";
import { Box, Divider } from "@mui/material";
import { SectionContent } from "./SectionContent";
import { TextWithColor } from "./TextWithColor";
import { images } from "../assets/images/images";

export const Catalogs: React.FC = () => {
  return (
    <Box mt={30}>
      <SectionContent
        images={images.cocinas}
        text={
          <TextWithColor
            textWithoutColor="Algunos de nuestros trabajos"
            textColored="sobre cocinas... "
          />
        }
        id={"#cocinas"}
      />

      <Box mt={20}>
        <SectionContent
          inverted={true}
          images={images.habitaciones}
          text={
            <TextWithColor
              textWithoutColor="Pegále una mirada a los"
              textColored="placards y vestidores... "
            />
          }
        />
      </Box>

      <Box mt={20} pb={10}>
        <SectionContent
          images={images.otros}
          text={
            <TextWithColor
              textWithoutColor="Un poco más de nuestros trabajos y sobre todo"
              textColored="clientes satisfechos..."
            />
          }
        />
      </Box>
    </Box>
  );
};
