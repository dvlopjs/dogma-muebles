"use client";
import { scrollSmooth } from "@/app/utils/scrollSmooth";
import { Box, Button } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

export const ButtonVerMuebles: React.FC = () => {
  return (
    <Button
      variant="contained"
      // style={{ color: "#fff" }}
      sx={{
        color: "#fff",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
      size="large"
      onClick={() => scrollSmooth("#cocinas")}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        gap={1}
      >
        VER MUEBLES
        <ExpandCircleDownIcon />
      </Box>
    </Button>
  );
};
