import { ImageModel } from "@/app/assets/images/images";
import { Box, Grid, Hidden } from "@mui/material";

import Slide from "../Slide";
import { SeeMoreButton } from "../SeeMoreButton";

type Props = {
  inverted?: boolean | false;
  text: React.ReactElement;
  id?: string | undefined;
  images: ImageModel[];
  goTo: string;
};

export const SectionContent: React.FC<Props> = ({
  inverted,
  text,
  id,
  images,
  goTo,
}) => {
  return (
    <div id={id}>
      <Grid container alignItems={"center"} textAlign={"center"} spacing={4}>
        {inverted ? (
          <>
            <Hidden smUp>
              <Grid item xs={12} sm={6}>
                {text}
                <Box pt={3}>
                  <SeeMoreButton goTo={goTo} />
                </Box>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6}>
              <Slide images={images} />
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} sm={6}>
                {text}
                <Box pt={3}>
                  <SeeMoreButton goTo={goTo} />
                </Box>
              </Grid>
            </Hidden>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              {text}
              <Box pt={3}>
                <SeeMoreButton goTo={goTo} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Slide images={images} />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};
