import React from "react";

const SERVICIOS_DATA = [
  {
    id: "01",
    title: "Arquitectura Residencial",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    details: [
      "Diseño conceptual",
      "Planos técnicos",
      "Gestión de licencias",
      "Supervisión de obra",
    ],
  },
  {
    id: "02",
    title: "Diseño de Interiores",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: [
      "Interiorismo de lujo",
      "Curaduría de mobiliario",
      "Iluminación técnica",
      "Estilismo de espacios",
    ],
  },
  {
    id: "03",
    title: "Proyectos Corporativos",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    details: [
      "Optimización de flujos",
      "Branding espacial",
      "Acústica de oficinas",
      "Ergonomía",
    ],
  },
];

const Servicios = () => {
  return (
    <div className="pt-32 pb-24 bg-pearl animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <header className="mb-24 text-center">
          <span className="text-lima font-sans font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            Nuestra Experiencia
          </span>
          <h1 className="text-6xl font-serif text-charcoal">
            Servicios Integrales
          </h1>
          <div className="w-24 h-1 bg-lima mx-auto mt-8" />
        </header>

        <div className="space-y-32">
          {SERVICIOS_DATA.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2 aspect-[16/10] overflow-hidden group relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="lg:w-1/2 space-y-8">
                <span className="text-5xl font-serif text-lima/30 leading-none">
                  {service.id}
                </span>
                <h3 className="text-4xl font-serif text-charcoal">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center space-x-4 group cursor-default"
                    >
                      <span className="w-2 h-2 bg-lima rounded-full transform scale-0 group-hover:scale-100 transition-transform" />
                      <span className="text-charcoal/70 font-sans text-lg border-b border-transparent group-hover:border-lima/30 transition-all">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
