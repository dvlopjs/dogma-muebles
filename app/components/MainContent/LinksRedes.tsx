import { Facebook } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";

export const LinksRedes: React.FC = () => {
  return (
    <>
      <Typography
        color={"beige"}
        align="center"
        fontFamily={"fantasy"}
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        SEGUINOS TAMBIEN EN{" "}
        <Link href={"https://www.instagram.com/dogma.muebles/"} target="_blank">
          <IconButton size="small">
            <Instagram fontSize="large" />
          </IconButton>{" "}
        </Link>
        |{" "}
        <Link target="_blank" href="https://www.facebook.com/mueblesdogma">
          <IconButton size="small">
            <Facebook fontSize="large" />
          </IconButton>
        </Link>
      </Typography>
    </>
  );
};
