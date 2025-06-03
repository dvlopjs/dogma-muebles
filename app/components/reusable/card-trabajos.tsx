import Image from "next/image";

export default function CardTrabajos({
  activeTab,
  images,
}: {
  activeTab: string;
  images: any[];
}) {
  return (
    <>
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          activeTab === "cocinas"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-green-500/30 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={`Diseño de cocina ${item}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
