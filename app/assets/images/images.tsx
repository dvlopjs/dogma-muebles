// Images cocina
import cocina1 from "./cocinas/cocina1.jpg";
import cocina2 from "./cocinas/cocina2.jpg";
import cocina3 from "./cocinas/cocina3.jpg";
import cocina4 from "./cocinas/cocina4.jpg";
import cocina5 from "./cocinas/cocina5.jpg";
import cocina6 from "./cocinas/cocina6.jpg";
import cocina7 from "./cocinas/cocina7.jpg";

//Images habitaciones
import habitacion1 from "./habitaciones/placard1.jpg";
import habitacion2 from "./habitaciones/placard2.jpg";
import habitacion3 from "./habitaciones/placard3.jpg";
import habitacion4 from "./habitaciones/placard4.jpg";

//Images otros trabajos
import otros1 from "./escritorios/escritorio1.jpg";
import otros2 from "./escritorios/escritorio2.jpg";
import { StaticImageData } from "next/image";

export type ImageModel = {
  src: StaticImageData;
  alt: string;
};

export const images: { [key: string]: ImageModel[] } = {
  cocinas: [
    { src: cocina1, alt: "Cocina1" },
    { src: cocina2, alt: "Cocina2" },
    { src: cocina3, alt: "Cocina3" },
    { src: cocina4, alt: "Cocina4" },
    { src: cocina5, alt: "Cocina5" },
    { src: cocina6, alt: "Cocina6" },
    { src: cocina7, alt: "Cocina7" },
  ],
  habitaciones: [
    { src: habitacion1, alt: "Habitacion1" },
    { src: habitacion2, alt: "habitacion2" },
    { src: habitacion3, alt: "habitacion3" },
    { src: habitacion4, alt: "habitacion4" },
  ],
  otros: [
    { src: otros1, alt: "Otros1" },
    { src: otros2, alt: "Otros2" },
  ],
};
