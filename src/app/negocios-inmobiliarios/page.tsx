import { Banner } from "@/components/banner";
import { BluredCard } from "@/components/blured-card";
import Image from "next/image";
import { getImagePath } from "@/utils/image-path";

export const metadata = {
  title: "Negocios inmobiliarios",
  description:
    "Asesoramiento legal en transacciones y negocios inmobiliarios: contratos, sucesiones y regularización.",
};

export default function NegociosInmobiliarios() {
  return (
    <main id="main-content">
      <Banner
        backgroundImage="pexels-marketingtuig-87223.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <div className="flex justify-center items-center h-full">
          <div className="max-w-6xl mx-auto px-4">
            <BluredCard>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Texto */}
                <div className="flex-1 order-1 lg:order-0">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Negocios Inmobiliarios
                  </h2>
                  <p className="text-xl text-white leading-relaxed">
                    Asesoramiento legal especializado en transacciones
                    inmobiliarias, contratos, sucesiones y regularización de
                    propiedades.
                  </p>
                </div>
              </div>
            </BluredCard>
          </div>
        </div>
      </Banner>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Sección 1: Contratos y Operaciones inmobiliarias */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-96 lg:h-auto">
                <Image
                  src={getImagePath(
                    "assets/images/pexels-matthiaszomer-618158.jpg"
                  )}
                  alt="Contratos y operaciones inmobiliarias"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Contratos y Operaciones Inmobiliarias
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>
                      Elaboración, análisis y negociación de documentos
                      contractuales para compraventa, boletos de compraventa,
                      arrendamientos urbanos y rurales, permutas y fideicomisos
                      inmobiliarios.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>
                      Evaluación de riesgos legales previa a la formalización de
                      acuerdos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>
                      Resguardo de los intereses tanto del adquirente como del
                      enajenante en las transacciones.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Sección 2: Propiedad horizontal y consorcios */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 relative h-96 lg:h-auto">
                <Image
                  src={getImagePath(
                    "assets/images/pexels-pavel-danilyuk-5520322.jpg"
                  )}
                  alt="Propiedad horizontal y consorcios"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Propiedad Horizontal y Consorcios
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>
                      Resolución de controversias entre copropietarios o con la
                      administración del consorcio.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>
                      Análisis y aplicación de estatutos de copropiedad y
                      reglamentos internos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>
                      Acciones judiciales para el cobro de expensas
                      extraordinarias y ordinarias.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>
                      Determinación de responsabilidades del consorcio y de los
                      propietarios por daños y perjuicios.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Sección 3: Condominio y medianería */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-96 lg:h-auto">
                <Image
                  src={getImagePath(
                    "assets/images/pexels-expect-best-79873-323772.jpg"
                  )}
                  alt="Condominio y medianería"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Condominio y Medianería
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span>
                      Procesos de división y partición de condominios.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span>
                      Regulación del uso, disfrute y administración de áreas y
                      bienes comunes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span>
                      Solución de disputas sobre límites de propiedad, muros
                      medianeros y servidumbres de tránsito.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Sección 4: Alquileres y desalojos */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 relative h-96 lg:h-auto">
                <Image
                  src={getImagePath(
                    "assets/images/pexels-louie-alma-2154387078-33197285.jpg"
                  )}
                  alt="Alquileres y desalojos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Alquileres y Desalojos
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>
                      Representación legal en procesos de ejecución y defensa en
                      acciones de desalojo.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>
                      Orientación profesional para la renovación o cancelación
                      de contratos de locación.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>
                      Cálculo y ajuste de montos de alquiler conforme a la
                      legislación vigente.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Sección 5: Sucesiones y bienes inmuebles */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-96 lg:h-auto">
                <Image
                  src={getImagePath(
                    "assets/images/pexels-scottwebb-1029599.jpg"
                  )}
                  alt="Sucesiones y bienes inmuebles"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Sucesiones y Bienes Inmuebles
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">•</span>
                    <span>
                      Inclusión de propiedades inmuebles en procesos sucesorios.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">•</span>
                    <span>
                      Distribución de bienes hereditarios mediante partición
                      judicial o mediante acuerdo extrajudicial.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">•</span>
                    <span>
                      Normalización de la titularidad dominial de inmuebles.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Sección 6: Prevención de conflictos */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 relative h-96 lg:h-auto">
                <Image
                  src={getImagePath(
                    "assets/images/pexels-karola-g-7876050.jpg"
                  )}
                  alt="Prevención de conflictos inmobiliarios"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Prevención de Conflictos
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>
                      Revisión de títulos de propiedad y antecedentes
                      registrales previa a transacciones.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>
                      Evaluación anticipada de zonificación, gravámenes y
                      medidas cautelares registradas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>
                      Participación en mediaciones y conciliaciones para
                      resolución de conflictos vecinales.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
