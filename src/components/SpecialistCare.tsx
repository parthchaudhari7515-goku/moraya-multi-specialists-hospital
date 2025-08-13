import React from 'react';
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Bone, 
  Eye, 
  Baby 
} from 'lucide-react';

const SpecialistCare = () => {
  const specialties = [
    {
      name: 'General Medicine',
      icon: Stethoscope,
      description: 'Comprehensive primary healthcare and internal medicine',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Cardiology',
      icon: Heart,
      description: 'Heart and cardiovascular system specialist care',
      color: 'bg-red-100 text-red-600'
    },
    {
      name: 'Orthopedics',
      icon: Bone,
      description: 'Bone, joint, and musculoskeletal treatment',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Neurology',
      icon: Brain,
      description: 'Nervous system and neurological disorders',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Ophthalmology',
      icon: Eye,
      description: 'Eye care and vision treatment services',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      name: 'Pediatrics',
      icon: Baby,
      description: 'Specialized healthcare for children and infants',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialist Care
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert specialists across multiple departments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${specialty.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {specialty.name}
                </h3>
                <p className="text-gray-600 text-center">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialistCare;