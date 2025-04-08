import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/AffinitiesContent.css";
import axios from "axios";

const AffinitiesContent = () => {
  const [deities, setDeitiesArchive] = useState([]);
 

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://csce242server-bfhe.onrender.com/api/deities"
      );
      setDeitiesArchive(response.data);
    })();
  }, []);

  return (
    <div className="deity-list">
      {deities.map((deity, index) => {
        const image = require(`../assets/${deity.image}`);

        return (
        <div key={index} className="deitybar">
          <div className="column example">
            <section className="deityimg leftimg">
              <img 
                src={image} 
                alt={deity.name} 
              />
            </section>
            <section className="deitydesc">
              <h3>{deity.name}</h3>
              <p><strong>Elemental Affinity:</strong> {deity.elemental_affinity}</p>
              <p><strong>Description:</strong> {deity.description}</p>
              <p><strong>Gender:</strong> {deity.gender}</p>
              <p><strong>Side:</strong> {deity.side}</p>
              <p><strong>Alignment:</strong> {deity.alignment}</p>
              <p><strong>Personality:</strong> {deity.personality}</p>
              <p><strong>Devoted Guilds:</strong></p>
              <ul>
                {deity.devoted_guilds.map((guild, idx) => (
                  <li key={idx}>{guild}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default AffinitiesContent;
