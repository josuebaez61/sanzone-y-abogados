"use client";
import { WHATSAPP_URL } from "@/constants";

export const WhatsappButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      title="WhatsApp"
      className="z-20 fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-4 w-18 h-18 shadow-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
    >
      <i className="pi pi-whatsapp" style={{ fontSize: "2rem" }} />
    </a>
  );
};
