import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/Items.css";  // ✅ Make sure your styles are correct
import ArconiaLogo from "../assets/ArconiaLogo.jpg";
import BaelzirsFury from "../assets/BaelzirsFury.jpg";
import BootsoftheSteadfastChampion from "../assets/BootsoftheSteadfastChampion.jpg";
import GauntletsofWrath from "../assets/GauntletsofWrath.jpg";
import discordlogo from "../assets/discordlogo.png";

const ItemsContent = () => {
  return (
    <div className="pageportal">
      <table>
        <tr><th>Items Archive</th></tr>
        <tr>
          <td>
            <div className="pageportalitems">

              {/* 🛡️ Gauntlets of Wrath */}
              <div className="itembar">
                <div className="itemcol">
                <img src={GauntletsofWrath} alt="Gauntlets of Wrath" />
                  <h4>The Gauntlets of Wrath</h4>
                  <h5>Armor (Gauntlets), Very Rare (Requires Attunement by a Destruction user)</h5>
                  <p><b>Worldeater's Tithe:</b> As a bonus action, you smash the gauntlets together, gaining the benefits of the Enlarge spell for one minute or until you choose to end it. You can use this property once per short rest.
                  <br/><br/><b>Slayer's Ferocity:</b> While wearing these gauntlets, your unarmed attacks and attacks made with melee weapons deal an additional 4d6 necrotic damage.</p>
                </div>

                <div class="largecol">
                  <div class="flex-container">
                    <section class="itemimg leftimg">
                      <img src={GauntletsofWrath} alt="Gauntlets of Wrath" />
                    </section>
                    <section class="itemdesc">
                        <h4>The Gauntlets of Wrath</h4>
                        <h5>Armor (Gauntlets), Very Rare (Requires Attunement by a Destruction user)</h5>
                        <p><b>Worldeater's Tithe:</b> As a bonus action, you smash the gauntlets together, gaining the benefits of the Enlarge spell for one minute or until you choose to end it. You can use this property once per short rest.
                        <br/><br/><b>Slayer's Ferocity:</b> While wearing these gauntlets, your unarmed attacks and attacks made with melee weapons deal an additional 4d6 necrotic damage.</p>
                    </section>
                  </div>
                </div>
              </div>

              {/* 🥾 Boots of the Steadfast Champion */}
              <div className="itembar">
                <div className="itemcol">
                <img src={BootsoftheSteadfastChampion} alt="Boots of the Steadfast Champion" />
                  <h4>Boots of the Steadfast Champion</h4>
                  <h5>Wondrous Item, Rare (Requires Attunement)</h5>
                  <p><b>Stable Footing:</b> You are immune to being grappled. Additionally, if you were to be moved in any way against your will, you move only half the distance.</p>
                </div>

                <div class="largecol">
                  <div class="flex-container">
                    <section class="itemimg leftimg">
                      <img src={BootsoftheSteadfastChampion} alt="Boots of the Steadfast Champion" />
                    </section>
                    <section class="itemdesc">
                        <h4>Boots of the Steadfast Champion</h4>
                        <h5>Wondrous Item, Rare (Requires Attunement)</h5>
                        <p><b>Stable Footing:</b> You are immune to being grappled. Additionally, if you were to be moved in any way against your will, you move only half the distance.</p>
                    </section>
                  </div>
                </div>
              </div>

              {/* ⚔️ Baelzir's Fury */}
              <div className="itembar">
                <div className="itemcol">
                  <img src={BaelzirsFury} alt="Baelzir's Fury" />
                  <h4>Baelzir's Fury</h4>
                  <h5>Weapon (Greatsword), Legendary (Requires Attunement)</h5>
                  <p>You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.
                  <br/><br/><b>Crushing Strikes:</b> Instead of the standard 2d6 for a greatsword, this weapon deals 2d12 instead. While raging, this increases to 3d12.</p>
                </div>

                <div class="largecol">
                  <div class="flex-container">
                    <section class="itemimg leftimg">
                      <img src={BaelzirsFury} alt="Baelzir's Fury" />
                    </section>
                    <section class="itemdesc">
                        <h4>Baelzir's Fury</h4>
                        <h5>Weapon (Greatsword), Legendary (Requires Attunement)</h5>
                        <p>You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.
                        <br/><br/><b>Crushing Strikes:</b> Instead of the standard 2d6 for a greatsword, this weapon deals 2d12 instead. While raging, this increases to 3d12. 
                        </p>
                    </section>
                  </div>
                </div>
              </div>

            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ItemsContent;
