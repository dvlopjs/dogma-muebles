import React from "react";
import { ButtonsRedes } from "./ButtonsRedes";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center ">
          Seguinos en <ButtonsRedes />
        </div>
        <div className="flex justify-center items-center pt-3">
          <p className="text-sm">
            &copy; 2024 Dogma Muebles. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
