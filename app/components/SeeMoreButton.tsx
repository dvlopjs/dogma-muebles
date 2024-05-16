import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
type Props = {
  goTo: string;
};
export const SeeMoreButton: React.FC<Props> = ({ goTo }) => {
  return (
    <Link href={goTo}>
      <Button variant="contained" sx={{ color: "white" }}>
        Ver más
      </Button>
    </Link>
  );
};
