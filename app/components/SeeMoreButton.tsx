import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
export const SeeMoreButton: React.FC = () => {
  return (
    <Link href={"cocinas"}>
      <Button variant="contained" sx={{ color: "white" }}>
        Ver más
      </Button>
    </Link>
  );
};
