import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DOGMA Muebles - Muebles a Medida Hechos a Mano",
  description:
    "Muebles artesanales a medida hechos para durar toda la vida. Especialistas en cocinas, baños, placares y espacios de living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
