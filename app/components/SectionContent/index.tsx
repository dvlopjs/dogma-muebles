import { Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type Props = {
  inverted?: boolean | false;
  urlImage: StaticImageData;
  text: React.ReactElement;
  id?: string | undefined;
};

export const SectionContent: React.FC<Props> = ({
  inverted,
  urlImage,
  text,
  id,
}) => {
  return (
    <div id={id}>
      <Grid container alignItems={"center"} textAlign={"center"} spacing={4}>
        {inverted ? (
          <>
            <Grid item xs={12} sm={6}>
              <Image src={urlImage} alt="img" />
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
              <Image src={urlImage} alt="img" />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};
