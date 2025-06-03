import Image from "next/image";

import BackgroundImage from "./assets/images/BackgroundImage.jpg";
import Link from "next/link";

export const MainSection = () => {
  return (
    <>
      <section className="relative">
        <div className="h-[100vh] w-full relative">
          <Image
            src={BackgroundImage}
            alt="Muebles artesanales a medida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto absolute inset-0 flex flex-col items-start justify-center text-white px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Muebles
              <br />
              <span className="text-green-500">Hechos para Durar...</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-gray-200">
              Muebles a medida fabricados con precisión y pasión. Desde cocinas
              hasta baños, hacemos realidad tu visión.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#trabajos"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors text-base font-medium"
              >
                Ver Nuestros Trabajos
              </Link>
              <Link
                href="#contacto"
                className="border border-white text-white hover:bg-white/10 py-3 px-6 rounded-md transition-colors text-base font-medium"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
