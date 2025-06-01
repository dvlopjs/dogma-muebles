import Link from "next/link";
import { Facebook, Instagram, X, Menu, Twitter } from "lucide-react";
import Image from "next/image";
import LogoImage from "../../assets/images/dogma-logo.jpg";
import { WhatsApp } from "@mui/icons-material";

export const Navbar = ({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
}) => {
  return (
    <div>
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-black border-l border-green-500/20 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-green-500 transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 mt-4 px-6">
          <Link
            href="#nosotros"
            className="text-lg font-medium transition-colors hover:text-green-500 py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="#trabajos"
            className="text-lg font-medium transition-colors hover:text-green-500 py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Nuestros Trabajos
          </Link>
          <Link
            href="#contacto"
            className="text-lg font-medium transition-colors hover:text-green-500 py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          <div className="flex gap-4">
            <Link
              href="#"
              className="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </nav>
      </div>

      <header className="sticky top-0 z-40  bg-black text-white backdrop-blur supports-[backdrop-filter]:bg-black/90">
        <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={LogoImage}
              alt="DOGMA Muebles"
              width={120}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Menú para pantallas medianas y grandes */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#nosotros"
              className="text-sm font-medium transition-colors hover:text-green-500"
            >
              Nosotros
            </Link>
            <Link
              href="#trabajos"
              className="text-sm font-medium transition-colors hover:text-green-500"
            >
              Nuestros Trabajos
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium transition-colors hover:text-green-500"
            >
              Contacto
            </Link>
          </nav>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-green-500 transition-colors"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-colors text-base font-medium hidden md:block">
            <span className="flex items-center gap-2">
              <WhatsApp />
              Escribinos
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};
