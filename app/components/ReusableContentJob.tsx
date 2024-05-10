import { Box, Divider, Typography } from "@mui/material";
import SliderReusable from "./SliderReusable";
import { ImageModel } from "../assets/images/images";
import HandymanIcon from "@mui/icons-material/Handyman";
import { ChipList } from "./ChipsList";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
type Props = {
  titleHeader: string;
  images: ImageModel[];
  chipArray: Array<string>;
};

export const ReusableContentJob: React.FC<Props> = ({
  titleHeader,
  images,
  chipArray,
}) => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={1}>
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

      <SliderReusable images={images} />
      <Box pt={2} pb={1} display={"flex"} alignItems={"center"} gap={1}>
        <HandymanIcon />
        <Typography variant="h6">Los materiales que utilizamos:</Typography>
      </Box>
      <Box pb={2}>
        <Divider />
      </Box>
      <ChipList chips={chipArray} />
    </>
  );
};
