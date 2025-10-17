"use client";
import { Accordion } from "primereact/accordion";

export const FAQsSection = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-10">
        Preguntas frecuentes
      </h2>
      <Accordion>
        <Accordion.Panel value="1">
          <Accordion.Header>
            What is this service about?
            <Accordion.HeaderIndicator />
          </Accordion.Header>
          <Accordion.Content>
            <p>
              This service helps you manage your projects more efficiently by
              offering real-time collaboration, task tracking, and powerful
              analytics. Whether you’re working solo or in a team, it’s built to
              scale with your needs.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel value="2">
          <Accordion.Header>
            Is my data secure?
            <Accordion.HeaderIndicator />
          </Accordion.Header>
          <Accordion.Content>
            <p>
              Yes. We use end-to-end encryption and follow industry best
              practices to ensure your data is protected. Your information is
              stored on secure servers and regularly backed up.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel value="3">
          <Accordion.Header>
            Can I upgrade or downgrade my plan later?
            <Accordion.HeaderIndicator />
          </Accordion.Header>
          <Accordion.Content>
            <p>
              Absolutely. You can change your subscription plan at any time from
              your account settings. Changes take effect immediately, and any
              billing adjustments are handled automatically.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </section>
  );
};
