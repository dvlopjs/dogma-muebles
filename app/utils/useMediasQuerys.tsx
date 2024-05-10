import { useMediaQuery, useTheme } from "@mui/material";

export const useMediasQuerys = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    downSm,
  };
};
