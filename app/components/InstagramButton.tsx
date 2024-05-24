import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

type Props = {
  url: string;
};
export const InstagramButton: React.FC<Props> = ({ url }) => {
  return (
    <Button
      variant="outlined"
      href={url}
      target="_blank"
      endIcon={<InstagramIcon />}
      size="small"
      style={{
        border: "2px solid",
        borderImageSlice: 1,
        borderImageSource:
          "linear-gradient(45deg, #833AB4, #FD1D1D, #F56040, #FFDC80)",
        color: "#fff",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(225, 48, 108, 0.1)"; // Fondo más claro al hacer hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent"; // Fondo transparente al salir del hover
      }}
    >
      VER EN INSTAGRAM
    </Button>
  );
};
