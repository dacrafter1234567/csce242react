import React, { useState, useEffect } from "react";
import HeliaMayr from "../assets/HeliaMayr.jpg"; // Import image
import KaravelleDevantine from "../assets/KaravelleDevantine.jpg"; // Import image
import Slate from "../assets/Slate.png"; // Import image
import CodyDeAiros from "../assets/CodyDe'Airos.jpg"; // Import image
import AdonisDestrey from "../assets/AdonisDestrey.jpg"; // Import image
import "./css/CharactersContent.css";

const images = [
  HeliaMayr,
  KaravelleDevantine,
  Slate,
  CodyDeAiros,
  AdonisDestrey
];

const CharactersSlideshow = () => {
  const [current, setCurrent] = useState(0);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galleryslideshow">
      <button id="prev" className="arrowbutton" onClick={prevSlide}>
        &#10094;
      </button>

      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`slide ${index === current ? "" : "hidden"}`}
          alt={`Slide ${index + 1}`}
        />
      ))}

      <button id="next" className="arrowbutton" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default CharactersSlideshow;
