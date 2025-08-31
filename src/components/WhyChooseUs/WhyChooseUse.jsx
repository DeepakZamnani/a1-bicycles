import React from 'react';
import { Zap, Shield, Truck, Star } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "PERFORMANCE", 
      desc: "High-end components for maximum efficiency" 
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "DURABILITY", 
      desc: "Built to withstand any terrain and weather" 
    },
    { 
      icon: <Truck className="w-8 h-8" />, 
      title: "FREE DELIVERY", 
      desc: "Complimentary delivery across India" 
    },
    { 
      icon: <Star className="w-8 h-8" />, 
      title: "WARRANTY", 
      desc: "Comprehensive 5-year warranty coverage" 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-secondary font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-6xl font-black mb-6 text-light">
            WHY CHOOSE <span className="text-primary">A1CYCLES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just selling bikes - we're delivering experiences that transform your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-secondary/50 rounded-2xl hover:bg-secondary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border border-gray-800 hover:border-primary/50"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-light">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;