import { Banner } from "@/components/banner";
import { ReajusteProcedureSection } from "@/components/reajuste-procedure-section";
import Image from "next/image";
import { getImagePath } from "@/utils/image-path";

export const metadata = {
  title: "Reajustes de haberes",
  description:
    "Reclamos administrativos y judiciales de reajuste de haberes previsionales para obtener un haber correcto.",
};

export default function Reajuste() {
  return (
    <main id="main-content">
      <Banner
        backgroundImage="reajuste-banner-pexels-ekaterina-bolovtsova-6077326.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="1000px"
      >
        <div className="flex justify-center items-center h-full">
          <div className="relative max-w-6xl mx-auto">
            {/* Fondo blur */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-lg"></div>

            {/* Contenido con imagen y texto */}
            <div className="relative z-10 p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Imagen circular */}
                <div className="flex-shrink-0 order-0 lg:order-1">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                    <Image
                      src={getImagePath("assets/images/sanzone-5.jpg")}
                      alt="Jubilaciones - Sanzone & Abogados"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Texto */}
                <div className="flex-1 order-1 md:order-0">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    ¿Qué es el REAJUSTE de haberes?
                  </h2>
                  <p className="text-xl text-white leading-relaxed">
                    El juicio de reajuste de haberes es el reclamo judicial
                    contra la ANSeS con el fin de poder percibir un correcto
                    haber jubilatorio, respetando las doctrinas judiciales y la
                    normativa supra constitucional en materia de Derechos
                    Humanos de las Personas Mayores; lo que se busca con este
                    procedimiento es respetar la “Proporcionalidad” que debe de
                    existir entre un activo y un pasivo y apartarse de los
                    cálculos arbitrarios que impone ANSeS.
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
              <div className="space-y-8">
                {/* Definición principal */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    Definición del Reajuste de Haberes
                  </h2>
                  <p className="text-blue-700 leading-relaxed">
                    El Reajuste de Haberes es el reclamo administrativo y
                    judicial contra la ANSeS con el fin de cobrar un correcto
                    haber jubilatorio respetando los parámetros judiciales de la
                    doctrina de la C.S.J.N., y logrando la proporcionalidad que
                    debe existir entre activos y pasivos.
                  </p>
                  <p className="text-blue-700 leading-relaxed mt-4 font-semibold">
                    La sentencia que dictan los jueces es de cumplimiento
                    obligatorio por parte de ANSES.
                  </p>
                </div>

                {/* Características importantes */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">
                      Sin Riesgo Económico
                    </h3>
                    <p className="text-green-700">
                      Estos juicios no tienen riesgo en el importe que Ud. cobra
                      mensualmente.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">
                      Inicio Inmediato
                    </h3>
                    <p className="text-purple-700">
                      Una vez jubilado, ya puede iniciarlo, de modo de mejorar
                      su ingreso mensual.
                    </p>
                  </div>
                </div>

                {/* Beneficios del reajuste */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">
                    Beneficios del Reajuste
                  </h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>
                      • <strong>Actualización del haber mensual.</strong>
                    </li>
                    <li>
                      • <strong>Retroactivo considerable</strong> en muchos
                      casos.
                    </li>
                    <li>
                      • <strong>Diferencias desde dos años antes</strong> del
                      inicio del reclamo.
                    </li>
                    <li>
                      • <strong>Pago efectivo</strong> por parte de ANSES.
                    </li>
                  </ul>
                </div>

                {/* Fallo Badaro */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    Fallo Badaro
                  </h3>
                  <p className="text-red-700 leading-relaxed">
                    Un reajuste por la aplicación del fallo Badaro es la
                    modificación del haber de una prestación ya otorgada y
                    percibida por el titular, que se efectúa en virtud de la
                    solicitud de revisión, por la aplicación de la doctrina
                    sentada en caso &ldquo;Badaro, Adolfo Valentín&rdquo;, que
                    obtuvo sentencia el 26/11/2007 en la Corte Suprema de
                    Justicia de la Nación.
                  </p>
                  <p className="text-red-700 leading-relaxed mt-4">
                    Por extensión del criterio fijado en el caso Badaro, los
                    haberes jubilatorios se puede reajustar por la variación de
                    los salarios durante el período comprendido entre el 2007 a
                    2009.
                  </p>
                </div>

                {/* 82% móvil */}
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4">
                    La movilidad del haber jubilatorio - El 82% móvil
                  </h3>
                  <p className="text-indigo-700 leading-relaxed">
                    La Constitución Nacional exige que las jubilaciones y
                    pensiones sean móviles. Por ley, debería ser el 82% móvil
                    (del monto que hubiera percibido en actividad), pero casi el
                    70% de los beneficiaros no llegan a ese monto.
                  </p>
                </div>

                {/* Desactualización */}
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">
                    La desactualización del haber jubilatorio
                  </h3>
                  <p className="text-orange-700 leading-relaxed">
                    En Argentina los haberes previsionales se vieron muy
                    perjudicados a causa de todos los procesos inflacionarios
                    vividos en los últimos 35 años. Es importante obtener una
                    proporcionalidad entre los aportes realizados en la vida
                    útil laboral y el haber jubilatorio percibido en la
                    actualidad.
                  </p>
                </div>

                {/* Cómo saber si corresponde */}
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-teal-800 mb-4">
                    ¿Cómo saber si corresponde el Reajuste de haberes?
                  </h3>
                  <p className="text-teal-700 leading-relaxed mb-4">
                    Es altamente probable que usted en la actualidad perciba un
                    haber jubilatorio menor al que le corresponde. Salvo los
                    casos de jubilados que nunca hicieron aportes en relación de
                    dependencia, el resto de los beneficios deben ser revisados.
                  </p>
                  <p className="text-teal-700 leading-relaxed mb-4">
                    Aun si se jubiló con la moratoria, pero tenía 10 años en
                    relación de dependencia, amerita que haga la consulta y
                    confirme cual es el haber que le corresponde.
                  </p>
                  <div className="bg-teal-100 p-4 rounded border-l-4 border-teal-500">
                    <p className="text-teal-800 text-lg font-bold">
                      Usted NO debe resignarse, ¡no permita que su haber
                      jubilatorio sea menor al que por derecho le corresponde!
                    </p>
                  </div>
                </div>

                {/* Procedimiento de juicio */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ReajusteProcedureSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Cuadros Comparativos */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Cuadros Comparativos con Jurisprudencia Actualizada al 2025
            </h2>
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src={getImagePath(
                  "assets/pdf/Cuadros_Comparativos_Jurisprudencia_2025.pdf"
                )}
                title="Cuadros Comparativos con Jurisprudencia Actualizada al 2025"
                className="w-full h-[800px] border-0"
                aria-label="Documento PDF de cuadros comparativos con jurisprudencia actualizada al 2025"
              />
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              Si no puede visualizar el documento,{" "}
              <a
                href={getImagePath(
                  "assets/pdf/Cuadros_Comparativos_Jurisprudencia_2025.pdf"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
                aria-label="Abrir PDF en una nueva pestaña"
              >
                haga clic aquí para descargarlo
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
