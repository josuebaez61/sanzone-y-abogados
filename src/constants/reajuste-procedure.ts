import { ReajusteProcedureItem } from "@/models";

export const REAJUSTE_PROCEDURE_ITEMS: ReajusteProcedureItem[] = [
  new ReajusteProcedureItem(
    "PROYECCIÓN",
    "El primer paso consiste en realizar un estudio de factibilidad, donde se examina y se vuelve a calcular el monto de tu jubilación con los parámetros judiciales (FALLOS ELIFF, BLANCO, BADARO, CORTES, QUIROGA ETC.); En esta etapa, se revisan todos los aspectos y se comprueba si el cálculo de tu jubilación reajustada es mayor al haber caja, y se analiza que haya una confiscatoriedad mayor al 15% al efecto dela efectiva viabilidad.",
    "analytics"
  ),
  new ReajusteProcedureItem(
    "PROCESO DE INSTANCIA ADMINISTRATIVA Y JUDICIAL",
    "En una primera instancia hay que agotar la instancia administrativa; eventualmente se puede prescindir de este proceso y acudir directamente a la justicia de seguridad social, aunque optamos por la primera estrategia; una vez obtenida la denegatoria de ANSES, iniciamos el juicio de reajuste de haberes. Este juicio consta de dos instancias principales: primera instancia y segunda instancia. Generalmente, ANSES no apela a la Corte Suprema, lo que significa que el fallo queda firme en la segunda instancia.",
    "gavel"
  ),
  new ReajusteProcedureItem(
    "COBRO",
    "El último paso es el cobro del reajuste. En el 50% de los casos, ANSES paga correctamente el monto adeudado. Si ANSES paga mal o no paga, se procede a una ejecución de sentencia. Esta ejecución puede incluir un embargo judicial para asegurar que el jubilado reciba todo el retroactivo y el ajuste mensual que le corresponde. El expediente no se cierra hasta que la persona cobra todo el retroactivo y se ajusta el haber mensual a lo que corresponde según el fallo judicial.",
    "attach_money"
  ),
];
