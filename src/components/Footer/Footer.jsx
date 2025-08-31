import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Products', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const categories = [
    { name: 'Mountain Bikes', href: '#' },
    { name: 'Road Bikes', href: '#' },
    { name: 'E-Bikes', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Parts', href: '#' },
    { name: 'Maintenance', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-secondary border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl lg:text-3xl font-bold font-heading mb-4">
                <span className="text-primary">A1</span>
                <span className="text-light"> CYCLES</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Crafting premium cycles with passion and precision. Experience the perfect blend of performance, style, and innovation.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-primary" />
                <span className="text-sm">hello@a1cycles.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-sm">123 Cycle Street, Pune, Maharashtra 411001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-light font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-light font-semibold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm flex items-center group"
                  >
                    {category.name}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-light font-semibold text-lg mb-6">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-4">Subscribe for updates & exclusive offers</p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-dark border border-gray-700 rounded-lg px-4 py-2.5 text-light text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary hover:bg-primary/90 text-dark font-medium px-4 py-2.5 rounded-lg transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-dark`}
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 A1 Cycles. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;