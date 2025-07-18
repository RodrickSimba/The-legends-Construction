import { Truck, Package, Hammer, Paintbrush, Droplets, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Rubble Removal',
      description: 'Professional removal of construction debris, garden waste, and unwanted materials.',
      features: ['Same-day service', 'All waste types', 'Eco-friendly disposal'],
      popular: true
    },
    {
      icon: Package,
      title: 'Furniture Moving',
      description: 'Safe and reliable residential and office furniture moving services.',
      features: ['Careful handling', 'Packing materials', 'Insurance covered']
    },
    {
      icon: Truck,
      title: 'Truck Hire',
      description: 'Rent our well-maintained trucks and bakkies for your transportation needs.',
      features: ['Hourly/daily rates', 'Driver included', 'Various sizes available']
    },
    {
      icon: Hammer,
      title: 'Paving & Tiling',
      description: 'Professional paving, tiling, and concrete work for driveways and patios.',
      features: ['Quality materials', 'Expert installation', 'Warranty included']
    },
    {
      icon: Paintbrush,
      title: 'Painting Services',
      description: 'Interior and exterior painting for residential and commercial properties.',
      features: ['Premium paints', 'Clean finish', 'Color consultation']
    },
    {
      icon: Droplets,
      title: 'Irrigation & Lawn',
      description: 'Irrigation system installation and lawn planting for beautiful gardens.',
      features: ['Water-efficient', 'Custom design', 'Maintenance included']
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Construction Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From rubble removal to complete renovations, we handle every aspect of your construction needs 
            with professionalism and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border ${
                service.popular ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                  <Link to="/quote">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card p-8 rounded-2xl shadow-card border border-border text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">Additional Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm text-muted-foreground">
            <div>Tree Cutting & Removal</div>
            <div>Garden Clearance</div>
            <div>Demolition Work</div>
            <div>Concrete Breaking</div>
            <div>Site Preparation</div>
            <div>Pressure Washing</div>
            <div>Minor Repairs</div>
            <div>Emergency Cleanup</div>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Need something not listed? We provide comprehensive construction and maintenance services. 
            Contact us to discuss your specific requirements.
          </p>
          
          <Button asChild size="lg" className="shadow-button">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;