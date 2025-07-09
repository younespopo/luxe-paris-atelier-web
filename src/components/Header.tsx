import { ShoppingBag, Search, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-gradient-gold">
              Luxe 2 Paris
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-foreground hover:text-accent transition-smooth font-medium">
              Femme
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-smooth font-medium">
              Homme
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-smooth font-medium">
              Nouveautés
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-smooth font-medium">
              Collections
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;