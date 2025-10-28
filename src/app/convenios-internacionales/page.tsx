import { WHATSAPP_URL } from "@/constants";

export default function ConveniosInternacionales() {
  return (
    <main>
      {/* Contenido principal sin banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Convenios Internacionales
              </h1>

              <div className="space-y-8">
                {/* Introducción */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    Jubilación en el Extranjero
                  </h2>
                  <p className="text-blue-700 leading-relaxed">
                    Los convenios internacionales permiten que los trabajadores
                    puedan cobrar su jubilación en el país donde viven,
                    facilitando el acceso a los beneficios previsionales sin
                    importar su ubicación geográfica.
                  </p>
                </div>

                {/* Requisitos principales */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    Requisitos que debe reunir (Puede cobrar dicha jubilación en
                    el país donde vive)
                  </h2>

                  <div className="space-y-6">
                    {/* Años de servicios */}
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        1. Años de Servicios Requeridos
                      </h3>
                      <p className="text-green-700">
                        Reunir 30 (treinta) años de servicios con aportes
                        computables en uno o más regímenes comprendidos en el
                        sistema de reciprocidad jubilatoria.
                      </p>
                    </div>

                    {/* Edad mínima */}
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        2. Edad Mínima Requerida
                      </h3>
                      <p className="text-green-700">
                        La edad mínima requerida para acceder a la prestación,
                        tanto para trabajadores en relación de dependencia como
                        para trabajadores autónomos, es de:
                      </p>
                      <ul className="mt-2 text-green-700">
                        <li>
                          • <strong>60 años para las mujeres</strong>
                        </li>
                        <li>
                          • <strong>65 años para los hombres</strong>
                        </li>
                      </ul>
                    </div>

                    {/* Compensación por edad excedente */}
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        3. Compensación por Edad Excedente
                      </h3>
                      <p className="text-green-700">
                        Si al momento de acceder a la prestación excede la edad
                        mínima, puede compensar 1 (un) año de servicios por cada
                        2 (dos) años de edad excedentes.
                      </p>
                    </div>

                    {/* Moratoria y declaración jurada */}
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        4. Moratoria y Declaración Jurada
                      </h3>
                      <p className="text-green-700">
                        Para reunir los 30 (treinta) años de servicios podrá
                        adherirse a la Moratoria para hacer uso de la
                        Declaración Jurada por tareas en relación de dependencia
                        o autónomas con anterioridad al 01/01/69, como así
                        también aplicar el Art. 3 de la Ley 24.476 hasta el
                        30/09/93.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tabla de años por Declaración Jurada */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-yellow-800 mb-6">
                    Cálculo de Años por Declaración Jurada
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg shadow-md">
                      <thead className="bg-yellow-100">
                        <tr>
                          <th className="px-4 py-3 text-left text-yellow-800 font-semibold border-b">
                            Año de Cese o Presentación
                          </th>
                          <th className="px-4 py-3 text-left text-yellow-800 font-semibold border-b">
                            Declaración Jurada anterior a 1969 o art. 3 Ley
                            24.476 hasta el 30/09/93
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">1994/95</td>
                          <td className="px-4 py-3 text-gray-700 font-semibold">
                            7 años
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">1996/97</td>
                          <td className="px-4 py-3 text-gray-700 font-semibold">
                            6 años
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">1998/99</td>
                          <td className="px-4 py-3 text-gray-700 font-semibold">
                            5 años
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">2000/01</td>
                          <td className="px-4 py-3 text-gray-700 font-semibold">
                            4 años
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">2002/03</td>
                          <td className="px-4 py-3 text-gray-700 font-semibold">
                            3 años
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">2004/05</td>
                          <td className="px-4 py-3 text-gray-700 font-semibold">
                            2 años
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">2006/07</td>
                          <td className="px-4 py-3 text-gray-700 font-semibold">
                            1 año
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-yellow-800 font-medium">
                        <strong>Importante:</strong> Estos años por Declaración
                        Jurada deben ser consignados a partir de la fecha en que
                        se cumplieron los 18 años de edad, no pudiendo superar
                        el límite de 7 años.
                      </p>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-yellow-800 font-medium">
                        <strong>Para ceses anteriores al año 1994:</strong> El
                        límite máximo por Declaración Jurada es de siete (7)
                        años.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Requisitos de edad para ceses 1994-2000 */}
                <div className="bg-red-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-red-800 mb-4">
                    IMPORTANTE
                  </h2>
                  <p className="text-red-700 leading-relaxed mb-6">
                    Si usted cesó sus actividades entre los años 1994 y 2000,
                    reuniendo los treinta (30) años de aportes, el requisito de
                    edad mínima para acceder a la prestación es el siguiente:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg shadow-md">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="px-4 py-3 text-center text-red-800 font-semibold border-b">
                            Año de Cese
                          </th>
                          <th className="px-4 py-3 text-center text-red-800 font-semibold border-b">
                            Hombres
                          </th>
                          <th className="px-4 py-3 text-center text-red-800 font-semibold border-b">
                            Mujeres
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-center text-gray-700 font-medium">
                            1994/95
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 font-semibold">
                            62 - 65
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 font-semibold">
                            57 - 60
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-center text-gray-700 font-medium">
                            1996/97
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 font-semibold">
                            63 - 65
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 font-semibold">
                            58 - 60
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-center text-gray-700 font-medium">
                            1998/99/00
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 font-semibold">
                            64 - 62
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 font-semibold">
                            59 - 60
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Documentación a presentar */}
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-indigo-800 mb-6">
                    DOCUMENTACIÓN A PRESENTAR
                  </h2>

                  <div className="space-y-8">
                    {/* Del Titular */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-800 mb-4">
                        DEL TITULAR
                      </h3>
                      <ul className="space-y-2 text-indigo-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span>
                            Exhibir DNI, LC, o LE, para acreditar identidad.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span>
                            En caso de no poseer DNI, LC, o LE deberá presentar
                            constancia de DNI en trámite.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Además de la documentación detallada precedentemente */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-800 mb-4">
                        Además de la documentación detallada precedentemente
                      </h3>

                      {/* Trabajador en relación de dependencia */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-indigo-700 mb-3">
                          Si es trabajador en relación de dependencia
                        </h4>

                        <div className="ml-4 space-y-4">
                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-2">
                              Con certificación de servicios:
                            </h5>
                            <ul className="space-y-1 text-indigo-700 text-sm">
                              <li>
                                • Formulario P.S.6.2 &ldquo;Certificación de
                                Servicios y Remuneraciones&rdquo;, y los
                                extendidos con anterioridad, debidamente
                                certificados.
                              </li>
                              <li>
                                • Formulario P.S.6.1 &ldquo;Afectación de
                                Haberes&rdquo; debidamente certificado, en los
                                casos de renuncia por Decreto 8820/62, 9202/62 y
                                557/63 o, si trabajando en una repartición
                                Nacional su haber sufre descuentos de Seguro de
                                Vida o Préstamo.
                              </li>
                              <li>
                                • Formulario P.S.5.7 &ldquo;Derivación de Aportes de
                                Obra Social&rdquo;, en caso de optar por la misma obra
                                social de su actividad laboral.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-2">
                              Sin certificación de servicios/A falta de
                              Certificación de Servicios, podrá presentar:
                            </h5>
                            <ul className="space-y-1 text-indigo-700 text-sm">
                              <li>
                                • Recibos de sueldo, donde consten las
                                retenciones en concepto de aportes jubilatorios.
                              </li>
                              <li>
                                • Comprobante de afiliación a Obras Sociales y/o
                                gremios. Original y fotocopia.
                              </li>
                              <li>
                                • Constancia de afiliación anterior a la
                                asignación del CUIL (ex cajas). Original y
                                fotocopia.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Trabajador autónomo */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-indigo-700 mb-3">
                          Si es trabajador autónomo
                        </h4>

                        <div className="ml-4 space-y-4">
                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-2">
                              Si tiene boletas de pagos autónomos y/o
                              monotributistas para validar:
                            </h5>
                            <ul className="space-y-1 text-indigo-700 text-sm">
                              <li>
                                • Formularios 558/A - 558/B y 558/C
                                &ldquo;Solicitud de Determinación de Deuda y
                                Situación de Revista Autónomos - Declaración
                                Jurada - SICAM&rdquo; (Sistema de Información
                                para Contribuyentes Autónomos y
                                Monotributistas). Se obtiene a través de la
                                página de Internet de AFIP.
                              </li>
                              <li>
                                • Boletas originales y fotocopias de los pagos
                                autónomos y/o monotributistas incorporados y/o
                                modificados a través del Sistema SICAM.
                              </li>
                              <li>
                                • Ticket de cancelación de deuda emitido por el
                                banco, de corresponder y sólo en los casos que
                                no se encuentre registrada la cancelación de la
                                deuda en SICAM, una vez finalizado el proceso de
                                validación.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-2">
                              Si no tiene boletas de pagos para validar:
                            </h5>
                            <ul className="space-y-1 text-indigo-700 text-sm">
                              <li>
                                • Formularios 558/A - 558/B y 558/C
                                &ldquo;Solicitud de Determinación de Deuda y
                                Situación de Revista Autónomos - Declaración
                                Jurada - SICAM&rdquo; (Sistema de Información
                                para Contribuyentes Autónomos y
                                Monotributistas). Se obtiene a través de la
                                página de Internet de AFIP.
                              </li>
                              <li>
                                • Ticket de cancelación de deuda emitido por el
                                banco, de corresponder, sólo en los casos que no
                                se encuentre registrada la cancelación de la
                                deuda en SICAM.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Anexo de actividades con características especiales */}
                      <div>
                        <h4 className="text-lg font-semibold text-indigo-700 mb-3">
                          Anexo de actividades con características especiales
                        </h4>
                        <p className="text-indigo-700 text-sm mb-4">
                          Si desempeña alguna de las tareas que se detallan a
                          continuación, debe presentar además, la documentación
                          específica en cada caso.
                        </p>

                        <div className="ml-4 space-y-3">
                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-1">
                              Personal Embarcado:
                            </h5>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>
                                • Libreta de Embarco y Permiso de Embarco.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-1">
                              Estibador Portuario:
                            </h5>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>• Libreta de afiliado (de poseerla).</li>
                              <li>• Documento Único Portuario.</li>
                              <li>
                                • Constancia extendida por la Prefectura Naval
                                Argentina, de no poseer DUP.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-1">
                              Aeronavegantes:
                            </h5>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>
                                • Personal con función aeronáutica: Certificado
                                extendido por la Fuerza Aérea, indicando las
                                horas de vuelo, discriminado hasta el 30/06/94 y
                                a partir del 01/07/94.
                              </li>
                              <li>
                                • Personal sin Función aeronáutica: Certificado
                                extendido por la empresa, indicando las horas de
                                vuelo, discriminado hasta el 30/06/94 y a partir
                                del 01/07/94.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-1">
                              Servicio Doméstico:
                            </h5>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>• Libreta de Trabajo (de poseerla).</li>
                              <li>• Libreta Sanitaria (de poseerla).</li>
                              <li>
                                • Fotocopias autenticadas de toda constancia en
                                la que figure su actividad como empleada en el
                                servicio doméstico (Datos del Padrón Electoral,
                                Título de Propiedad, Créditos Personales, Carnet
                                de Mutual u Obra Social, etc.)
                              </li>
                              <li>
                                • Certificados Médicos extendidos por atención
                                en el domicilio del empleador.
                              </li>
                              <li>
                                • Original y Fotocopias de las boletas de
                                depósito de aportes y Contribuciones
                                Previsionales, en caso de poseerlas.
                              </li>
                              <li>• Fotos 4x4.</li>
                              <li>
                                • Trascripción del domicilio del empleador y del
                                afiliado (cuando ambos coinciden), según figure
                                en sus respectivos documentos.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-1">
                              Retiros Militares, de Prefectura o Gendarmería:
                            </h5>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>
                                • Haber tope del cargo máximo de acuerdo a la
                                fuerza donde prestó servicios.
                              </li>
                              <li>
                                • Detalle de haberes percibidos en concepto de
                                retiro, desde la fecha de solicitud del
                                beneficio a otorgar, hasta la actualidad.
                              </li>
                              <li>
                                • Certificado donde consten periodos que fueron
                                considerados para el otorgamiento del retiro.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-1">
                              Retiro Policial:
                            </h5>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>
                                • Constancia donde se indique si el retiro es
                                por servicios civiles o policiales.
                              </li>
                              <li>
                                • Certificado donde conste los servicios que
                                fueron considerados para el otorgamiento del
                                mismo (nacionales o provinciales).
                              </li>
                              <li>
                                • Detalles de haberes percibidos en concepto de
                                retiro, desde la fecha de solicitud del
                                beneficio a otorgar, hasta la actualidad.
                              </li>
                              <li>
                                • Haber tope del cargo máximo de acuerdo a la
                                fuerza donde prestó servicios.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-1">
                              Productores de Seguros:
                            </h5>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>
                                • Certificaciones extendidas por servicios
                                anteriores al 31/12/68, consignando los sueldos
                                percibidos por todo el período en la moneda en
                                que fueron abonados, como así también, fecha de
                                primera y última operación.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-1">
                              Otros elementos para acreditar Servicios son las
                              Libretas de Trabajo:
                            </h5>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>• Libreta de maternidad.</li>
                              <li>• Libreta de trabajo a domicilio.</li>
                              <li>
                                • Libreta de afiliación a la ex caja de
                                industria.
                              </li>
                              <li>
                                • Libreta de fondo de desempleo (construcción).
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Del Representante */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-800 mb-4">
                        DEL REPRESENTANTE
                      </h3>
                      <ul className="space-y-2 text-indigo-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span>
                            Exhibir DNI, LC o LE para acreditar identidad.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span>
                            Formulario P.S.6.4 &ldquo;Carta Poder&rdquo;.
                            Original, sólo en caso de no ser incluido en el
                            Formulario de Solicitud de Prestaciones
                            Previsionales.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span>
                            Deberá estar registrado en la Base de Gestores
                            autorizados como abogado/gestor habilitado.
                          </span>
                        </li>
                      </ul>

                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-indigo-700 mb-3">
                          Caso contrario, se deberá solicitar:
                        </h4>

                        <div className="ml-4 space-y-4">
                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-2">
                              Si es profesional (abogado):
                            </h5>
                            <ul className="space-y-1 text-indigo-700 text-sm">
                              <li>• Credencial habilitante.</li>
                              <li>• DNI y Fotocopia de la 1ra y 2da hoja.</li>
                              <li>
                                • Nota del profesional solicitando su
                                incorporación al registro de abogados de la
                                ANSES.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-indigo-600 mb-2">
                              Si es gestor:
                            </h5>
                            <ul className="space-y-1 text-indigo-700 text-sm">
                              <li>• DNI y Fotocopia de la 1ra y 2da hoja.</li>
                              <li>
                                • Nota solicitando su incorporación al registro
                                de gestores de la ANSES.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nuestros servicios */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Nuestros Servicios en Convenios Internacionales
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">
                          Asesoramiento sobre convenios vigentes
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">
                          Evaluación de requisitos de elegibilidad
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">
                          Gestión de documentación requerida
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">
                          Tramitación ante ANSES
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">
                          Representación en el exterior
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">
                          Consultoría en moratorias
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">
                          Seguimiento del trámite
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">
                          Asistencia en declaraciones juradas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Llamada a la acción */}
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    ¿Necesita Asesoramiento para Convenios Internacionales?
                  </h3>
                  <p className="text-lg mb-6">
                    Nuestro equipo especializado le ayudará a gestionar su
                    jubilación en el extranjero de manera eficiente y segura.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Consultar con nuestro equipo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
