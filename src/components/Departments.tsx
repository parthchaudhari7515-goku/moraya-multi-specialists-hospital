import React from 'react';
import { 
  Heart, 
  Bed, 
  Activity, 
  Users, 
  Building, 
  Pill, 
  Microscope 
} from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      name: 'ICU Room',
      icon: Heart,
      description: 'Intensive care unit with advanced life support systems',
      color: 'bg-red-100 text-red-600'
    },
    {
      name: 'Special Room (A)',
      icon: Bed,
      description: 'Premium private rooms with enhanced comfort and care',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'ECG Room',
      icon: Activity,
      description: 'Electrocardiogram testing and cardiac monitoring',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Special Room (B)',
      icon: Bed,
      description: 'Specialized care rooms with modern amenities',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'General Ward',
      icon: Users,
      description: 'Comfortable general admission and recovery ward',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      name: 'Reception',
      icon: Building,
      description: 'Patient registration and information center',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      name: 'Pharmacy Department',
      icon: Pill,
      description: 'Complete pharmaceutical services and medication dispensing',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      name: 'Laboratory Department',
      icon: Microscope,
      description: 'Advanced diagnostic testing and pathology services',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Departments
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical services across specialized departments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto ${dept.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {dept.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Departments;