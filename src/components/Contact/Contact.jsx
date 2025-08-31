import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, ChevronRight, Users, Award, Wrench } from 'lucide-react';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = formData.name && formData.message 
      ? `Hi! I'm ${formData.name}. ${formData.message}` 
      : 'Hi! I\'m interested in your bicycles and would like to know more.';
    
    const phoneNumber = '919561678369'; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "CALL US",
      details: ["+91 95616 78369", "+91 95616 78369"],
      subtitle: "Available 9 AM - 8 PM"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "VISIT STORE",
      details: ["123 Bike Street, Cycling Hub", "Pune, Maharashtra 400001"],
      subtitle: "Premium Showroom"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "STORE HOURS",
      details: ["Monday - Saturday: 9 AM - 8 PM", "Sunday: 10 AM - 6 PM"],
      subtitle: "Extended Weekend Hours"
    }
  ];

  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "EXPERT CONSULTATION",
      description: "Get personalized bike recommendations from our cycling experts"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "PROFESSIONAL SERVICE",
      description: "Complete maintenance and repair services for all bike types"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "WARRANTY SUPPORT",
      description: "Comprehensive warranty coverage and after-sales support"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="font-heading text-6xl lg:text-7xl font-black text-light">
            <span className="block">GET IN</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TOUCH
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your cycling journey? Connect with our team for expert advice,
            product demonstrations, and personalized recommendations.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:border-primary/50">
                <div className="text-primary mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-light mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-accent">
                  {info.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* WhatsApp Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-light">
                    WHATSAPP CHAT
                  </h3>
                  <p className="text-accent">Instant Response Guaranteed</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Get immediate assistance from our cycling experts. Share your requirements
                and we'll help you find the perfect bike for your needs.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your cycling needs, preferred bike type, or any questions..."
                />
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-3" size={20} />
                CHAT ON WHATSAPP
                <ChevronRight className="ml-2" />
              </button>

              <p className="text-sm text-gray-400 text-center">
                * By clicking above, you'll be redirected to WhatsApp
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-light mb-4">
                WHY CHOOSE <span className="text-primary">US?</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Experience premium cycling with our comprehensive services and expert guidance.
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-light mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-light">
            READY TO START YOUR <span className="text-primary">CYCLING JOURNEY?</span>
          </h3>
          <button
            onClick={handleWhatsAppClick}
            className="group bg-gradient-to-r from-primary to-accent text-dark px-12 py-4 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto"
          >
            <MessageCircle className="mr-3" size={20} />
            START CHATTING NOW
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;