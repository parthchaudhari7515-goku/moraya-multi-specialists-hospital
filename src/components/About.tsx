import React from 'react';
import { Shield, Heart, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Morya Multi-Speciality  Hospital
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A trusted, accredited healthcare facility offering 24/7 emergency and multi-specialty care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Accredited Care</h3>
            <p className="text-gray-600 text-center">
              Certified healthcare facility meeting the highest standards of medical excellence and patient safety.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">24/7 Emergency</h3>
            <p className="text-gray-600 text-center">
              Round-the-clock emergency services with rapid response team ready to handle critical situations.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Multi-Specialty</h3>
            <p className="text-gray-600 text-center">
              Comprehensive medical services across multiple specialties under one roof for complete care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;