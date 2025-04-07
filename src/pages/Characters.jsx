import React from 'react';
import Header from '../components/Header';
import CharactersPage from '../components/CharactersPage';
import Footer from '../components/Footer';
import './css/Locations.css';
import '../global.css';

const HomePage = () => {
  return (
    <div id="content">
      <CharactersPage />
    </div>
  );
};

export default HomePage;