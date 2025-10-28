"use client";
import { faqs } from "@/constants";
import { Accordion } from "primereact/accordion";

export const FAQsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Accordion>
                {faqs.map((faq, index) => (
                  <Accordion.Panel key={faq.question} value={index}>
                    <Accordion.Header>
                      {faq.question}
                      <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </Accordion.Panel>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
