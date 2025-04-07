import React from "react";
import { Link } from "react-router-dom"; // <-- Make sure this line is here
import ItemsIcon from "../assets/ItemsIcon.png";
import GalleryIcon from "../assets/GalleryIcon.jpg";
import CharacterIcon from "../assets/CharacterIcon.png";
import AffinityIcon from "../assets/AffinityIcon.jpg";

const NavigationPortal = () => (
    <div className="pageportal">
      <table>
        <thead>
          <tr>
            <th>Navigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="column example">
                <section className="portal">
                  {/* Using Link for navigation */}
                  <Link to="/items">
                    <img src={ItemsIcon} alt="Items" />
                  </Link>
                  <Link to="/items">
                    <p>Items</p>
                  </Link>
                </section>
                <section className="portal">
                <Link to="/locations">
                    <img src={GalleryIcon} alt="Locations" />
                  </Link>
                  <Link to="/locations">
                    <p>Locations</p>
                  </Link>
                </section>
                <section className="portal">
                <Link to="/characters">
                    <img src={CharacterIcon} alt="Characters" />
                  </Link>
                  <Link to="/characters">
                    <p>Characters</p>
                  </Link>
                </section>
                <section className="portal">
                <Link to="/affinities">
                    <img src={AffinityIcon} alt="Affinities" />
                  </Link>
                  <Link to="/affinities">
                    <p>Affinities</p>
                  </Link>
                </section>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  export default NavigationPortal;