import React from 'react';
import Header from '../components/Header';
import LocationsContent from '../components/LocationsContent';
import Footer from '../components/Footer';
import './css/Locations.css';
import '../global.css';

const HomePage = () => {
  return (
    <div id="content">
      <LocationsContent />
    </div>
  );
};

export default HomePage;