export const CONTACT_INFO = {
  email: "sanzonegraciela8@gmail.com",
  phone: "+54 11 7519-9376",
  address: "Cdad. de la Paz 3491, Cdad. Autónoma de Buenos Aires",
  mapUrl: "https://maps.app.goo.gl/iCUagfnmtYVu9xap9",
  embedMapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.112210286665!2d-58.4681903!3d-34.550714199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb69c9b41ae97%3A0x9d141aa6211ecc16!2sCdad.%20de%20la%20Paz%203491%2C%20C1429ACK%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761133254993!5m2!1ses-419!2sar`,
};

export const FORMATTED_PHONE = CONTACT_INFO.phone
  .split(" ")
  .join("")
  .replace("-", "");

export const WHATSAPP_URL = `https://wa.me/${FORMATTED_PHONE}`;
