import React from 'react';
import Header from '../components/Header';
import LocationsPage from '../components/LocationsPage';
import Footer from '../components/Footer';
import './css/Items.css';
import '../global.css';

const HomePage = () => {
  return (
    <div id="content">
      <LocationsPage />
    </div>
  );
};

export default HomePage;