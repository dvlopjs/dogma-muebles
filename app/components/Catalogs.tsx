"use client";
import { Box, Divider } from "@mui/material";
import { SectionContent } from "./SectionContent";
import { TextWithColor } from "./TextWithColor";
import { images } from "../assets/images/images";
import Template from "../utils/template";

export const Catalogs: React.FC = () => {
  return (
    <Box mt={30}>
      <Template>
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
      </Template>
      <Box mt={20}>
        <Template>
          <SectionContent
            inverted={true}
            images={images.habitaciones}
            text={
              <TextWithColor
                textWithoutColor="Pegále una mirada a los"
                textColored="placards y vestidores... "
              />
            }
            id={"#habitaciones"}
          />
        </Template>
      </Box>

      <Box mt={20} pb={10}>
        <Template>
          <SectionContent
            images={images.otros}
            text={
              <TextWithColor
                textWithoutColor="Un poco más de nuestros trabajos y sobre todo"
                textColored="clientes satisfechos..."
              />
            }
          />
        </Template>
      </Box>
    </Box>
  );
};
