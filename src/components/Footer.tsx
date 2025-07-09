import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-display font-bold text-gradient-gold mb-4">
              Luxe 2 Paris
            </h3>
            <p className="text-luxury-white/80 mb-6 max-w-md">
              Maison de mode parisienne dédiée à l'excellence et au raffinement. 
              Nous créons des pièces intemporelles qui célèbrent l'art de vivre à la française.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-luxury-white hover:text-accent hover:bg-luxury-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-luxury-white hover:text-accent hover:bg-luxury-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-luxury-white hover:text-accent hover:bg-luxury-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Collections</a></li>
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Femme</a></li>
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Homme</a></li>
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Nouveautés</a></li>
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Soldes</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Contact</a></li>
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Guide des tailles</a></li>
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Livraison</a></li>
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">Retours</a></li>
              <li><a href="#" className="text-luxury-white/80 hover:text-accent transition-smooth">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-luxury-white/20 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-display font-semibold mb-2">
                Restez informé de nos nouveautés
              </h4>
              <p className="text-luxury-white/80">
                Recevez en exclusivité nos dernières collections et offres privilégiées.
              </p>
            </div>
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Votre adresse email"
                className="bg-luxury-white/10 border-luxury-white/30 text-luxury-white placeholder:text-luxury-white/60"
              />
              <Button variant="luxury">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-luxury-white/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-luxury-white/80">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              <span>123 Rue de Rivoli, 75001 Paris, France</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              <span>+33 1 42 97 48 16</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              <span>contact@luxe2paris.fr</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-luxury-white/20 mt-8 pt-8 text-center text-sm text-luxury-white/60">
          <p>&copy; 2024 Luxe 2 Paris. Tous droits réservés. | Conditions générales | Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;