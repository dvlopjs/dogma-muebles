import React from "react";
import { ButtonsRedes } from "./ButtonsRedes";
import { Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <Box display={"flex"} justifyContent={"center"}>
        <div className="container">
          <div className="flex justify-center items-center ">
            Seguinos en <ButtonsRedes />
          </div>

          <div className="flex justify-center items-center pb-1 pt-1 gap-1">
            <PhoneAndroidIcon fontSize="small" /> Contactanos +5493546477298
          </div>

          <div className="flex justify-center text-center items-center pt-3">
            <p className="text-sm text-center">
              &copy; 2024 DogmaInc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </Box>
    </footer>
  );
};
