import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-luxury-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            L'Art de 
            <span className="text-gradient-gold block">l'Élégance</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre collection exclusive de mode haut de gamme, 
            où chaque pièce raconte une histoire d'excellence parisienne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" className="group">
              Découvrir la Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="luxury-outline" size="lg">
              Nos Nouveautés
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-luxury-white animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;