import { CONTACT_INFO, WHATSAPP_URL } from "@/constants";
import { FooterMap } from "./footer-map";
import Logo from "@/../public/assets/images/sanzone-2.svg";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black p-6 md:p-10 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1: Información de contacto */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <div className="flex justify-center items-center mb-8">
                <div className="bg-white p-2">
                  <Image
                    src={Logo}
                    alt="Sanzone & Abogados"
                    width={250}
                    height={75}
                    className="h-16 w-auto"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Contacto
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Teléfono:</span>{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {CONTACT_INFO.phone}
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
                  href={CONTACT_INFO.mapUrl}
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {CONTACT_INFO.address}
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
              &copy; {currentYear} Sanzone & Abogados. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
