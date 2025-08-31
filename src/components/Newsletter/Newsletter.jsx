import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Handle newsletter signup logic here
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-dark via-secondary to-dark font-body">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl lg:text-5xl font-black mb-6 text-light">
          GET THE LATEST NEWS & <span className="text-primary">AMAZING OFFERS</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Be the first to know about new arrivals, exclusive deals, and cycling tips from our experts
        </p>
        
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="flex-1 px-6 py-4 rounded-lg bg-dark border border-gray-700 focus:border-primary focus:outline-none text-light placeholder-gray-500"
          />
          <button 
            onClick={handleSubmit}
            className="bg-gradient-to-r from-primary to-accent text-dark px-8 py-4 rounded-lg font-bold hover:scale-105 transform transition-all duration-300 whitespace-nowrap"
          >
            {isSubmitted ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
          </button>
        </div>
        
        {isSubmitted && (
          <p className="mt-4 text-accent font-semibold">
            Thanks for subscribing! Check your email for confirmation.
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;