import { ImageModel } from "@/app/assets/images/images";
import { Grid } from "@mui/material";

import Slide from "../Slide";

type Props = {
  inverted?: boolean | false;
  text: React.ReactElement;
  id?: string | undefined;
  images: ImageModel[];
};

export const SectionContent: React.FC<Props> = ({
  inverted,
  text,
  id,
  images,
}) => {
  return (
    <div id={id}>
      <Grid container alignItems={"center"} textAlign={"center"} spacing={4}>
        {inverted ? (
          <>
            <Grid item xs={12} sm={6}>
              <Slide images={images} />
            </Grid>
            <Grid item xs={12} sm={6}>
              {text}
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              {text}
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
