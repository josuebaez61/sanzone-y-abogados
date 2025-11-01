import { Banner } from "@/components/banner";
import Image from "next/image";
import { getImagePath } from "@/utils/image-path";

export const metadata = {
  title: "Coberturas médicas",
  description:
    "Defensa del derecho a mantener la cobertura médica al jubilarse. Asesoramiento sobre obras sociales y prepagas.",
};

export default function CoberturasMedicas() {
  return (
    <main id="main-content">
      <Banner
        backgroundImage="banner-1.jpeg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="1000px"
      >
        <div className="flex justify-center items-center h-full">
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Fondo blur */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-lg"></div>

            {/* Contenido con imagen y texto */}
            <div className="relative z-10 p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Imagen circular */}
                {/* <div className="flex-shrink-0 order-0 md:order-1">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                    <Image
                      src={getImagePath("assets/images/banner-2.jpeg")}
                      alt="Coberturas Médicas - Sanzone & Abogados"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div> */}

                {/* Texto */}
                <div className="flex-1 order-1 md:order-0">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Coberturas Médicas
                  </h2>
                  <p className="text-xl text-white leading-relaxed">
                    Quizás has escuchado que al jubilarte no podés continuar en
                    OSDE, u otra prepaga y te preocupa. Solo pensar en esa
                    posibilidad, te quita el sueño porque llevás muchos años con
                    la misma obra social o prepaga, estás conforme con los
                    servicios y por supuesto, querés mantenerla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Banner>

      {/* Contenido principal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Desinformación y Asesoría Incorrecta
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Debido a la desinformación y a la asesoría incorrecta por parte
                de las obras sociales sindicales (Unión Personal, OSPOSE,
                OSECAC, etc.), de la Superintendencia de Salud y de ANSES, las
                obras sociales dan de baja a muchos afiliados, argumentando que
                la ley lo exige, vulnerando tus derechos y los de tu grupo
                beneficiario.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  Derribando un mito: &ldquo;Jubilarse NO es sinónimo de pasarse
                  a PAMI&rdquo;
                </h3>
                <p className="text-red-700">
                  María (nombre cambiado) inició los trámites para obtener su
                  jubilación. Cuando la prepaga realizó el cruce de información
                  con ANSES, dio de baja a su esposo alegando que él estaba
                  jubilado y debía estar afiliado a PAMI. Situación que no es
                  cierta por las siguientes razones:
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    Derecho a Continuar en la Obra Social
                  </h3>
                  <p className="text-blue-700">
                    Todo afiliado y su grupo familiar (cónyuge o conviviente,
                    hijos de cónyuge o conviviente, hijos menores de 21 años o
                    hasta 25 años si se encuentran estudiando e hijos con
                    discapacidad sin límite de edad) tienen derecho a continuar
                    en la obra social y la prepaga de su preferencia, cuando se
                    jubile.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    Doble Afiliación Permitida
                  </h3>
                  <p className="text-green-700">
                    El jubilado puede pertenecer a su obra social, en este caso,
                    a la prepaga propia y como adherente a la de la su esposa.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                    Elección Libre de Cobertura
                  </h3>
                  <p className="text-yellow-700">
                    La jubilación, como ya mencionamos, no significa el pase
                    directo a PAMI. La ley te permite elegir si continuás con la
                    obra social que posees o si te trasladás a dicho ente.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">
                    Período de Transición de 90 Días
                  </h3>
                  <p className="text-purple-700">
                    Durante 90 días, a partir del momento en que se otorga el
                    beneficio de la jubilación, el grupo familiar debe continuar
                    recibiendo los servicios de la obra social. Tiempo
                    suficiente para adelantar los trámites. En este caso, mejor
                    si te asesorás con nosotros para que no tengas un periodo
                    sin cobertura de salud.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                    Protección Contra Condicionamientos
                  </h3>
                  <p className="text-indigo-700">
                    Ninguna obra social debe condicionar tu afiliación por
                    ninguna causa. Esto incluye, no exigir pagos exorbitantes
                    para hacerte retirar voluntariamente.
                  </p>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">
                    Mantenimiento de Coberturas
                  </h3>
                  <p className="text-teal-700">
                    Tenés derecho y también tu grupo familiar a mantener las
                    mismas coberturas que poseían cuando estabas en actividad.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-6 bg-red-100 border border-red-300 rounded-lg">
                <p className="text-red-800 font-semibold">
                  <strong>Nota importante:</strong> Si ya aceptaste tu traslado
                  a PAMI, no podrás ejercer el derecho a continuar con la obra
                  social que tenías.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
