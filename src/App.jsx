import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectGallery from "./components/ProjectGallery.jsx";
import Footer from "./components/Footer.jsx";
import Estudio from "./pages/Estudio.jsx";
import Servicios from "./pages/Servicios.jsx";
import Contacto from "./pages/Contacto.jsx";

const App = () => {
  const [currentView, setCurrentView] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case "home":
        return (
          <>
            <Hero />
            <section
              id="estudio-preview"
              className="py-24 bg-pearl border-y border-sand"
            >
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-5 aspect-square bg-sand relative overflow-hidden shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200"
                      alt="Minimalist Design"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  <div className="lg:col-span-7 space-y-8">
                    <span className="text-lima font-sans font-bold tracking-[0.4em] uppercase text-xs">
                      Nuestra Esencia
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif leading-tight text-charcoal">
                      Creemos en el poder de la{" "}
                      <span className="italic">armonía</span> espacial.
                    </h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed font-sans">
                      Arquitectura y diseño de interiores que fusionan la
                      estética contemporánea con la funcionalidad armónica.
                    </p>
                    <button
                      onClick={() => setCurrentView("estudio")}
                      className="text-xs uppercase tracking-widest font-bold border-b-2 border-lima pb-2 hover:text-lima transition-colors text-charcoal"
                    >
                      Conoce el estudio
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <ProjectGallery />
          </>
        );
      case "proyectos":
        return (
          <div className="pt-20">
            <ProjectGallery />
          </div>
        );
      case "estudio":
        return <Estudio />;
      case "servicios":
        return <Servicios />;
      case "contacto":
        return <Contacto />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-lima selection:text-charcoal bg-pearl">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />

      <main>{renderView()}</main>

      <Footer />
    </div>
  );
};

export default App;
