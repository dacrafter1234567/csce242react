import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/LocationsContent.css";  // ✅ Make sure your styles are correct
import AzureVail from "../assets/AzureVail.jpg";
import BalastoneQuarry from "../assets/BalastoneQuarry.jpg";
import Frostvale from "../assets/Frostvale.png";
import GravitasStronghold from "../assets/GravitasStronghold.png";
import PyhrraicMountains from "../assets/PyhrraicMountains.jpg";
import SandcutterPort from "../assets/SandcutterPort.png";
import SkywardCastle from "../assets/SkywardCastle.png";
import VerilSpires from "../assets/VerilSpires.png";
import GallerySlideshow from "./GallerySlideshow";

const LocationsContent = () => {
  return (
    <div class="pageportal">
      <table>
          <tr><th>Images Archive</th></tr>
          <tr>
              <td>
                  <section id="galleryslideshow">
                      <GallerySlideshow />
                  </section>
                  <div class="column example">
                      <section class="gallerypics">
                          <img src={AzureVail} />
                          <h4>The Azure Vail</h4>
                          <p>Located at the heart of the Cerulean Passage, The Azure Vail stands as both a defensive measure and border control of Ralkor's only strait connecting its inner sea to the Visauren Ocean. The Vail, stretching all the way from Tidehaven to Port Atlas, consists of hundreds of reinforced pillars with spans of magically raised tide walls conjured and maintained by the elders of Tidehaven. The pillars and tide walls span from the bottom of the ocean to more than 50 meters above sea level, creating a barrier deterring all submersibles, unwanted creatures of the sea, and enemy vessels from passing. Every five to ten miles across the span of the span of the Vail, and every one mile close to the coast, exists a fortress with a vast opening for vessel passage. These passages function as both a border check and bottleneck for seafaring travel, ensuring that incoming and outgoing trading flows smoothly with less risk of smuggling, while also constricting potential threats.
                          </p>
                      </section>
                      <section class="gallerypics">
                          <img src={BalastoneQuarry} />
                          <h4>Balastone Quarry</h4>
                          <p>Located in the Great Mesas, a highland region in Northwest Veriloft, Balastone Quarry contains one of the most valuable resources of the world, and Veriloft's highest valued export. Stretching miles under the surface, the quarry harvests a precious red gem from massive crystal formations, some of which may even stretch thousands of meters in height. The invaluable Balastone gem gained its name due to its prized properties. While inert, Balastone serves as a source of stabilization in both sea and air vessels. In its normal state, the gem has a peculiar inertia, which increases further with sharp acceleration and deceleration, causing more force to be applied to move it than it should for its mass, as it resists movement in air and water. Its second, and even more valued property, whenever Balastone encounters any form of energy, its inertia property decreases, along with its mass. So much so, that it causes the gem to flow in the opposite direction of gravity at a rapid rate. Because of this, widely known uses of this substance includes floating platforms, elevators, and skyships, which are incredibly useful for transportation and trade. </p>
                      </section>
                      <section class="gallerypics">
                          <img src={Frostvale} />
                          <h4>Frostvale</h4>
                          <p>Found on the northwest coast of Ralkor's Cerulean Passage, the port city of Frostvale is the dedicated settlement for those who use the powers of, or wish to learn about the domain of Ice. The residents of this city are typically very friendly to outsiders, though training for those who wish to learn the elemental powers of ice has been deemed quite harsh. Despite being located on the equator of Arconia, Frostvale maintains a permanent winter stretching miles out around the city. While Frostvale does require imports and exports, trade can oftentimes be delayed or impossible due to the frozen waters that occasionally develop around the coast. However, as a defensive measure during times of war, this ice can be purposefully extended and reinforced, causing a blockade from coast to coast across the Cerulean Passage. </p>
                      </section>
                      <section class="gallerypics">
                          <img src={GravitasStronghold} />
                          <h4>Levitas Stronghold</h4>
                          <p>Levitas Stronghold, the dedicated city to those who use the powers of, or wish to learn about the domain of Gravity can be found a few miles inland to the far southwest coast of Ralkor. Created as a result of an ancient battle of the Archon War, the terrain of Levitas remains broken and shattered. During this battle, the deity of gravity, Legyryx, was in a clash so fierce that her very essence shaped the area around her, causing massive portions of the surrounding mountains and terrain to eternally float in place. Because of this, worshipers of Legyryx have built their sanctuary within this gravity defying spectacle. </p>
                      </section>
                      <section class="gallerypics">
                          <img src={PyhrraicMountains} />
                          <h4>The Pyhrraic Mountains</h4>
                          <p>To the northwest coast of Ralkor, there lies a region of blazing crags, ever-active volcanos, and flowing rivers of magma. The Pyhrraic Mountains host all manner of fiery fauna and flora, creating a beautifully dangerous environment in which very few settlements can be found. The few cities that are located within this region are Cinderpeak, Emberfall, and Crimson Hollow, two of which are cities dedicated to those who use the powers of, or wish to learn about the domains of fire and smoke. Trade in this region is very minimal, so the residents who live here have become self-sufficient, as to not rely on outside aid if at all possible. 
                          </p>
                      </section>
                      <section class="gallerypics">
                          <img src={SandcutterPort} />
                          <h4>Sandcutter Port</h4>
                          <p>As one of the most populated port cities, Sandcutter Port resides within the Gulf of Tyldor within the continent Byzenir. It's beautiful mountainous cliffs, golden white sands, crystal clear water, and intricate architecture truly make it a sight to behold, as many people travel across the globe here for a serene retreat. Being far south enough under the equator and built over the sea, the warm climate makes living conditions near perfect. Sandcutter Port also holds great historical value, as this city served as a meeting point for a war council hundreds of years ago. The ancient ruins and structures are seen as a prized relic of the past, bringing even more tourists and history buffs to the location. </p>
                      </section>
                      <section class="gallerypics">
                          <img src={SkywardCastle} />
                          <h4>Skyward Castle</h4>
                          <p>A levitating city above the clouds, Skyward Castle is held aloft by the powers of those who are adept with the element of wind. The beautiful city consists of dozens of islands, each varying in size. Massive waterfalls flow from endless springs, and montane forests and gardens thrive, allowing the residents to live peacefully above the world below. Though visitors are vary sparse, as they would need some sort of flight to even reach the city, they are always welcomed with open arms, the residents showing great courtesy and politeness to their guests. </p>
                      </section>
                      <section class="gallerypics">
                          <img src={VerilSpires} />
                          <h4>Veril Spires</h4>
                          <p>Widely thought of as the secondary capitol of Veriloft, the Veril Spires are an unimaginable sight to see. Dozens of large, spiraling stone pillars with cities built into the corkscrew-like terrain dot the Crystal Sea along its southeast coast. Additionally, below the massive spires, many smaller islands rise above the sea, hosting small residential and market areas, as well as defensive bunkers. Due to the sheer size of the spires, it makes for an incredible defensive counter, as a naval incursion is nearly impossible here, and the spire's range covers the closest coastline to Veriloft's capitol.</p>
                      </section>
                  </div>
              </td>
          </tr>
      </table>
  </div>
  );
};

export default LocationsContent;
