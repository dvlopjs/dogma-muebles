"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import Link from "next/link";

export const VolverNotFound = () => {
  return (
    <Link href={"/"}>
      <Button variant="outlined" startIcon={<ArrowBackIcon />}>
        VOLVER
      </Button>
    </Link>
  );
};
