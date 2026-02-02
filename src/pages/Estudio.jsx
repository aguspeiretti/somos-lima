import React from "react";

const Estudio = () => {
  return (
    <div className="pt-32 pb-24 bg-pearl animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <header className="mb-24">
          <span className="text-lima font-sans font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            Manifesto
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] text-charcoal max-w-4xl">
            La arquitectura es el <span className="italic">escenario</span> de
            la vida.
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
          <div className="space-y-8">
            <p className="text-2xl font-serif italic text-charcoal/80 leading-relaxed">
              "En Somos Lima, no diseñamos paredes; diseñamos momentos,
              atmósferas y legados."
            </p>
            <div className="space-y-6 text-charcoal/70 font-sans text-lg leading-relaxed">
              <p>
                Fundado con la visión de elevar la calidad de vida a través del
                diseño consciente, nuestro estudio combina décadas de
                experiencia técnica con una sensibilidad artística única.
              </p>
              <p>
                Cada proyecto es una hoja en blanco donde la luz natural, la
                materialidad honesta y la fluidez espacial son los
                protagonistas. Creemos que el lujo reside en la simplicidad bien
                ejecutada y en la armonía entre el interior y su entorno.
              </p>
            </div>
          </div>
          <div className="aspect-[3/4] overflow-hidden shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1661962587672-b77b2ba13055?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Estudio de Diseño"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </section>

        <section className="border-y border-sand py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h3 className="text-lima font-serif text-3xl italic">
                Habilidad
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Combinamos técnicas constructivas tradicionales con la
                innovación tecnológica más puntera.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lima font-serif text-3xl italic">
                Honestidad
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Respetamos la naturaleza de los materiales: piedra, madera,
                acero y luz en su estado más puro.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lima font-serif text-3xl italic">Humano</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                El usuario es el centro de nuestro universo creativo. Su
                bienestar es nuestra métrica de éxito.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Estudio;
