export default function Nosotros() {
    return (
        <section
        id="nosotros"
        className="py-16 md:py-24 bg-neutral-900 text-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-neutral-900/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] p-8 transition-all duration-300 hover:shadow-[0_6px_40px_rgba(0,0,0,0.5)] grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Estamos en Cada Detalle
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
    )
}

