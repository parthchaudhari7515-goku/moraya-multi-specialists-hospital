import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Departments from '../components/Departments';
import EmergencyServices from '../components/EmergencyServices';
import SpecialistCare from '../components/SpecialistCare';
import Doctors from '../components/Doctors';
import Rooms from '../components/Rooms';
import Staff from '../components/Staff';
import Contact from '../components/Contact';
import QRPreview from '../components/QRPreview';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Departments />
      <EmergencyServices />
      <SpecialistCare />
      <Doctors />
      <Rooms />
      <Staff />
      <Contact />
      <QRPreview />
    </div>
  );
};

export default LandingPage;