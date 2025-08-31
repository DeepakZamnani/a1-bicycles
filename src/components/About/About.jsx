import React from 'react';

const About = () => {
  const highlights = [
    "Premium materials and cutting-edge technology",
    "Rigorous testing for extreme conditions", 
    "Sustainable manufacturing practices"
  ];

  return (
    <section className="py-20 bg-dark font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517654443271-12c6f5ba2f5b?w=600&h=400&fit=crop&crop=center"
              alt="Mountain biking adventure"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50"></div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-heading text-4xl lg:text-6xl font-black text-light">
              WE MAKE THE BEST <span className="text-primary">BIKES</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              At MORIDE, we don't just build bicycles – we craft experiences. Every frame is engineered 
              with precision, every component chosen for performance, and every design perfected for 
              the passionate rider.
            </p>
            
            <div className="space-y-4">
              {highlights.map((point, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-light">{point}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:scale-105 transform transition-all duration-300">
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;