import React from 'react';
import Header from '../components/Header';
import AffinitiesPage from '../components/AffinitiesPage';
import Footer from '../components/Footer';
import './css/Items.css';
import '../global.css';

const HomePage = () => {
  return (
    <div id="content">
      <AffinitiesPage />
    </div>
  );
};

export default HomePage;