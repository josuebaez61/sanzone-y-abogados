"use client";
import { faqs } from "@/constants";
import { Accordion } from "primereact/accordion";

export const FAQsSection = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Preguntas frecuentes
      </h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Panel key={faq.question} value={index}>
            <Accordion.Header>
              {faq.question}
              <Accordion.HeaderIndicator />
            </Accordion.Header>
            <Accordion.Content>{faq.answer}</Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </section>
  );
};
