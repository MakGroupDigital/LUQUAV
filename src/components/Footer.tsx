
import Link from "next/link";
import { Facebook, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/nos-realisations", label: "Nos Réalisations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/commencer-un-projet", label: "Commencer un Projet" },
];

const legalLinks = [
    { href: "/politique-utilisation", label: "Politique d'utilisation" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
    { href: "/reglement-rgpd", label: "Règlement RGPD" },
];

const partnerLinks = [
    { href: "/partenariats", label: "Accréditations" },
    { href: "/devenir-partenaire", label: "Devenir partenaire" },
]

const phoneNumber = "243828073633";
const message = "Bonjour, je viens de votre site. J'aimerais...";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


const socialLinks = [
  { icon: WhatsAppIcon, href: whatsappUrl, label: "WhatsApp" },
  { icon: Facebook, href: "https://www.facebook.com/luquav", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col">
            <Link href="/" aria-label="LUQUAV Sarl Home" className="mb-4 inline-block">
              <Logo className="h-9 w-auto" />
            </Link>
            <p className="text-sm">
              BIEN CHIFFRER, BIEN GERER, MIEUX BATIR.
            </p>
             <div className="mt-auto pt-4">
                <h3 className="font-semibold text-foreground mb-4">Suivez-nous</h3>
                <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                    <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    >
                    <social.icon className="h-5 w-5" />
                    </Link>
                ))}
                </div>
            </div>
          </div>

          {/* Site Plan */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Plan du Site</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
             <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary"/> 
                <span>+243 82 807 3633</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary"/>
                <a href="mailto:contact@luquav.com" className="hover:text-primary transition-colors">contact@luquav.com</a>
              </li>
            </ul>

            <h3 className="font-semibold text-foreground mb-4">Légal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Partenariats</h3>
            <ul className="space-y-2">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} LUQUAV sarl. Tous droits réservés.
          </p>
          <p className="mt-2">
            Powered by <a href="https://www.charmant-nyungu.com" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">M.charmant Nyungu K.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
