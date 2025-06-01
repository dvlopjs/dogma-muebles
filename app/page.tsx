"use client";
import LogoImage from "./assets/images/dogma-logo.jpg";
import Image from "next/image";
import { images } from "./assets/images/cocinas/trabajo1/index";
import { imagesPlacares } from "./assets/images/habitaciones/trabajo1/index";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  Twitter,
  X,
} from "lucide-react";
import { useState } from "react";
import { WhatsApp } from "@mui/icons-material";
import { imagesOtros } from "./assets/images/otros/trabajo1";

import { MainSection } from "./main-section";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("cocinas");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Menú móvil */}

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
          <a
            target="_blank"
            href="https://wa.me/5493546477298"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-colors text-base font-medium hidden md:block"
          >
            <span className="flex items-center gap-2">
              <WhatsApp />
              Escribinos
            </span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <MainSection />

        <section
          id="nosotros"
          className="py-16 md:py-24 bg-neutral-900 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-neutral-900/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] p-8 transition-all duration-300 hover:shadow-[0_6px_40px_rgba(0,0,0,0.5)] grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Artesanía en Cada Detalle
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Durante más de 20 años, hemos creado muebles a medida que
                  combinan la artesanía tradicional con el diseño moderno. Cada
                  pieza está meticulosamente elaborada en nuestro taller
                  utilizando los mejores materiales.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Nos especializamos en cocinas a medida, baños, placares y
                  muebles que transforman tu espacio y perduran en el tiempo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-500">
                  Materiales de Primera Calidad
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Madera Maciza",
                      description: "Roble, Cedro, Pino, Paraíso",
                      icon: "🌳",
                    },
                    {
                      name: "MDF Premium",
                      description: "Fibra de densidad media de alta calidad",
                      icon: "📋",
                    },
                    {
                      name: "Melamina",
                      description: "Variedad de colores y texturas",
                      icon: "🎨",
                    },
                    {
                      name: "Enchapados",
                      description: "Finas láminas de madera natural",
                      icon: "🪵",
                    },
                    {
                      name: "Herrajes",
                      description: "Bisagras, correderas y manijas premium",
                      icon: "🔧",
                    },
                    {
                      name: "Vidrios",
                      description: "Templados, laminados y decorativos",
                      icon: "💎",
                    },
                    {
                      name: "Acero Inoxidable",
                      description: "Para cocinas y baños",
                      icon: "⚡",
                    },
                    {
                      name: "Lacas y Barnices",
                      description: "Acabados de alta durabilidad",
                      icon: "✨",
                    },
                  ].map((material, index) => (
                    <div
                      key={index}
                      className="bg-neutral-800 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{material.icon}</span>
                        <div>
                          <h4 className="font-semibold text-white mb-1">
                            {material.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {material.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <p className="text-sm text-green-400 font-medium mb-2">
                    ✓ Garantía de Calidad
                  </p>
                  <p className="text-sm text-gray-300">
                    Todos nuestros materiales son seleccionados cuidadosamente y
                    cumplen con los más altos estándares de calidad y
                    durabilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="trabajos" className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Nuestra Artesanía
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explorá nuestro portfolio de proyectos de muebles a medida para
                diferentes espacios.
              </p>
            </div>

            {/* Tabs navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-neutral-800 rounded-md p-1">
                {["cocinas", "placares", "varios"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === tab
                        ? "bg-green-600 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {tab === "cocinas"
                      ? "Cocinas"
                      : tab === "placares"
                      ? "Placares"
                      : "Varios"}
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs content */}
            <div className="space-y-8">
              {activeTab === "cocinas" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((item) => (
                    <div key={item.id} className=" rounded-lg overflow-hidden">
                      <div className="relative h-80 sm:h-[500px]">
                        <Image
                          src={item.image}
                          alt={`Diseño de cocina ${item}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "banos" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-neutral-800 rounded-lg overflow-hidden"
                    >
                      <div className="relative h-64">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Baño+${item}`}
                          alt={`Diseño de baño ${item}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-white">
                          Baño de Lujo {item}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Vanitorys y soluciones de almacenamiento a medida
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "placares" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {imagesPlacares.map((item) => (
                    <div
                      key={item.id}
                      className="bg-neutral-800 rounded-lg overflow-hidden"
                    >
                      <div className="relative h-80 sm:h-[500px]">
                        <Image
                          src={item.image}
                          alt={`Diseño de placard ${item}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "varios" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {imagesOtros.map((item) => (
                    <div
                      key={item.id}
                      className="bg-neutral-800 rounded-lg overflow-hidden"
                    >
                      <div className="relative h-80 sm:h-[500px]">
                        <Image
                          src={item.image}
                          alt={`Diseño de otros ${item}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      {/* <div className="p-4">
                        <h3 className="font-medium text-white">
                          Placard Empotrado {item}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Almacenamiento personalizado con acabados elegantes
                        </p>
                      </div> */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-green-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Nuestro Proceso
              </h2>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                Desde el concepto hasta la creación, trabajamos con vos en cada
                paso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Consulta</h3>
                <p className="opacity-90">
                  Conversamos sobre tus necesidades, preferencias y requisitos
                  de espacio.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Diseño</h3>
                <p className="opacity-90">
                  Nuestros diseñadores crean planos detallados y visualizaciones
                  3D.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Fabricación</h3>
                <p className="opacity-90">
                  Artesanos especializados fabrican cada pieza con precisión.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Instalación</h3>
                <p className="opacity-90">
                  Instalación profesional con atención a cada detalle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="py-16 md:py-24 bg-neutral-900 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                <span className="text-green-500">Contactanos</span> y Hacé
                Realidad tu Proyecto
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Estamos listos para ayudarte a crear los muebles de tus sueños.
                Elegí la forma que más te guste para contactarnos.
              </p>
            </div>

            {/* Métodos de contacto principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* WhatsApp */}
              <Link
                target="_blank"
                href="https://wa.me/5493546477298"
                className="bg-black border-2 border-green-600 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 group hover:bg-green-600/10"
              >
                <div className="flex flex-col items-center text-center">
                  <MessageCircle className="h-12 w-12 mb-4 text-green-500 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold mb-2 text-green-500">
                    WhatsApp
                  </h3>
                  <p className="text-green-400 mb-3">Respuesta inmediata</p>
                  <p className="text-sm text-gray-300">+54 9 3546477298</p>
                </div>
              </Link>

              {/* Instagram */}
              <Link
                target="_blank"
                href="https://www.instagram.com/dogma.muebles"
                className="bg-black border-2 border-pink-600 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 group hover:bg-pink-600/10"
              >
                <div className="flex flex-col items-center text-center">
                  <Instagram className="h-12 w-12 mb-4 text-pink-500 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold mb-2 text-pink-500">
                    Instagram
                  </h3>
                  <p className="text-pink-400 mb-3">Mirá nuestros trabajos</p>
                  <p className="text-sm text-gray-300">@dogma.muebles</p>
                </div>
              </Link>

              {/* Facebook */}
              <Link
                target="_blank"
                href="https://facebook.com/mueblesdogma"
                className="bg-black border-2 border-blue-600 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 group hover:bg-blue-600/10"
              >
                <div className="flex flex-col items-center text-center">
                  <Facebook className="h-12 w-12 mb-4 text-blue-500 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold mb-2 text-blue-500">
                    Facebook
                  </h3>
                  <p className="text-blue-400 mb-3">Seguinos para novedades</p>
                  <p className="text-sm text-gray-300">DOGMA Muebles</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-black p-4 rounded-lg w-1/2 mx-auto">
            <p className="text-sm text-green-400 font-medium mb-2">💡 Tip</p>
            <p className="text-sm text-gray-300">
              Te recomendamos agendar una cita previa para una atención
              personalizada y poder mostrarte todos nuestros materiales y
              acabados.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-black text-gray-300 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Logo y descripción */}
            <div>
              <div className="mb-4">
                <Image
                  src={LogoImage}
                  alt="DOGMA Muebles"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="mb-6 text-gray-400">
                Muebles artesanales hechos para durar toda la vida.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/mueblesdogma"
                  target="_blank"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/dogma.muebles"
                  target="_blank"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://wa.me/5493546477298"
                  target="_blank"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
              </div>
            </div>

            {/* Contacto e información */}
            <div className="md:text-right">
              <h3 className="text-white text-lg font-medium mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <p>dogmamuebles@hotmail.com</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Lun a Vie: 9:00 - 18:00hs
                </p>
                <p className="text-sm text-gray-500">Sáb: 9:00 - 13:00hs</p>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="border-t border-neutral-800 pt-6 mb-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="#nosotros"
                className="hover:text-green-500 transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="#trabajos"
                className="hover:text-green-500 transition-colors"
              >
                Nuestros Trabajos
              </Link>
              <Link
                href="#contacto"
                className="hover:text-green-500 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-neutral-800 pt-6 text-sm text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} DOGMA Muebles. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
