import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: MapPin,
    text: "No 03, Av Miabi, Q Lukunga, C Ngaliema, Kinshasa (M62V+PH)",
    link: "https://maps.app.goo.gl/bf2LPjct8jdcS4y38",
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
              src="https://www.google.com/maps?q=No+03,+Avenue+Miabi,+Quartier+Lukunga,+Commune+Ngaliema,+Kinshasa,+RD+Congo+(M62V%2BPH)&output=embed&zoom=17"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Localisation LUQUAV - No 03, Av Miabi, Q Lukunga, C Ngaliema, Kinshasa"
            ></iframe>
            <div className="absolute top-4 right-4 z-10">
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
              >
                <a
                  href="https://maps.app.goo.gl/bf2LPjct8jdcS4y38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ouvrir dans Google Maps
                </a>
              </Button>
            </div>
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
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-foreground hover:text-primary transition-colors ${detail.highlight ? 'text-primary font-bold text-lg':''}`}
                        >
                          {detail.text}
                        </a>
                      ) : (
                        <span className={`text-foreground ${detail.highlight ? 'text-primary font-bold text-lg':''}`}>{detail.text}</span>
                      )}
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
