import { Box, Button, Hidden, IconButton } from "@mui/material";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

type Props = {
  textName: string;
};

export const HeaderPage: React.FC<Props> = ({ textName }) => {
  return (
    <Box
      pb={10}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <BasicBreadcrumbs text={textName} />

      <Hidden smDown>
        <Link href={"/"}>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={{ color: "inherit" }}
            startIcon={<ArrowBackIcon />}
          >
            Regresar
          </Button>
        </Link>
      </Hidden>

      <Hidden smUp>
        <Link href={"/"}>
          <IconButton size="large" color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </Hidden>
    </Box>
  );
};
