import "./css/AffinitiesContent.css";


const DeitiesArchive = (DeitiesArchive) => {

    const imageSrc = 'https://localhost:3001/${DeitiesArchive.image}';

    return (
        <div className="deity-list">
    
          {deityData.map((deity, index) => (
            <div key={index} className="deitybar">
              <div className="column example">
                <section className="deityimg leftimg">
                  <img src={imageSrc} alt={DeitiesArchive.name}/>
                </section>
                <section className="deitydesc">
                  <h3>{deity.name}</h3>
                  <p><strong>Elemental Affinity:</strong> {DeitiesArchive.elemental_affinity}</p>
                  <p><strong>Description:</strong> {DeitiesArchive.description}</p>
                  <p><strong>Gender:</strong> {DeitiesArchive.gender}</p>
                  <p><strong>Side:</strong> {DeitiesArchive.side}</p>
                  <p><strong>Alignment:</strong> {DeitiesArchive.alignment}</p>
                  <p><strong>Personality:</strong> {DeitiesArchive.personality}</p>
                  <p><strong>Devoted Guilds:</strong></p>
                  <ul>
                    {DeitiesArchive.devoted_guilds.map((guild, idx) => (
                      <li key={idx}>{guild}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          ))}
        </div>
      );
}

export default DeitiesArchive;