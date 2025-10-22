import { RetirementProcedureItem } from "@/models";

export const PROCEDURE_ITEMS: RetirementProcedureItem[] = [
  new RetirementProcedureItem(
    "COMPUTO DE APORTES",
    [
      "Análisis de cantidad de años de servicios",
      "Cálculo estimativo del promedio de los últimos diez años",
      "Eventualmente incorporar aportes de otras cajas (IPS, cajas profesionales)",
    ],
    1,
    "person_search"
  ),
  new RetirementProcedureItem(
    "CONFECCIÓN DE HABER CAJA",
    [
      "Cálculo equiparable al que determina Anses",
      "Proyección de un posible juicio",
    ],
    2,
    "calculate"
  ),
  new RetirementProcedureItem(
    "TURNO EN ANSES",
    [
      "Presentación de SICAM (de requerirlo)",
      "Presentación de formularios de rigor",
      "Caratulación del expediente administrativo",
      "Elección de la entidad bancaria",
    ],
    3,
    "search"
  ),
  new RetirementProcedureItem(
    "MONITOREO",
    [
      "Chequeo constante en que los actos procesales no sean dilatorios",
      "Interposición de PRONTOS DESPACHOS (eventualmente)",
    ],
    4,
    "edit"
  ),
  new RetirementProcedureItem(
    "APROBACIÓN",
    [
      "Control de que el expediente haya sido resuelto favorablemente",
      "Control desde el plazo de aprobación al del efectivo cobro",
    ],
    5,
    "check"
  ),
  new RetirementProcedureItem(
    "PRIMER PAGO",
    [
      "Acompañamiento al beneficiario a la entidad bancaria",
      "Asesoramiento con respecto a los paquetes comerciales de las entidades bancarias",
      "Facturación",
    ],
    6,
    "attach_money"
  ),
];
