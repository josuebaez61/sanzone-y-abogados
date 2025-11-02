import { RetirementProcedureItem } from "@/models";

export const PROCEDURE_ITEMS: RetirementProcedureItem[] = [
  new RetirementProcedureItem(
    "COMPUTO DE APORTES",
    [
      "Análisis de la cantidad de años de servicios.",
      "Cálculo estimativo del promedio de los últimos diez años.",
      "Incorporación en el sistema de reciprocidad de aportes en otras cajas (IPS, cajas profesionales).",
    ],
    1,
    "person_search"
  ),
  new RetirementProcedureItem(
    "CONFECCIÓN DE HABER CAJA",
    [
      "Confección de cálculo equiparable al que determina ANSeS.",
      "Proyección de un posible juicio de reajuste.",
    ],
    2,
    "calculate"
  ),
  new RetirementProcedureItem(
    "TURNO EN ANSES",
    [
      "Presentación de SICAM (de requerirlo).",
      "Presentación de formularios de rigor.",
      "Caratulación del expediente administrativo.",
      "Elección de la entidad bancaria.",
    ],
    3,
    "event"
  ),
  new RetirementProcedureItem(
    "MONITOREO",
    [
      "Chequeo constante para evitar dilaciones.",
      "Interposición de prontos despachos ante una demora.",
    ],
    4,
    "visibility"
  ),
  new RetirementProcedureItem(
    "APROBACIÓN",
    [
      "Control de que el expediente haya sido resuelto favorablemente.",
      "Control desde el plazo de aprobación al del efectivo cobro.",
    ],
    5,
    "check"
  ),
  new RetirementProcedureItem(
    "PRIMER PAGO",
    [
      "Acompañamiento al beneficiario a la entidad bancaria.",
      "Asesoramiento con respecto a los paquetes comerciales de las entidades bancarias.",
      "Facturación.",
    ],
    6,
    "attach_money"
  ),
];
