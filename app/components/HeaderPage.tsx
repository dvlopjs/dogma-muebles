import { Box, Button } from "@mui/material";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {
  textName: string;
};

export const HeaderPage: React.FC<Props> = ({ textName }) => {
  return (
    <Box pb={10} display={"flex"} justifyContent={"space-between"}>
      <BasicBreadcrumbs text={textName} />

      <Button
        color="primary"
        size="small"
        href="/"
        variant="contained"
        sx={{ color: "inherit" }}
        startIcon={<ArrowBackIcon />}
      >
        Regresar
      </Button>
    </Box>
  );
};
