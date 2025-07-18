import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/eb06dd98-b5c7-481d-97fc-4c8a962e32b9.png" alt="The Legends Construction" className="h-16 w-auto" />
              <div>
                <div className="font-bold text-lg">The Legends</div>
                <div className="text-sm text-muted">Construction</div>
              </div>
            </Link>
            <p className="text-muted mb-4">
              Midrand's trusted construction experts providing professional rubble removal, 
              furniture moving, and comprehensive construction services.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Get Quote', path: '/quote' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-muted">
              <li>Rubble Removal</li>
              <li>Furniture Moving</li>
              <li>Truck Hire</li>
              <li>Paving & Tiling</li>
              <li>Painting Services</li>
              <li>Irrigation & Lawn</li>
              <li>Tree Cutting</li>
              <li>Site Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:0712714649" className="text-muted hover:text-primary transition-colors">
                    071 271 4649
                  </a>
                  <p className="text-sm text-muted">Call or WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:thelegendsconstruction@gmail.com" 
                    className="text-muted hover:text-primary transition-colors break-all"
                  >
                    thelegendsconstruction@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted">Midrand, Johannesburg</p>
                  <p className="text-sm text-muted">Serving Greater Johannesburg</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted">Mon - Sat: 8am - 5pm</p>
                  <p className="text-sm text-muted">Emergency calls accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted text-sm">
              © {currentYear} The Legends Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;