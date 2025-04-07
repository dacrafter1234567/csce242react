import React from 'react';
import Header from '../components/Header';
import ItemsPage from '../components/ItemsPage';
import Footer from '../components/Footer';
import './css/Items.css';
import '../global.css';

const HomePage = () => {
  return (
    <div id="content">
      <ItemsPage />
    </div>
  );
};

export default HomePage;