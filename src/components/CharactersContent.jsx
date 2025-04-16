import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/CharactersContent.css";  // ✅ Make sure your styles are correct
import CharactersSlideshow from "./CharactersSlideshow";
import axios from "axios";
import AddDialogue from "./add-dialogue";

const CharactersContent = () => {
    const [characters, setCharactersArchive] = useState([]);
    const [showAddDialog, setShowAddDialogue] = useState(false);

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          //"http://localhost:3000/api/characters/"
          "https://csce242server-bfhe.onrender.com/api/characters"
        );
        setCharactersArchive(response.data);
      })();
    }, []);

    const addCharacter = (character) => {
        setCharactersArchive((characters) => [...characters, character]);
    };

    const openAddDialogue = () => {
        setShowAddDialogue(true);
    }

    const closeAddDialogue = () => {
        setShowAddDialogue(false);
    }
  
    return (
      <div className="pageportal">
        <table>
            <tr><th>Characters Archive</th></tr>
                <tr><td>

                    <section id="galleryslideshow">
                        <CharactersSlideshow />
                    </section>
            
                    <div className="character-grid">
                    {characters.map((character, index) => {
                        const imagePath = character.image ? `https://csce242server-bfhe.onrender.com/images/${character.image}` : null;
                        //const imagePath = "https://csce242server-bfhe.onrender.com/api/characters" + character.image;
                        //http://localhost:3000/images/
                        return (
                            <div key={index} className="character">
                                <div className="charcol">
                                    {imagePath && <img src={imagePath} alt={character.name} />}
                                    <h4>Name: {character.name}</h4>
                                    <p>Class Composition: {character.classcomp}</p>
                                    <p>{character.agerace}</p>
                                    <p>Affinity: {character.affinity}</p>
                                </div>
                                <div className="largecol">
                                    <section className="charimg">
                                        {imagePath && <img src={imagePath} alt={character.name} />}
                                    </section>
                                    <section className="chardesc">
                                        <h4>Name: {character.name}</h4>
                                        <p>Class Composition: {character.classcomp}</p>
                                        <p>{character.agerace}</p>
                                        <p>Affinity: {character.affinity}</p>
                                    </section>
                                </div>
                            </div>
                        );
                    })}

                    </div>
                </td></tr>
                <tr className="buttonRow"><td>
                    <button className="charbtn" onClick={openAddDialogue}><h4>Add Character</h4></button>

                        {showAddDialog ? <AddDialogue closeDialogue={closeAddDialogue} addCharacter={addCharacter} />  : ""}   
                </td></tr>
            </table>
        </div>
    );
  };

export default CharactersContent;
