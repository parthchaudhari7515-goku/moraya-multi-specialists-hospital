import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

const Contact = () => {
  const handleMapClick = () => {
    const address = encodeURIComponent('Bus stand opp. Devlaxmi complex, Station Road, Shindkheda');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments, emergencies, or any healthcare inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Bus stand opp. Devlaxmi complex, Station Road, Shindkheda.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Numbers</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">+91 9104670916</p>
                    <p className="text-gray-600">+91 9104360916</p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Numbers</h3>
                  <div className="space-y-1">
                    <a href="tel:+919104670916" className="text-gray-600 hover:text-green-600">
                      +91 9104670916
                    </a><br></br>
                    <a href="tel:+919104360916" className="text-gray-600 hover:text-green-600">
                      +91 9104360916
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">morayahospital@2025gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Instagram className="h-6 w-6 text-pink-600" />
                </div>
                {/* <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
                  <p className="text-gray-600">@moraya_hospital_</p>
                </div> */}
                <a
                  href="https://www.instagram.com/moraya_hospital_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-100 p-2 rounded"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
                    <p className="text-gray-600">@moraya_hospital_</p>
                  </div>
                </a>

              </div>
            </div>

            <div className="bg-red-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Emergency Services</h3>
                  <p className="text-red-100">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us on Map</h3>
              <p className="text-gray-600 mb-6">
                Click below to open our location in Google Maps for directions
              </p>
              <button
                onClick={handleMapClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <img
                src="/hospital-view.png"
                alt="Hospital Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto" />
                  <p className="text-sm font-semibold text-gray-900 mt-2">Morya Multi-Speciality  Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;