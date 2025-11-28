import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsAppButton() {
    const phoneNumber = "243828073633";
    const message = "Bonjour, je viens de votre site. J'aimerais...";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
        >
            <WhatsAppIcon className="h-8 w-8" />
        </Link>
    );
}
