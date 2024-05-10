"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { goToAnotherSite } from "@/app/utils/goToAnotherSite";

export const ButtonsRedes: React.FC = () => {
  const [hovered, setHovered] = useState({
    ig: false,
    facebook: false,
    github: false,
  });

  return (
    <>
      <IconButton
        style={{
          background: "transparent",
          color: hovered.ig ? "#C13584" : "inherit",
        }}
        onClick={() =>
          goToAnotherSite("https://www.instagram.com/dogma.muebles/")
        }
        onMouseLeave={() => setHovered({ ...hovered, ig: false })}
        onMouseEnter={() => setHovered({ ...hovered, ig: true })}
      >
        <InstagramIcon />
      </IconButton>
      |
      <IconButton
        style={{
          color: hovered.facebook ? "#1877F2" : "inherit",
          background: "transparent",
        }}
        onClick={() => goToAnotherSite("https://www.facebook.com/mueblesdogma")}
        onMouseLeave={() => setHovered({ ...hovered, facebook: false })}
        onMouseEnter={() => setHovered({ ...hovered, facebook: true })}
      >
        <FacebookIcon />
      </IconButton>
      |
      <IconButton
        style={{
          color: hovered.github ? "#FFA500" : "inherit",
          background: "transparent",
        }}
        onMouseLeave={() => setHovered({ ...hovered, github: false })}
        onMouseEnter={() => setHovered({ ...hovered, github: true })}
      >
        <GitHubIcon />
      </IconButton>
    </>
  );
};
