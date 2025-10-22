import { CONTACT_INFO } from "@/constants";

export const FooterMap = () => {
  return (
    <iframe
      src={CONTACT_INFO.embedMapUrl}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
