import { Button } from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

type Props = {
  handleOpenModal: () => void;
};

export const VerPantallaCompletaButton: React.FC<Props> = ({
  handleOpenModal,
}) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="inherit"
      onClick={handleOpenModal}
      startIcon={<ZoomOutMapIcon />}
    >
      Ver en pantalla completa
    </Button>
  );
};
