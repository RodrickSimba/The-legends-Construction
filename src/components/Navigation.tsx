import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-background shadow-card sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:0712714649" className="flex items-center space-x-1 hover:text-primary-glow transition-colors">
                <Phone size={14} />
                <span>071 271 4649</span>
              </a>
              <a href="mailto:thelegendsconstruction@gmail.com" className="flex items-center space-x-1 hover:text-primary-glow transition-colors">
                <Mail size={14} />
                <span>thelegendsconstruction@gmail.com</span>
              </a>
            </div>
            <div className="hidden sm:block">
              <span>Mon-Sat: 8am-5pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/eb06dd98-b5c7-481d-97fc-4c8a962e32b9.png" alt="The Legends Construction" className="h-24 w-auto" />
            <div>
              <div className="font-bold text-lg text-foreground">The Legends</div>
              <div className="text-sm text-muted-foreground">Construction</div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="shadow-button">
              <Link to="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-fit shadow-button">
                <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;