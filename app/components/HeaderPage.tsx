import { Box, Button } from "@mui/material";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

type Props = {
  textName: string;
};

export const HeaderPage: React.FC<Props> = ({ textName }) => {
  // const router = useRouter()
  return (
    <Box pb={10} display={"flex"} justifyContent={"space-between"}>
      <BasicBreadcrumbs text={textName} />

      <Button
        color="primary"
        size="small"
        // onClick={}
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
