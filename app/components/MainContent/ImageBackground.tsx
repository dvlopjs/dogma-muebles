import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import BackgroundImage2 from "../../assets/images/BackgroundImage.jpg";

export const ImageBackground: React.FC = () => {
  return (
    <section className="relative">
      <div className="h-[70vh] w-full relative">
        <Image
          src={BackgroundImage2}
          alt="Muebles artesanales a medida"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container absolute inset-0 flex flex-col items-start justify-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Muebles Artesanales
            <br />
            <span className="text-amber-400">Hechos para Durar</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-gray-200">
            Muebles a medida fabricados con precisión y pasión. Desde cocinas
            hasta baños, hacemos realidad tu visión.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Ver Nuestros Trabajos
            </Button>
            <Button
              variant="outlined"
              className="text-white border-white hover:bg-white/10"
            >
              Contactanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
