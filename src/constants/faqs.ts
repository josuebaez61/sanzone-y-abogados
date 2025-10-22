import { FAQ } from "@/models";

export const faqs = [
  new FAQ(
    "¿Cuál será el monto de mi jubilación?",
    `
    <p>La jubilación está constituida por tres componentes: PBU, PC y PAP, y en Argentina se calcula considerando los aportes, salarios y años de servicio. Aquí un resumen:</p>
    <ul>
      <li><strong>PBU:</strong> en instancia administrativa suele ser un importe establecido por ley.</li>
      <li><strong>PC:</strong> el importe varía en función de los años trabajados hasta julio de 1994.</li>
      <li><strong>PAP:</strong> se calcula considerando los años aportes desde agosto de 1994 hasta el cese de actividades.</li>
    </ul>
    <br />
    <p>A los efectos de la determinación de los componentes PC y PAP, es de vital importancia calcular el promedio de las 120 remuneraciones históricas (10 años) previos al cese. ANSES toma los siguientes parámetros:</p>
    <ul>
      <li>Años aportados</li>
      <li>Salario promedio</li>
      <li>Rentas de Referencia</li>
      <li>Simultaneidades</li>
    </ul>
    <br />
    <p>Nuestro equipo hace una proyección del cálculo haber caja, independientemente de los parámetros que se usen en sede judicial.</p>
    `
  ),
  new FAQ(
    "¿Existe el 82% móvil?",
    `<p>El concepto del "82% móvil" para jubilaciones no está vigente para la mayoría de los jubilados, a pesar de que se busca su implementación legislativamente. Actualmente, solo algunos jubilados de regímenes especiales lo tienen, como magistrados, funcionarios del servicio exterior, investigadores científicos y docentes universitarios, además de algunos empleados públicos provinciales en cajas no transferidas</p>`
  ),
  new FAQ(
    "¿Puedo trabajar una vez jubilado?",
    `
    <p>La respuesta es <strong>SÍ</strong>, no obstante, tenés que tener en cuenta las siguientes consideraciones:</p>
    <h2>Aportes que se te descuentan</h2>
    <p>Aunque ya hayas conseguido jubilarte, tenés la obligación de realizar aportes y contribuciones sobre tu nuevo sueldo al volver a la actividad laboral en relación de dependencia.</p>

    <h2>Gestión del nuevo sueldo</h2>
    <p>Si querés gestionar tu nuevo sueldo de la forma más cómoda, podés informarte sobre los requisitos para una exención del sueldo y cómo podés cambiar tu situación de revista en ANSES.</p>

    <h2>Antigüedad e indemnización</h2>
    <p>Si te jubilás y seguís trabajando para el mismo empleador, la ley considera que finalizaste tu relación laboral anterior y comenzás una nueva.</p>
    `
  ),
  new FAQ(
    "Si me jubilo, ¿pierdo mi obra social?",
    `<p>Al jubilarte, tienes derecho a seguir con tu obra social actual, aunque por defecto se te asigne PAMI. Para conservar tu obra social, debes notificarlo a la empresa o realizar el trámite ante ANSES dentro de los primeros 6 meses. Si la obra social se niega, se puede iniciar un reclamo judicial.</p>`
  ),
  new FAQ(
    "Una vez jubilado, ¿puedo seguir facturando?",
    `<p>Sí, una vez jubilado podés seguir facturando, ya sea como trabajador independiente (autónomo o monotributista) o como empleado en relación de dependencia. Si sos monotributista, debés informar a la AFIP tu condición de jubilado para modificar tu situación y pagar solo los componentes no relacionados con la jubilación y obra social.</p>`
  ),
  new FAQ(
    "¿Qué moratorias se encuentran vigentes?",
    `<p>La moratoria previsional más común que permitía acceder a la jubilación a quienes alcanzaron la edad pero no los 30 años de aportes venció el 23 de marzo de 2025 y no fue prorrogada por el gobierno. Sin embargo, continúa vigente la moratoria para trabajadores en actividad (Ley 27.705), que les permite comprar aportes para completar los 30 años, y la Ley 24.476 de moratoria permanente, aunque con limitaciones.</p>`
  ),
  new FAQ(
    "¿Qué hago con mis aportes en otras cajas?",
    `<p>Si realizaste aportes en dos cajas previsionales (por ejemplo, ANSES y una caja provincial), debes solicitar un <b>reconocimiento de servicios</b> en la caja donde realizaste la menor cantidad de aportes, para poder unificarlos en la caja principal y así iniciar el trámite jubilatorio donde te corresponde.</p>`
  ),
  new FAQ(
    "¿Sirve el amparo para mantener mi cobertura?",
    `<p>Sí, el amparo es un recurso legal efectivo para mantener tu obra social al jubilarte si esta se niega a continuar la afiliación, ya que la ley protege tu derecho a mantener la cobertura de salud. Si tu obra social no acepta tu continuidad, puedes iniciar un juicio de amparo para que un juez la obligue a seguir aceptando los aportes de tu jubilación y garantizar la cobertura.</p>`
  ),
];
