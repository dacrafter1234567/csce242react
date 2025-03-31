import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/CharactersContent.css";  // ✅ Make sure your styles are correct
import ArconiaLogo from "../assets/ArconiaLogo.jpg";
import discordlogo from "../assets/discordlogo.png";
import HeliaMayr from "../assets/HeliaMayr.jpg";
import KaravelleDevantine from "../assets/KaravelleDevantine.jpg";
import Slate from "../assets/Slate.png";
import CodyDeAiros from "../assets/CodyDe'Airos.jpg";
import AdonisDestrey from "../assets/AdonisDestrey.jpg";
import OrionSteele from "../assets/OrionSteele.png";
import FelixAtol from "../assets/FelixAtol.png";
import JosephUru from "../assets/JosephUru.png";
import EiselVoross from "../assets/EiselVoross.jpg";
import CharactersSlideshow from "./CharactersSlideshow";

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

const ItemsContent = () => {
  return (
    <div class="pageportal">
        <table>
            <tr><th>Characters Archive</th></tr>
            <tr>
                <td>
                <section id="galleryslideshow">
                    <CharactersSlideshow />
                </section>
                    
                    <div class="column example">
                        <section class="character">
                            <div class="charcol">
                                <img src={HeliaMayr} />
                                <h4>Name: Helia Mayr</h4>
                                <p>Class Composition: Fighter 11 (Rune Knight), Monk 4 (Four Elements), Paladin 3 (Heroism), Warlock 2 (Hexblade)</p>
                                <p>47 y/o Reborn Fire Genasi</p>
                                <p>Affinity: Phoenix</p>
                            </div>
                            <div class="largecol">
                                <section class="charimg">
                                    <img src={HeliaMayr} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Helia Mayr</h4>
                                    <p>Class Composition: Fighter 11 (Rune Knight), Monk 4 (Four Elements), Paladin 3 (Heroism), Warlock 2 (Hexblade)</p>
                                    <p>47 y/o Reborn Fire Genasi</p>
                                    <p>Affinity: Phoenix</p>
                                </section>
                            </div>
                        </section>
                        <section class="character">
                            <div class="charcol">
                                <img src={Slate} />
                                <h4>Name: Slate "Red" Circan Finnley</h4>
                                <p>Class Composition: Artificer 16 (Forge Adept)</p>
                                <p>28 (263) y/o Reborn</p>
                                <p>Affinity: Metal</p>
                            </div>
                            <div class="largecol">
                                <section class="itemimg leftimg">
                                    <img src={Slate} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Slate "Red" Circan Finnley</h4>
                                    <p>Class Composition: Artificer 16 (Forge Adept)</p>
                                    <p>28 (263) y/o Reborn</p>
                                    <p>Affinity: Metal</p>
                                </section>
                            </div>
                        </section>
                        <section class="character">
                            <div class="charcol">
                                <img src={KaravelleDevantine} />
                                <h4>Name: Karavelle Devantine</h4>
                                <p>Class Composition: Rogue 12 (Inquisitive), Barbarian 5 (Zealot), Fighter 3 (Champion)</p>
                                <p>358 y/o Reborn Avariel Elf</p>
                                <p>Affinity: Destruction</p>
                            </div>
                            <div class="largecol">
                                <section class="itemimg leftimg">
                                    <img src={KaravelleDevantine} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Karavelle Devantine</h4>
                                    <p>Class Composition: Rogue 12 (Inquisitive), Barbarian 5 (Zealot), Fighter 3 (Champion)</p>
                                    <p>358 y/o Reborn Avariel Elf</p>
                                    <p>Affinity: Destruction</p>
                                </section>
                            </div>
                        </section>
                        <section class="character">
                            <div class="charcol">
                                <img src={AdonisDestrey} />
                                <h4>Name: Adonis Destrey</h4>
                                <p>Class Composition: Paladin 20 (Redemption), Cleric 10 (Blood-Reworked)</p>
                                <p>1064 y/o Kalashtar</p>
                                <p>Affinity: Blood</p>
                            </div>
                            <div class="largecol">
                                <section class="itemimg leftimg">
                                    <img src={AdonisDestrey} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Adonis Destrey</h4>
                                    <p>Class Composition: Paladin 20 (Redemption), Cleric 10 (Blood-Reworked)</p>
                                    <p>1064 y/o Kalashtar</p>
                                    <p>Affinity: Blood</p>
                                </section>
                            </div>
                        </section>
                        <section class="character">
                            <div class="charcol">
                                <img src={CodyDeAiros} />
                                <h4>Name: Cody De'Airos</h4>
                                <p>Class Composition: Warlock 15 (Raven Queen)</p>
                                <p>48 y/o Beasthide Shifter</p>
                                <p>Affinity: Sound</p>
                            </div>
                            <div class="largecol">
                                <section class="itemimg leftimg">
                                    <img src={CodyDeAiros} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Cody De'Airos</h4>
                                    <p>Class Composition: Warlock 15 (Raven Queen)</p>
                                    <p>48 y/o Beasthide Shifter</p>
                                    <p>Affinity: Sound</p>
                                </section>
                            </div>
                        </section>
                        <section class="character">
                            <div class="charcol">
                                <img src={OrionSteele} />
                                <h4>Name: Orion Steele</h4>
                                <p>Class Composition: Figher 20 (Battle Master)</p>
                                <p>35 y/o Human</p>
                                <p>Affinity: Earth</p>
                            </div>
                            <div class="largecol">
                                <section class="itemimg leftimg">
                                    <img src={OrionSteele} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Orion Steele</h4>
                                    <p>Class Composition: Figher 20 (Battle Master)</p>
                                    <p>35 y/o Human</p>
                                    <p>Affinity: Earth</p>
                                </section>
                            </div>
                        </section>
                        <section class="character">
                            <div class="charcol">
                                <img src={FelixAtol} />
                                <h4>Name: Felix Atol</h4>
                                <p>Class Composition: Wizard 20 (Dunamancy)</p>
                                <p>47 y/o Kalashtar</p>
                                <p>Affinity: Gravity</p>
                            </div>
                            <div class="largecol">
                                <section class="itemimg leftimg">
                                    <img src={FelixAtol} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Felix Atol</h4>
                                    <p>Class Composition: Wizard 20 (Dunamancy)</p>
                                    <p>47 y/o Kalashtar</p>
                                    <p>Affinity: Gravity</p>
                                </section>
                            </div>
                        </section>
                        <section class="character">
                            <div class="charcol">
                                <img src={JosephUru} />
                                <h4>Name: Joseph Uru</h4>
                                <p>Class Composition: Wizard 20 (Conjuration)</p>
                                <p>26 y/o Human</p>
                                <p>Affinity: Creation</p>
                            </div>
                            <div class="largecol">
                                <section class="itemimg leftimg">
                                    <img src={JosephUru} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Joseph Uru</h4>
                                    <p>Class Composition: Wizard 20 (Conjuration)</p>
                                    <p>26 y/o Human</p>
                                    <p>Affinity: Creation</p>
                                </section>
                            </div>
                        </section>
                        <section class="character">
                            <div class="charcol">
                                <img src={EiselVoross} />
                                <h4>Name: Eisel Voross</h4>
                                <p>Class Composition: Fighter 20 (Rune Knight)</p>
                                <p>36 y/o Ice Genasi</p>
                                <p>Affinity: Ice</p>
                            </div>
                            <div class="largecol">
                                <section class="itemimg leftimg">
                                    <img src={EiselVoross} />
                                </section>
                                <section class="chardesc">
                                    <h4>Name: Eisel Voross</h4>
                                    <p>Class Composition: Fighter 20 (Rune Knight)</p>
                                    <p>36 y/o Ice Genasi</p>
                                    <p>Affinity: Ice</p>
                                </section>
                            </div>
                        </section>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  );
};

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
          <ItemsContent />
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
