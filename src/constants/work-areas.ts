import { WorkArea } from "@/models";

export const WORK_AREAS = [
  new WorkArea(
    "Jubilaciones",
    "Descripción de las jubilaciones",
    "mood",
    "/jubilaciones"
  ),
  new WorkArea(
    "Convenios Internacionales",
    "Descripción de los convenios internacionales",
    "public",
    "/convenios-internacionales"
  ),
  new WorkArea(
    "Negocios Inmobiliarios",
    "Descripción de los negocios inmobiliarios",
    "apartment",
    "/negocios-inmobiliarios"
  ),
  new WorkArea(
    "Liquidación de Impuestos",
    "Descripción de la liquidación de impuestos",
    "calculate",
    "/liquidacion-de-impuestos"
  ),
];
