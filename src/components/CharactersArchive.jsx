import "./css/CharactersContent.css";

const CharactersArchive = ({ characterData }) => {
  return (
    <div className="">
      {characterData.map((character, index) => (
        <div key={index} className="characterbar">
            <div key={index} className="column example">
                <section className="character">
                    <div className="charcol">
                        <img src={image} alt={character.name} />
                        <h4>Name: {character.name}</h4>
                        <p>Class Composition: {character.classcomp}</p>
                        <p>{character.agerace}</p>
                        <p>Affinity: {character.affinity}</p>
                    </div>
                    <div className="largecol">
                        <section className="charimg">
                        <img src={image} alt={character.name} />
                        </section>
                        <section className="chardesc">
                        <h4>Name: {character.name}</h4>
                        <p>Class Composition: {character.classcomp}</p>
                        <p>{character.agerace}</p>
                        <p>Affinity: {character.affinity}</p>
                        </section>
                    </div>
                </section>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CharactersArchive;