// Images cocina
import cocina1 from "./cocinas/cocina1.jpg";
import cocina2 from "./cocinas/cocina2.jpg";
import cocina3 from "./cocinas/cocina3.jpg";
import cocina4 from "./cocinas/cocina4.jpg";
import cocina5 from "./cocinas/cocina5.jpg";
import cocina6 from "./cocinas/cocina6.jpg";
import cocina7 from "./cocinas/cocina7.jpg";
import cocina8 from "./cocinas/trabajo3/cocina8.jpg";
import cocina9 from "./cocinas/trabajo3/cocina9.jpg";
import cocina10 from "./cocinas/trabajo3/cocina10.jpg";
import cocina11 from "./cocinas/trabajo3/cocina11.jpg";

//Images habitaciones
import habitacion1 from "./habitaciones/placard1.jpg";
import habitacion2 from "./habitaciones/placard2.jpg";
import habitacion3 from "./habitaciones/placard3.jpg";
import habitacion4 from "./habitaciones/placard4.jpg";
import habitacion5 from "./habitaciones/placard5.jpg";
import habitacion6 from "./habitaciones/placard6.jpg";

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

// Nuevo array de imágenes estructurado por trabajos
export const imagesWorks: { [key: string]: { [key: string]: ImageModel[] } } = {
  cocinas: {
    trabajo1: [
      { src: cocina1, alt: "Trabajo 1 - Cocina1" },
      { src: cocina2, alt: "Trabajo 1 - Cocina2" },
      { src: cocina3, alt: "Trabajo 2 - Cocina3" },
    ],
    trabajo2: [
      { src: cocina4, alt: "Trabajo 2 - Cocina3" },
      { src: cocina5, alt: "Trabajo 2 - Cocina5" },
      { src: cocina6, alt: "Trabajo 2 - Cocina6" },
      { src: cocina7, alt: "Trabajo 2 - Cocina7" },
    ],
    trabajo3: [
      { src: cocina8, alt: "Trabajo 3 - Cocina8" },
      { src: cocina9, alt: "Trabajo 3 - Cocina9" },
      { src: cocina10, alt: "Trabajo 3 - Cocina10" },
      { src: cocina11, alt: "Trabajo 3 - Cocina11" },
    ],
    // Agrega más trabajos según sea necesario
  },
  habitaciones: {
    trabajo1: [
      { src: habitacion1, alt: "Trabajo 1 - Habitacion1" },
      { src: habitacion2, alt: "Trabajo 1 - Habitacion2" },
    ],
    trabajo2: [
      { src: habitacion3, alt: "Trabajo 2 - Habitacion3" },
      { src: habitacion4, alt: "Trabajo 2 - Habitacion4" },
    ],
    trabajo3: [
      { src: habitacion5, alt: "Trabajo 2 - Habitacion5" },
      { src: habitacion6, alt: "Trabajo 2 - Habitacion6" },
    ],
    // Aquí puedes estructurar los trabajos de habitaciones de manera similar si es necesario
  },
  otros: {
    // Aquí puedes estructurar los trabajos de otros de manera similar si es necesario
  },
};
