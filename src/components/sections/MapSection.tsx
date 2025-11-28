import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    icon: MapPin,
    text: "No 03, Av Miabi, Q Joli parc, C Ngaliema, Kinshasa",
  },
  {
    icon: Phone,
    text: "+243 82 807 3633",
    highlight: true,
  },
  {
    icon: Mail,
    text: "contact@luquav.com",
  },
];

export default function MapSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-80 md:h-full w-full rounded-lg overflow-hidden shadow-lg min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31830.49969429185!2d15.27138334133309!3d-4.307998635882019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a310c01e52377%3A0x23f6de456801991c!2sGombe%2C%20Kinshasa%2C%20Rep%C3%BAblica%20Democr%C3%A1tica%20del%20Congo!5e0!3m2!1ses-419!2sus!4v1721946029517!5m2!1ses-419!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold mb-4">Nous Trouver</h2>
            <p className="text-muted-foreground mb-8">
              Visitez nos bureaux ou contactez-nous. Nous sommes prêts à discuter de votre prochain projet.
            </p>
            <Card className="shadow-sm bg-card/50 border-border">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {contactDetails.map((detail, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <detail.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className={`text-foreground ${detail.highlight ? 'text-primary font-bold text-lg':''}`}>{detail.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
