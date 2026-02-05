import { Phone, MessageCircle } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="tel:00971526111172"
        className="w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Call us"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=00971526111172&text=Hi,%20A3S%20Solutions%20Limited"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
};
