"use client";
import { WHATSAPP_URL } from "@/constants";

export const WhatsappButton = () => {
  return (
    <button
      onClick={() => window.open(WHATSAPP_URL, "_blank")}
      className="fixed bottom-10 right-10 bg-green-500 text-white rounded-full p-4 w-18 h-18 shadow-xl flex items-center justify-center"
    >
      <i className="pi pi-whatsapp" style={{ fontSize: "2rem" }} />
    </button>
  );
};
