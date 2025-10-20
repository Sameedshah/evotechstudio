import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  if (typeof window !== "undefined") {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }
};

// Email service configuration
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  salesTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SALES!,
  thanksTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_THANKS!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};