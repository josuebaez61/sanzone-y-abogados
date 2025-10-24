import { Banner } from "@/components/banner";
import { BluredCard } from "@/components/blured-card";
import { RetirementProcedureSection } from "@/components/retirement-procedure-section";
import Image from "next/image";

export default function Jubilaciones() {
  return (
    <main className="space-y-20">
      <Banner
        backgroundImage="pexels-kampus-8441823.jpg"
        backgroundSize="auto 100%"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="1000px"
      >
        <div className="flex justify-center items-center h-full">
          <BluredCard>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Imagen circular */}
              <div className="flex-shrink-0 order-0 lg:order-1">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                  <Image
                    src="/assets/images/sanzone-5.jpg"
                    alt="Jubilaciones - Sanzone & Abogados"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Texto */}
              <div className="flex-1 order-1 lg:order-0">
                <h2 className="text-3xl font-bold text-white mb-8">
                  ¿Qué es la Jubilación?
                </h2>
                <p className="text-xl text-white leading-relaxed">
                  Jubilación es el acto administrativo emanado por la ANSeS, por
                  el que un trabajador activo, solicita pasar a una situación
                  pasiva o híbrida laboral tras haber alcanzado la edad legal
                  para ello y cumpliendo con los años de servicios.
                </p>
                <p className="text-xl text-white leading-relaxed">
                  Los requisitos están establecidos en el ordenamiento jurídico
                  argentino por ley 24.241.
                </p>
                <p className="text-xl text-white leading-relaxed">
                  En el régimen general hay que alcanzar la regla 65-30 hombres,
                  60-30 mujeres. Vale decir que hay regímenes diferenciales que
                  estan contemplados en el ordenamiento jurídico, y que en base
                  a sus parámetros, pueden variar la cantidad de años de
                  servicios y la edad jubilatoria.
                </p>
              </div>
            </div>
          </BluredCard>
        </div>
      </Banner>
      <RetirementProcedureSection />
    </main>
  );
}
