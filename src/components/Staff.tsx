import React from 'react';
import { Users, UserCheck, Microscope, Pill } from 'lucide-react';

const Staff = () => {
  const staffCategories = [
    {
      title: 'Nursing Department',
      count: 4,
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      description: 'Experienced registered nurses providing compassionate patient care',
      members: [
        'Senior Nurse Coordinator',
        'ICU Specialist Nurse',
        'General Ward Nurse',
        'Emergency Care Nurse'
      ]
    },
    {
      title: 'Ward Boys',
      count: 4,
      icon: UserCheck,
      color: 'bg-green-100 text-green-600',
      description: 'Dedicated support staff ensuring patient comfort and facility maintenance',
      members: [
        'Senior Ward Assistant',
        'ICU Support Staff',
        'General Ward Assistant',
        'Emergency Support Staff'
      ]
    },
    {
      title: 'Laboratory Director',
      count: 1,
      icon: Microscope,
      color: 'bg-purple-100 text-purple-600',
      description: 'Expert laboratory management and diagnostic oversight',
      members: [
        'Chief Laboratory Director'
      ]
    },
    {
      title: 'Pathology Department',
      count: 1,
      icon: Microscope,
      color: 'bg-pink-100 text-pink-600',
      description: 'Specialized pathology services and diagnostic testing',
      members: [
        'Senior Pathologist'
      ]
    },
    {
      title: 'Pharmacy Manager',
      count: 1,
      icon: Pill,
      color: 'bg-orange-100 text-orange-600',
      description: 'Pharmaceutical services and medication management',
      members: [
        'Chief Pharmacy Manager'
      ]
    }
  ];

  return (
    <section id="staff" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Dedicated Staff
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional healthcare team committed to providing exceptional patient care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${category.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <div className="bg-gray-100 rounded-full px-3 py-1 inline-block mb-3">
                    <span className="text-sm font-semibold text-gray-700">
                      {category.count} {category.count === 1 ? 'Member' : 'Members'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {category.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Total Staff Members: 11
            </h3>
            <p className="text-gray-600 text-lg">
              Our experienced team works around the clock to ensure the highest quality of healthcare services for all our patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;