import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import About from '../About/About';
import Features from '../WhyChooseUs/WhyChooseUse';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#hero', active: true },
    { name: 'PRODUCTS', href: '#products' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919561678369git'; // Replace with actual WhatsApp number
    const message = 'Hi! I\'m interested in your premium bicycles and would like to know more.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark/98 backdrop-blur-md border-b border-gray-800/50 shadow-2xl shadow-primary/5' 
        : 'bg-dark/90 backdrop-blur-sm border-b border-gray-800/30'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer" onClick={() => handleNavClick('#hero')}>
            <div className="text-3xl lg:text-4xl font-black font-heading tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                A1 
              </span>
            </div>
            <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
              Premium Cycles
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative text-base font-semibold transition-all duration-300 group ${
                  item.active 
                    ? 'text-primary' 
                    : 'text-light hover:text-primary'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  item.active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* WhatsApp Button */}
            <button 
              onClick={handleWhatsAppClick}
              className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg shadow-green-500/25"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <MessageCircle size={16} />
                <span>WHATSAPP</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Contact Button */}
            {/* <button 
              onClick={() => handleNavClick('#contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-dark px-8 py-3 rounded-xl font-bold text-sm tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg shadow-primary/25"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 rounded-xl text-light hover:bg-gray-800/50 transition-all duration-200 border border-gray-700/50"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-2 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}></span>
              <span className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-800/50 bg-dark/98 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-200 ${
                    item.active 
                      ? 'text-primary bg-primary/10 border border-primary/20' 
                      : 'text-light hover:text-primary hover:bg-gray-800/50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 space-y-3">
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:scale-105 transform transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Chat</span>
                </button>
                
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-gradient-to-r from-primary to-accent text-dark px-6 py-4 rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;