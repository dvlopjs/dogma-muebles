"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export const VolverNotFound = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/")}
      variant="outlined"
      startIcon={<ArrowBackIcon />}
    >
      VOLVER
    </Button>
  );
};
