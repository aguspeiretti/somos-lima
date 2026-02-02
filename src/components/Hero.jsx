
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-pearl">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 transform translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <div className="space-y-2">
            <h2 className="text-lima font-sans font-bold tracking-[0.4em] uppercase text-sm animate-pulse">
              Somos Lima
            </h2>
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] text-charcoal">
              Redefiniendo el <br /> 
              <span className="italic">espacio</span> habitado.
            </h1>
          </div>
          
          <p className="text-lg md:text-xl font-sans text-charcoal/70 max-w-xl leading-relaxed">
            Arquitectura y diseño de interiores que fusionan la estética contemporánea con la funcionalidad armónica. Creamos experiencias, no solo estructuras.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <a 
              href="#proyectos" 
              className="px-8 py-4 bg-charcoal text-pearl font-sans text-xs uppercase tracking-widest font-bold hover:bg-lima hover:text-charcoal transition-all duration-300"
            >
              Ver Proyectos
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-4 border border-charcoal text-charcoal font-sans text-xs uppercase tracking-widest font-bold hover:bg-charcoal hover:text-pearl transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="relative z-10 w-full aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
              alt="Interiorismo Moderno"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-lima z-0 flex items-center justify-center">
             <span className="text-pearl font-serif text-6xl opacity-50">L</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
