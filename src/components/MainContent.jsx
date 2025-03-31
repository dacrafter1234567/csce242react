import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/MainContent.css";
import ArconiaLogo from "../assets/ArconiaLogo.jpg";
import ItemsIcon from "../assets/ItemsIcon.png";
import GalleryIcon from "../assets/GalleryIcon.jpg";
import CharacterIcon from "../assets/CharacterIcon.png";
import AffinityIcon from "../assets/AffinityIcon.jpg";
import discordlogo from "../assets/discordlogo.png";

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

const ResourcefulLinks = () => (
  <div className="resources">
    <table>
      <thead>
        <tr>
          <th>Resourceful Links</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="column example">
              <section className="portal">
                <iframe src="https://inkarnate.com/login" title="Inkarnate"></iframe>
                <p>Inkarnate [Map Making]</p>
              </section>
              <section className="portal">
                <iframe src="https://www.aidedd.org/dnd-filters/feats.php" title="Aidedd"></iframe>
                <p>Aidedd [Feats]</p>
              </section>
              <section className="portal">
                <iframe src="https://rolladvantage.com/tokenstamp/" title="Token Stamp"></iframe>
                <p>Token Stamp 2 [Map Icon Maker]</p>
              </section>
              <section className="portal">
                <iframe src="https://online.anyflip.com/dkneq/yerq/mobile/index.html#p=4" title="Anyflip"></iframe>
                <p>Anyflip [5e Player's Handbook]</p>
              </section>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const DiscordSection = () => (
  <section className="bottomdiscord">
    <table>
      <thead>
        <tr>
          <th>Arconia Discord</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="#"><img src={discordlogo} alt="Discord" /></a>
            <p>Join the World of Arconia's Discord! It has the developers of the setting, early access to new content, announcements/updates, and more!</p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);

const StaffSection = () => (
  <section className="bottomstaff">
    <table>
      <thead>
        <tr>
          <th>Staff</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h4>Creators</h4>
            <p className="user">Collin / Dacrafter1</p>
            <h4>Admins</h4>
            <p className="user">Collin / Dacrafter1</p>
            <h4>Mapmakers</h4>
            <p className="user">Collin / Dacrafter1</p>
            <h4>Editors</h4>
            <p className="user">Collin / Dacrafter1</p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="undernavtext">
        <Link to="/">
          <img src={ArconiaLogo} className="logoimg" alt="Arconia Logo" />
        </Link>
        <h2>Welcome to the World of Arconia Wiki!</h2>
        <p>
          This wiki is an extensive archive that documents information about the world. 
          We make efforts to make this wiki as resourceful and informative as possible.
        </p>
        <p><b>
          The World of Arconia is a fantasy world inspired by Critical Role's Exandria.
          Its diverse world is split into eight different continents, each containing their own distinct cultures, kingdoms, and history.
          From characters to curses, artifacts to affinities, this wiki will cover everything there is to know about Arconia as it's developed.
        </b></p>
      </div>

      <div className="flex-container">
        <div className="bigleft">
          <NavigationPortal />
          <ResourcefulLinks />
        </div>

        <div className="smallright">
          <div className="flex-container">
            <div className="pageportal">
              <DiscordSection />
              <StaffSection />
            </div>
          </div>
        </div>
      </div>

      <div className="bottommobilestuff">
        <div className="flex-container">
          <div className="column example">
            <DiscordSection />
            <StaffSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
