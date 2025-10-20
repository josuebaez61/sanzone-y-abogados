import { FooterMap } from "./footer-map";

export const Footer = () => {
  return (
    <footer className="bg-black p-6 md:p-10 mt-10 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1: Información de contacto */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Contacto
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    href="mailto:info@sanzone.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    info@sanzone.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Teléfono:</span>{" "}
                  <a
                    href="tel:1234567890"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    1234567890
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Ubicación
              </h3>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Dirección:</span>{" "}
                <a
                  href="https://maps.app.goo.gl/1234567890"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Av. Sanzone & Abogados
                </a>
              </p>
            </div>
          </div>

          {/* Columna 2: Mapa */}
          <div className="flex justify-center md:justify-end">
            <FooterMap />
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-500 mt-8 pt-6">
          <div className="text-center text-gray-100 text-sm">
            <p>
              &copy; 2024 Sanzone & Abogados. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
