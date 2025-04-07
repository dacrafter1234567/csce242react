import "./css/AffinitiesContent.css";

const DeitiesArchive = ({ deityData }) => {
  return (
    <div className="deity-list">
      {deityData.map((deity, index) => (
        <div key={index} className="deitybar">
          <div className="column example">
            <section className="deityimg leftimg">
              <img src={`./src/assets/${deity.image}`} alt={deity.name} />
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
      ))}
    </div>
  );
};

export default DeitiesArchive;
