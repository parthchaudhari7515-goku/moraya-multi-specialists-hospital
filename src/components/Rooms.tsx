import React from 'react';
import { Bed, Wifi, Tv, Coffee, Shield, Heart, Microscope, Radiation } from 'lucide-react';

const Rooms = () => {
  // const rooms = [
  //   {
  //     name: 'ICU Room',
  //     description: 'Advanced intensive care with 24/7 monitoring',
  //     // image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     image: '/1.jpg',
  //     features: ['24/7 Monitoring', 'Advanced Equipment', 'Specialized Staff'],
  //     icon: Heart
  //   },
  //   {
  //     name: 'Special Room A',
  //     description: 'Premium private rooms with enhanced amenities',
  //     // image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     image: '/4.jpg',
      
  //     features: ['Private Bathroom', 'AC', 'TV', 'WiFi'],
  //     icon: Bed
  //   },
  //   {
  //     name: 'ECG Room',
  //     description: 'Specialized cardiac monitoring and testing facility',
  //     // image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     image: '/3.jpg',
  //     features: ['ECG Equipment', 'Cardiac Monitoring', 'Expert Technicians'],
  //     icon: Heart
  //   },
  //   {
  //     name: 'Special Room B',
  //     description: 'Comfortable private accommodation with modern facilities',
  //     // image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     image: '/6.jpg',
  //     features: ['Private Space', 'Modern Amenities', 'Comfortable Bedding'],
  //     icon: Bed
  //   },
  //   {
  //     name: 'General Ward',
  //     description: 'Well-maintained general admission ward',
  //     // image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     image: '/7.jpg',
  //     features: ['Clean Environment', 'Nursing Care', 'Basic Amenities'],
  //     icon: Bed
  //   },
  //   {
  //     name: 'Reception Area',
  //     description: 'Welcoming reception and waiting area',
  //     // image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     image: '/2.jpg',
  //     features: ['Information Desk', 'Comfortable Seating', 'Registration'],
  //     icon: Shield
  //   },
  //   {
  //     name: 'Medical',
  //     description: 'Welcoming reception and waiting area',
  //     // image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     image: '/8.jpg',
  //     features: ['Information Desk', 'Comfortable Seating', 'Registration'],
  //     icon: Shield
  //   },
  // ];
  const rooms = [
  {
    name: 'ECG Room',
    description: 'Specialized cardiac monitoring and testing facility',
    image: '/ecg-room.jpg',
    features: ['ECG Equipment', 'Cardiac Monitoring', 'Expert Technicians'],
    icon: Heart
  },
  {
    name: 'General Ward',
    description: 'Well-maintained general admission ward',
    image: '/general-ward.jpg',
    features: ['Clean Environment', 'Nursing Care', 'Basic Amenities'],
    icon: Bed
  },
  {
    name: 'ICU Room',
    description: 'Advanced intensive care with 24/7 monitoring',
    image: '/icu-room.jpg',
    features: ['24/7 Monitoring', 'Advanced Equipment', 'Specialized Staff'],
    icon: Heart
  },
  {
    name: 'Medical',
    description: 'General-purpose medical services and facilities',
    image: '/medical.jpeg',
    features: ['Examination Equipment', 'Pharmaceutical Access', 'Basic Treatment'],
    icon: Shield
  },
  {
    name: 'Reception Area',
    description: 'Welcoming reception and waiting area',
    image: '/reception-area.jpg',
    features: ['Information Desk', 'Comfortable Seating', 'Registration'],
    icon: Shield
  },
  {
    name: 'Special Room A',
    description: 'Premium private rooms with enhanced amenities',
    image: '/special-room-a.jpg',
    features: ['Private Bathroom', 'AC', 'TV', 'WiFi'],
    icon: Bed
  },
  {
    name: 'Special Room B',
    description: 'Comfortable private accommodation with modern facilities',
    image: '/special-room-b.jpg',
    features: ['Private Space', 'Modern Amenities', 'Comfortable Bedding'],
    icon: Bed
  },
    {
      name: 'Pathology',
      description: 'Comprehensive diagnostic laboratory services with accurate and timely test results.',
      image: '/pathology.jpg',
      features: ['Blood Tests', 'Urine & Stool Analysis', 'Biopsy & Histopathology'],
      icon: Microscope
    },
    {
      name: 'X-ray',
      description: 'Advanced digital radiography for clear and precise imaging results.',
      image: '/x-ray.jpg',
      features: ['Digital X-ray Imaging', 'Low Radiation Exposure', 'Fast Report Delivery'],
      icon: Radiation
    }
];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Facilities & Rooms
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, comfortable facilities designed for optimal patient care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => {
            const IconComponent = room.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {room.description}
                  </p>
                  <div className="space-y-2">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;