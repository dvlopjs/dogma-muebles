import React from "react";
import { ButtonsRedes } from "./ButtonsRedes";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container">
        <div className="flex justify-center items-center ">
          Seguinos en <ButtonsRedes />
        </div>
        <div className="flex justify-center text-center items-center pt-3">
          <p className="text-sm text-center">
            &copy; 2024 DogmaInc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
