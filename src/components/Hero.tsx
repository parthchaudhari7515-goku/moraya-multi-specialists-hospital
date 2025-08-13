import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Award, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hospital-view.png"
          alt="Moraya Multi Specialists Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Moraya Multi Specialists Hospital
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Trusted healthcare with 24/7 emergency services and expert medical care
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Award className="h-5 w-5 mr-2" />
            <span className="font-medium">Since 2025</span>
          </div>
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Award className="h-5 w-5 mr-2" />
            <span className="font-medium">Accredited Facility</span>
          </div>
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">24/7 Emergency</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Phone className="inline h-5 w-5 mr-2" />
            Contact Us
          </button>
          <Link
            to="/qr-code"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            QR Code
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;