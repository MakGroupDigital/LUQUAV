
import AnimatedCounter from "@/components/AnimatedCounter";
import { Briefcase, Users } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 14,
    label: "Projets Réalisés",
    suffix: ""
  },
  {
    icon: Users,
    value: 50000,
    label: "Utilisateurs de l'App",
    prefix: "+",
    suffix: ""
  },
];

export default function Stats() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <stat.icon className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary">
                 <AnimatedCounter 
                    targetValue={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                />
              </div>
              <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
