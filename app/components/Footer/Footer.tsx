import React from "react";
import { ButtonsRedes } from "./ButtonsRedes";
import { Box } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <Box display={"flex"} justifyContent={"center"}>
        <div className="container">
          <div className="flex justify-center items-center ">
            Seguinos en <ButtonsRedes />
          </div>

          <div className="flex justify-center items-center pb-1 pt-1 gap-1">
            <PhoneAndroidIcon fontSize="small" />{" "}
            <p className="text-sm">Contactanos +5493546477298</p>
          </div>

          <div className="flex justify-center items-center pb-1 pt-3 gap-1">
            <EmailIcon fontSize="small" />{" "}
            <p className="text-sm">dogmamuebles@hotmail.com</p>
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
