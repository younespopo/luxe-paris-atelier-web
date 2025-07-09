import { Truck, Shield, Sparkles, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Livraison Premium",
      description: "Livraison gratuite en 24h pour toute commande supérieure à 200€"
    },
    {
      icon: Shield,
      title: "Garantie Excellence",
      description: "Retour gratuit sous 30 jours et garantie qualité sur toutes nos pièces"
    },
    {
      icon: Sparkles,
      title: "Pièces Exclusives",
      description: "Collections limitées et créations uniques signées par nos designers"
    },
    {
      icon: Clock,
      title: "Service Client",
      description: "Conseils personnalisés 7j/7 par nos experts en mode et stylisme"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            L'Excellence à Votre Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expérience d'achat premium qui reflète nos valeurs d'excellence et de raffinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-luxury"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-gold group-hover:shadow-luxury transition-luxury">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;