import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Features from './components/WhyChooseUs/WhyChooseUse';
import About from './components/About/About';
import Products from './components/Products/Products';
import Newsletter from './components/Newsletter/Newsletter';
import Contact from './components/Contact/Contact'
// Import other components as we build them
// import BlogSection from './components/BlogSection';

function App() {
  return (
    <div className="App bg-dark min-h-screen text-light">
      {/* Header - Fixed Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="mt-0"> {/* Adjust mt-0 to mt-16 or mt-20 if header is fixed */}
        {/* Hero Section - "RIDING IS OUR PASSION" */}
        <Hero />
        
        {/* Features Section - Why Choose MORIDE */}
        <Features />
        
        {/* About/Quality Section - "WE MAKE THE BEST BIKES..." */}
        <About />
        
        {/* Product Showcase/Features */}
        <Products />
        <Contact/>
        {/* Newsletter Section */}
        {/* <Newsletter /> */}
        
        {/* Blog/Articles Section - Can be added later */}
        {/* <BlogSection /> */}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;