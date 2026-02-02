import React from "react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-pearl pt-24 pb-12 border-t border-sand">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 space-y-6">
            <div className="flex flex-col items-start">
              <span className="text-4xl font-serif font-bold tracking-tighter text-charcoal">
                LIMA
              </span>
              <span className="text-[10px] tracking-[0.3em] font-sans font-medium uppercase text-charcoal/60 mt-1">
                ARQ. INTERIOR
              </span>
            </div>
            <p className="text-sm text-charcoal/50 leading-relaxed max-w-xs">
              Transformando espacios ordinarios en experiencias extraordinarias
              a través de la arquitectura y el diseño.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-lima">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-charcoal/70">
              <li>hola@somoslima.com</li>
              <li>+51 987 654 321</li>
              <li>Av. La Encalada 1234, Surco</li>
              <li>Cordoba - Argentina</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-lima">
              Explorar
            </h4>
            <ul className="space-y-2 text-sm text-charcoal/70">
              <li>
                <button className="hover:text-lima transition-colors">
                  Portafolio
                </button>
              </li>
              <li>
                <button className="hover:text-lima transition-colors">
                  Nuestro Estudio
                </button>
              </li>
              <li>
                <button className="hover:text-lima transition-colors">
                  Servicios
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-lima">
              Social
            </h4>
            <div className="flex space-x-4">
              {["Instagram", "Pinterest", "Behance"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-charcoal/70 hover:text-lima transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-sand pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">
          <p>© 2024 Somos Lima. Todos los derechos reservados.</p>
          <p>Desarrollado con pasión y diseño.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
