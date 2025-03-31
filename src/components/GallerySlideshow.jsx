import React, { useState, useEffect } from "react";
import AzureVail from "../assets/AzureVail.jpg"; // Import image
import BalastoneQuarry from "../assets/BalastoneQuarry.jpg"; // Import image
import Frostvale from "../assets/Frostvale.png"; // Import image
import GravitasStronghold from "../assets/GravitasStronghold.png"; // Import image
import "./css/LocationsContent.css";

const images = [
  AzureVail,
  BalastoneQuarry,
  Frostvale,
  GravitasStronghold,
];

const GallerySlideshow = () => {
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

export default GallerySlideshow;
