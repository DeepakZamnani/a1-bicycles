import React, { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "RIDING IS OUR PASSION",
      subtitle: "Experience the thrill of premium cycling with our cutting-edge bikes",
      image: "https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D",
      cta: "EXPLORE COLLECTION"
    },
    {
      title: "BUILT FOR ADVENTURE",
      subtitle: "Engineered for performance, designed for the ultimate ride",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJpY3ljbGV8ZW58MHx8MHx8fDA%3D",
      cta: "SHOP NOW"
    },
    {
      title: "ELECTRIC REVOLUTION",
      subtitle: "Join the future of cycling with our premium e-bike collection",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&h=800&fit=crop&crop=center",
      cta: "DISCOVER E-BIKES"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center font-body pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10"></div>
      
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/30"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h1 className="font-heading text-6xl lg:text-8xl font-black leading-none text-light">
              {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word === 'PASSION' || word === 'ADVENTURE' || word === 'REVOLUTION' ? (
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : word}
                </span>
              ))}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-lg leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-primary to-accent text-dark px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center">
                {heroSlides[currentSlide].cta}
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="border border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-dark transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2" size={20} />
                WATCH DEMO
              </button> */}
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="relative hidden lg:block">
            <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;