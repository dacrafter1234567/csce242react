import React from 'react';
import Header from '../components/Header';
import AffinitiesContent from '../components/AffinitiesContent';
import Footer from '../components/Footer';
import './css/Items.css';
import '../global.css';

const HomePage = () => {
  return (
    <div id="content">
      <AffinitiesContent />
    </div>
  );
};

export default HomePage;