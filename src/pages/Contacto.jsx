import React from "react";

const Contacto = () => {
  return (
    <div className="pt-32 pb-24 bg-pearl animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <span className="text-lima font-sans font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
                Contacto
              </span>
              <h1 className="text-6xl font-serif text-charcoal">
                Hablemos de tu próximo <span className="italic">espacio</span>.
              </h1>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-sand py-4 focus:outline-none focus:border-lima transition-colors text-charcoal"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">
                    Email
                  </label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-sand py-4 focus:outline-none focus:border-lima transition-colors text-charcoal"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">
                  Tipo de Proyecto
                </label>
                <select className="bg-transparent border-b border-sand py-4 focus:outline-none focus:border-lima transition-colors text-charcoal appearance-none cursor-pointer">
                  <option>Residencial</option>
                  <option>Corporativo</option>
                  <option>Interiores</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="bg-transparent border-b border-sand py-4 focus:outline-none focus:border-lima transition-colors text-charcoal resize-none"
                ></textarea>
              </div>
              <button className="px-12 py-5 bg-charcoal text-pearl uppercase tracking-widest font-bold text-xs hover:bg-lima hover:text-charcoal transition-all">
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div className="aspect-[4/5] bg-sand relative grayscale group overflow-hidden shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lima HQ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-8 left-8 bg-white p-8 shadow-xl">
                <h4 className="font-serif text-2xl mb-2 text-charcoal">
                  Showroom
                </h4>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  Av. La Encalada 1234, Surco
                  <br />
                  Cordoba - Argentina
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h5 className="font-sans font-bold text-[10px] uppercase tracking-widest text-lima">
                  Email
                </h5>
                <p className="text-charcoal/70 text-sm">hola@somoslima.com</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-sans font-bold text-[10px] uppercase tracking-widest text-lima">
                  Teléfono
                </h5>
                <p className="text-charcoal/70 text-sm">+51 987 654 321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
