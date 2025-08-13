import React from 'react';
import { GraduationCap, Award, Clock } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Rajesh Sharma',
      specialty: 'General Medicine',
      // experience: '15+ years',
      qualification: 'MBBS, MD',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Priya Patel',
      specialty: 'Cardiology',
      // experience: '12+ years',
      qualification: 'MBBS, DM Cardiology',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Amit Kumar',
      specialty: 'Orthopedics',
      // experience: '18+ years',
      qualification: 'MBBS, MS Orthopedics',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Sunita Verma',
      specialty: 'Pediatrics',
      // experience: '10+ years',
      qualification: 'MBBS, MD Pediatrics',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Vikram Singh',
      specialty: 'Neurology',
      // experience: '14+ years',
      qualification: 'MBBS, DM Neurology',
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Kavita Joshi',
      specialty: 'Ophthalmology',
      // experience: '11+ years',
      qualification: 'MBBS, MS Ophthalmology',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Doctor's – Our Medical Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced team of medical professionals dedicated to your health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {doctor.specialty}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <span className="text-sm">{doctor.qualification}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{doctor.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;