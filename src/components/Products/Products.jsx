import React, { useState } from 'react';
import { ChevronRight, Star, Heart } from 'lucide-react';
import ElectricBike from '../assets/ElectricBike.jpg'
import CarbonBike from '../assets/Carbon.jpg'
import ModernBike from '../assets/ModernBike.jpg'
import MountainBike from '../assets/MTB.jpg'
const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "APEX CARBON PRO",
      category: "Road Bikes",
      price: "$3,299",
      originalPrice: "$3,599",
      image: CarbonBike,
      rating: 4.9,
      reviews: 124,
      features: [
        "Carbon Fiber Frame",
        "Electronic Shifting",
        "Aerodynamic Design",
        "Lightweight 6.8kg"
      ],
      badge: "BESTSELLER"
    },
    {
      id: 2,
      name: "THUNDER MTB ELITE",
      category: "Mountain Bikes",
      price: "$2,899",
      originalPrice: "$3,199",
      image: MountainBike,
      rating: 4.8,
      reviews: 89,
      features: [
        "Full Suspension",
        "29\" Wheels",
        "Hydraulic Disc Brakes",
        "21-Speed Drivetrain"
      ],
      badge: "NEW ARRIVAL"
    },
    {
      id: 3,
      name: "VOLT E-CRUISER",
      category: "Electric Bikes",
      price: "$1,899",
      originalPrice: "$2,299",
      image: ElectricBike,
      rating: 4.7,
      reviews: 156,
      features: [
        "50km Range",
        "Fast Charging",
        "LCD Display",
        "Pedal Assist"
      ],
      badge: "ECO FRIENDLY"
    },
    {
      id: 4,
      name: "URBAN SWIFT",
      category: "City Bikes",
      price: "$899",
      originalPrice: "$1,199",
      image: ModernBike,
      rating: 4.6,
      reviews: 203,
      features: [
        "Lightweight Aluminum",
        "Comfort Geometry",
        "Integrated Lights",
        "Anti-Theft System"
      ],
      badge: "POPULAR"
    }
  ];

  return (
    <section id="products" className="relative py-20 bg-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="font-heading text-6xl lg:text-7xl font-black text-light">
            <span className="block">PREMIUM</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              COLLECTION
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of world-class bicycles, engineered for performance
            and crafted for those who demand excellence in every ride.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-primary/50">
                
                {/* Product Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    product.badge === 'BESTSELLER' ? 'bg-gradient-to-r from-primary to-accent text-dark' :
                    product.badge === 'NEW ARRIVAL' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                    product.badge === 'ECO FRIENDLY' ? 'bg-gradient-to-r from-green-600 to-lime-500 text-white' :
                    'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-20 p-2 bg-dark/80 rounded-full text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
                  
                  {/* Quick View Overlay */}
                  <div className={`absolute inset-0 bg-dark/90 flex items-center justify-center transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <button className="bg-gradient-to-r from-primary to-accent text-dark px-6 py-3 rounded-lg font-bold flex items-center transform hover:scale-105 transition-transform">
                      Quick View
                      <ChevronRight className="ml-2" size={18} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-primary text-sm font-medium uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-bold text-light mt-1">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-2">
                    <button className="w-full border border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary hover:text-dark transition-all duration-300 flex items-center justify-center">
                      VIEW DETAILS
                      <ChevronRight className="ml-2" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-primary to-accent text-dark px-12 py-4 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto">
            VIEW ALL PRODUCTS
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;