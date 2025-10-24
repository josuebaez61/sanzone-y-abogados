import { Banner } from "@/components/banner";
import { BluredCard } from "@/components/blured-card";

export default function Sucesiones() {
  return (
    <main className="space-y-20">
      <Banner
        backgroundImage="pexels-pixabay-261621.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <div className="flex justify-center items-center h-full">
          <BluredCard>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <article className="flex-1 order-1 lg:order-0">
                <h2 className="text-3xl font-bold text-white mb-8">
                  ¿Qué es una sucesión?
                </h2>
                <p className="text-xl text-white leading-relaxed mb-8">
                  Una sucesión es el proceso legal regulado por el código civil
                  y comercial de la nación, mediante el cual se transfieren los
                  bienes de una persona fallecida a sus herederos. Este trámite
                  es obligatorio para poder disponer legalmente de los bienes
                  heredados.
                </p>
                <h4 className="text-2xl font-bold text-white mb-4">
                  ¿Cuándo es necesaria?
                </h4>
                <ul className="list-square list-inside text-xl text-white leading-relaxed">
                  <li>
                    <span className="material-icons material-icons-outline">
                      house
                    </span>{" "}
                    Cuando el fallecido dejó bienes (inmuebles, cuentas
                    bancarias, vehículos, etc.).
                  </li>
                  <li>
                    <span className="material-icons material-icons-outline">
                      people
                    </span>{" "}
                    Cuando el fallecido dejó bienes (inmuebles, cuentas
                    bancarias, vehículos, etc.).
                  </li>
                  <li>
                    <span className="material-icons material-icons-outline">
                      description
                    </span>{" "}
                    Para poder vender o disponer de los bienes heredados sin
                    restricciones legales.
                  </li>
                </ul>
              </article>
            </div>
          </BluredCard>
        </div>
      </Banner>
      {/* Sección principal de contenido */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Qué relación tienen los juicios sucesorios y la seguridad social?
          </h2>

          {/* Artículo 1: Sucesión en juicios de reajuste */}
          <article className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Sucesión en los juicios de reajuste
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Lamentablemente los juicios de reajustes han sufrido un retraso
                importante provocado por la concesión de los recursos
                extraordinarios que ANSES se encuentra interponiendo, llevando
                nuevamente los juicios hasta la última instancia ante la Corte
                Suprema.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ante el fallecimiento de un jubilado que se encuentre tramitando
                un juicio de Reajuste la ley previsional determina que en primer
                lugar, si existe un beneficiario con derecho a pensión (cónyuge,
                conviviente o hijo discapacitado), ellos son los que continúan
                las acciones judiciales y van a percibir el crédito que
                correspondía al causante.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recién para el caso que no existan beneficiarios con derecho a
                pensión se debe abrir el juicio sucesorio. Si el expediente
                judicial no tiene sentencia, en el caso del beneficiario de
                pensión continúa con la resolución y el nuevo número de
                beneficio, y en caso de los herederos, con la declaratoria se
                continúan las actuaciones.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En el caso de tener sentencia y encontrarse al cobro, en las
                pensiones el trámite continua todo por vía administrativa. Pero
                en el caso de los herederos debe notificarse a la ANSES el
                juzgado donde tramita el sucesorio y proceder a la apertura de
                una cuenta cuyos datos deben informarse por oficio.
              </p>
            </div>
          </article>

          {/* Artículo 2: Trámites en ANSES */}
          <article className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Cómo hacer los trámites en la ANSES para "heredar" las
              jubilaciones
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cuando fallece un familiar que cobraba del organismo, los
                descendientes pueden recibir los haberes pendientes de pago.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cuando un jubilado o pensionado fallece, parte de sus haberes
                quedan sin cobrar. La ANSES informó que ese dinero puede ser
                solicitado por los herederos y cómo se debe hacer el trámite.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los haberes devengados son los pagos que realiza la ANSES por
                los días pendientes de cobro de un jubilado o pensionado
                fallecido hasta la fecha del deceso. La solicitud no debe
                superar los dos años del fallecimiento.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos haberes no se abonarán antes de los noventa días corridos
                contados desde el fallecimiento.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-4 mt-8">
                Si existe más de un solicitante, el orden prioritario de pago
                es:
              </h4>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>
                  A los hijos mayores de 18 años no discapacitados, los haberes
                  se repartirán en partes iguales, en función de la cantidad de
                  hijos.
                </li>
                <li>
                  A los padres del titular fallecido, los haberes se abonarán en
                  partes iguales.
                </li>
                <li>
                  A los hermanos, los haberes serán en partes iguales; en el
                  supuesto de los medios hermanos, estos percibirán los haberes
                  en un todo.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
