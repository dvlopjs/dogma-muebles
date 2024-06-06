import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import { ChipList } from "../ChipsList";
import { InstagramButton } from "../InstagramButton";
import { VerPantallaCompletaButton } from "../VerPantallaCompletaButton";
interface Props {
  chipArray: Array<string>;
  url: string;
  handleOpenModal: () => void;
}
export const CardMateriales: React.FC<Props> = ({
  chipArray,
  url,
  handleOpenModal,
}) => {
  return (
    <Card
      elevation={5}
      sx={{
        boxShadow:
          "0px 4px 15px rgba(255, 255, 255, 0.3), 0px 2px 10px rgba(255, 255, 255, 0.2)", // Sombra brillante
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)", // Gradiente de grises muy oscuros
        color: "white",
      }}
    >
      <CardContent>
        <Box pt={2} pb={1} display={"flex"} alignItems={"center"} gap={1}>
          <HandymanIcon />

          <Typography variant="h6">Materiales que utilizamos</Typography>
        </Box>
        <Box pb={2}>
          <Divider />
        </Box>

        <ChipList chips={chipArray} />

        <Box pt={2}>
          <Divider />
        </Box>

        <Box pt={3} display={"flex"} pl={1} justifyContent={"start"}>
          <InstagramButton url={url} />
        </Box>

        <Box pt={3} display={"flex"} pl={1} justifyContent={"start"}>
          <VerPantallaCompletaButton handleOpenModal={handleOpenModal} />
        </Box>
      </CardContent>
    </Card>
  );
};
