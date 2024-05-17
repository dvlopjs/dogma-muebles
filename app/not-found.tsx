import { Typography } from "@mui/material";
import { VolverNotFound } from "./components/VolverNotFound";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <Typography variant="h5">
        Error 404 | No encontramos resultados.
      </Typography>

      <VolverNotFound />
    </div>
  );
}
