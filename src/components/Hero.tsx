import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/rubble-removal-hero.jpg';

const Hero = () => {
  const features = [
    'Licensed & Insured',
    'Same Day Service',
    'Free Quotes',
    'Professional Team'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="The Legends Construction professional services" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              ⭐ Midrand's Trusted Construction Experts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              We Move
              <span className="text-primary"> Mountains</span>
              <br />
              So You Don't Have To
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional rubble removal, furniture moving, truck hire, and complete construction services. 
              Get your space cleared and transformed by Midrand's most reliable team.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-button text-lg px-8">
                <Link to="/quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="tel:0712714649">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Trusted by 500+ satisfied customers</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
                <span className="ml-2 text-sm font-medium text-foreground">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right side - Service highlights */}
          <div className="animate-slide-up">
            <div className="bg-card p-8 rounded-2xl shadow-elegant border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Core Services</h3>
              
              <div className="space-y-4">
                {[
                  { icon: '🚛', service: 'Rubble Removal', desc: 'Construction waste & debris clearance' },
                  { icon: '📦', service: 'Furniture Moving', desc: 'Residential & office relocations' },
                  { icon: '🚚', service: 'Truck Hire', desc: 'Bakkie & truck rental services' },
                  { icon: '🏗️', service: 'Construction', desc: 'Paving, painting & landscaping' }
                ].map((item) => (
                  <div key={item.service} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.service}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full mt-6" variant="outline">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;