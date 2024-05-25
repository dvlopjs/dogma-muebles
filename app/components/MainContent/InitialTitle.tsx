import { Typography } from "@mui/material";

export const InitialTitle = () => {
  return (
    <Typography
      pt={10}
      pb={5}
      align="center"
      variant="h1"
      fontWeight="bold"
      sx={{
        fontSize: {
          sm: "3rem",
          xs: "2.5rem",
        },
        color: "white",
        textShadow: "4px 4px 9px rgba(0, 0, 0, 0.7)",
      }}
    >
      ¡Transformá tus espacios con nosotros!
    </Typography>
  );
};
