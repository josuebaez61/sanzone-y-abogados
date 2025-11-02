export const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Conocenos
            </h2>
            <div className="p-6 rounded-lg">
              <p className="text-center text-xl text-gray-700 leading-relaxed">
                Soy la{" "}
                <strong className="text-primary">Dra. Graciela Sanzone</strong>,
                directora del equipo previsional de nuestro estudio jurídico.
                Con más de treinta años de trayectoria en el ejercicio de la
                abogacía, te invito a conocer a los profesionales que me
                acompañan.
              </p>
              <p className="text-center text-xl text-gray-700 leading-relaxed mt-6">
                Juntos trabajamos con compromiso y excelencia para proteger la
                calidad de vida de nuestros clientes, ofreciendo asesoramiento
                integral en materia previsional: desde el diseño de cálculos
                jubilatorios precisos, la judicialización de causas contra{" "}
                <strong className="text-primary">ANSeS</strong>, hasta
                estrategias efectivas para conservar coberturas médicas de alto
                nivel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
