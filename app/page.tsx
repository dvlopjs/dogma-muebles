"use client";
import ImageBackground from "./assets/images/BackgroundImage.jpg";
import LogoImage from "./assets/images/dogma-logo.jpg";
import DogmaMain from "./assets/images/DogmaMain.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import { useState } from "react";
import { WhatsApp } from "@mui/icons-material";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("cocinas");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Menú móvil */}
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
          {/* <div className="hidden gap-4 md:flex">
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
          </div> */}
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="h-[100vh] w-full relative">
            <Image
              src={ImageBackground}
              alt="Muebles artesanales a medida"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="container mx-auto absolute inset-0 flex flex-col items-start justify-center text-white px-4 md:px-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Muebles Artesanales
                <br />
                <span className="text-green-500">Hechos para Durar</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-gray-200">
                Muebles a medida fabricados con precisión y pasión. Desde
                cocinas hasta baños, hacemos realidad tu visión.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors text-base font-medium">
                  Ver Nuestros Trabajos
                </button>
                <button className="border border-white text-white hover:bg-white/10 py-3 px-6 rounded-md transition-colors text-base font-medium">
                  Contactanos
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="nosotros"
          className="py-16 md:py-24 bg-neutral-900 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
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
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition-colors">
                  Conocé Más Sobre Nosotros
                </button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={DogmaMain}
                  alt="Artesano trabajando en muebles"
                  fill
                  className="object-cover"
                />
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
                {["cocinas", "banos", "placares", "living"].map((tab) => (
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
                      : tab === "banos"
                      ? "Baños"
                      : tab === "placares"
                      ? "Placares"
                      : "Living"}
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs content */}
            <div className="space-y-8">
              {activeTab === "cocinas" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-neutral-800 rounded-lg overflow-hidden"
                    >
                      <div className="relative h-64">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Cocina+${item}`}
                          alt={`Diseño de cocina ${item}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-white">
                          Cocina Moderna {item}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Muebles a medida con electrodomésticos integrados
                        </p>
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
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-neutral-800 rounded-lg overflow-hidden"
                    >
                      <div className="relative h-64">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Placard+${item}`}
                          alt={`Diseño de placard ${item}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-white">
                          Placard Empotrado {item}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Almacenamiento personalizado con acabados elegantes
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "living" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-neutral-800 rounded-lg overflow-hidden"
                    >
                      <div className="relative h-64">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Living+${item}`}
                          alt={`Diseño de living ${item}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-white">
                          Muebles de Living {item}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Mesas, bibliotecas y muebles de entretenimiento a
                          medida
                        </p>
                      </div>
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

        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                No tomes solo nuestra palabra. Esto es lo que nuestros clientes
                dicen sobre nuestro trabajo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Laura Fernández",
                  project: "Renovación de Cocina",
                  quote:
                    "La atención al detalle fue increíble. Nuestra nueva cocina no solo es hermosa, sino increíblemente funcional.",
                },
                {
                  name: "Martín Rodríguez",
                  project: "Placares a Medida",
                  quote:
                    "El equipo entendió exactamente lo que necesitábamos. Los placares son perfectos - elegantes y con mucho espacio de guardado.",
                },
                {
                  name: "Valeria Gómez",
                  project: "Remodelación de Baño",
                  quote:
                    "Desde el diseño hasta la instalación, el proceso fue impecable. La artesanía es excepcional.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-neutral-800 rounded-lg p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-green-500">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 flex-grow">
                      $&quot{testimonial.quote}&quot
                    </p>
                    <div>
                      <p className="font-medium text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="py-16 md:py-24 bg-neutral-900 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Contactanos
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  ¿Listo para transformar tu espacio con muebles a medida?
                  Contactanos para programar una consulta o visitá nuestro
                  showroom.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">
                        Visitá Nuestro Showroom
                      </h3>
                      <p className="text-gray-300">
                        Av. Libertador 1234, CABA, Buenos Aires
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Llamanos</h3>
                      <p className="text-gray-300">(011) 4567-8910</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">
                        Envianos un Email
                      </h3>
                      <p className="text-gray-300">info@dogmamuebles.com.ar</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-4 text-white">Seguinos</h3>
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
                </div>
              </div>

              <div>
                <form className="space-y-6 bg-neutral-800 p-8 rounded-lg">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium text-white"
                      >
                        Nombre
                      </label>
                      <input
                        id="first-name"
                        className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium text-white"
                      >
                        Apellido
                      </label>
                      <input
                        id="last-name"
                        className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-white"
                    >
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="project-type"
                      className="text-sm font-medium text-white"
                    >
                      Tipo de Proyecto
                    </label>
                    <select
                      id="project-type"
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Seleccionar tipo de proyecto</option>
                      <option value="cocina">Cocina</option>
                      <option value="bano">Baño</option>
                      <option value="placard">Placard</option>
                      <option value="living">Living</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-white"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="DOGMA Muebles"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="mb-4">
                Muebles artesanales hechos para durar toda la vida.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-medium mb-4">
                Nuestros Servicios
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Cocinas a Medida
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Muebles de Baño
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Placares y Vestidores
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Muebles de Living
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Proyectos Comerciales
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-medium mb-4">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Nuestros Trabajos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-medium mb-4">
                Contactanos
              </h3>
              <address className="not-italic space-y-2">
                <p>Av. Libertador 1234</p>
                <p>CABA, Buenos Aires</p>
                <p className="mt-4">(011) 4567-8910</p>
                <p>info@dogmamuebles.com.ar</p>
              </address>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 text-sm text-center">
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
