"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ScrollToTopButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10),
  right: theme.spacing(2),
  zIndex: 1000,
  width: "47px",
  height: "47px",
  borderRadius: "50%",
  color: "white",
  minWidth: "auto",
  visibility: "hidden", // Empieza oculto
  transform: "scale(0)", // Empieza escala cero
  transition: "transform 0.3s ease-in-out, visibility 0.3s", // Transición suave para la animación
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const WhatsAppButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
  width: "47px",
  height: "47px",
  borderRadius: "50%",
  minWidth: "auto",
  backgroundColor: "#25d366", // Color de WhatsApp
  color: "#fff",
  "&:hover": {
    backgroundColor: "#128C7E", // Cambia de color al hacer hover
  },
}));

const handleWhatsApp = () => {
  // Agrega el enlace de WhatsApp aquí
  window.location.href = "https://wa.me/+5493546477298";
};

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 300) {
        // Mostrar el botón cuando el desplazamiento sea superior a 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ScrollToTopButton
        variant="contained"
        color="inherit"
        onClick={handleScrollToTop}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          transform: isVisible ? "scale(1)" : "scale(0)",
        }} // Hacer visible u ocultar el botón según el estado
      >
        <ArrowUpwardIcon />
      </ScrollToTopButton>
      <WhatsAppButton variant="contained" onClick={handleWhatsApp}>
        <WhatsAppIcon />
      </WhatsAppButton>
    </>
  );
}

export default ScrollToTop;
