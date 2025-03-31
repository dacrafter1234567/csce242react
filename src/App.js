import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Items from './pages/Items';
import Locations from './pages/Locations';
import Characters from './pages/Characters';
import Affinities from './pages/Affinities';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="items" element={<Items />} />
          <Route path="locations" element={<Locations />} />
          <Route path="characters" element={<Characters />} />
          <Route path="affinities" element={<Affinities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
