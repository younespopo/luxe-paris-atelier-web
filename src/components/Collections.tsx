import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import collectionFemme from "@/assets/collection-femme.jpg";
import collectionHomme from "@/assets/collection-homme.jpg";

const Collections = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Nos Collections
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explorez l'univers raffiné de nos créations, pensées pour sublimer votre style avec élégance et sophistication.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Collection Femme */}
        <div className="group cursor-pointer luxury-hover">
          <div className="relative overflow-hidden rounded-lg shadow-elegant">
            <img 
              src={collectionFemme} 
              alt="Collection Femme" 
              className="w-full h-96 object-cover group-hover:scale-110 transition-luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-luxury">
              <h3 className="text-2xl font-display font-bold text-luxury-white mb-2">
                Collection Femme
              </h3>
              <p className="text-luxury-white/90 mb-4">
                Élégance intemporelle et raffinement moderne
              </p>
              <Button variant="luxury" size="sm">
                Découvrir
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-display font-semibold mb-2">
              Collection Femme
            </h3>
            <p className="text-muted-foreground mb-4">
              Des créations qui célèbrent la féminité avec sophistication
            </p>
            <Button variant="luxury-outline">
              Explorer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Collection Homme */}
        <div className="group cursor-pointer luxury-hover">
          <div className="relative overflow-hidden rounded-lg shadow-elegant">
            <img 
              src={collectionHomme} 
              alt="Collection Homme" 
              className="w-full h-96 object-cover group-hover:scale-110 transition-luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-luxury">
              <h3 className="text-2xl font-display font-bold text-luxury-white mb-2">
                Collection Homme
              </h3>
              <p className="text-luxury-white/90 mb-4">
                Distinction et caractère pour l'homme moderne
              </p>
              <Button variant="luxury" size="sm">
                Découvrir
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-display font-semibold mb-2">
              Collection Homme
            </h3>
            <p className="text-muted-foreground mb-4">
              Savoir-faire artisanal et élégance masculine
            </p>
            <Button variant="luxury-outline">
              Explorer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;