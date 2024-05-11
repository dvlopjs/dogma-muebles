import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

type Props = {
  text: string;
};
export default function BasicBreadcrumbs({ text }: Props) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Inicio
        </Link>

        <Typography
          sx={{
            color: "#52b788",
            textShadow: "0 0 10px #52b788",
            fontWeight: "bold",
          }}
        >
          {text}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
