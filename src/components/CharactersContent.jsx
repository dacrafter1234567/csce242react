import React, { useState, useEffect } from "react";
import "./css/CharactersContent.css";
import CharactersSlideshow from "./CharactersSlideshow";
import axios from "axios";
import AddDialogue from "./add-dialogue";

const CharactersContent = () => {
  const [characters, setCharactersArchive] = useState([]);
  const [showAddDialogue, setShowAddDialogue] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://csce242server-bfhe.onrender.com/api/characters/");
      setCharactersArchive(response.data);
    })();
  }, []);

  const addCharacter = (newChar) => {
    setCharactersArchive((prev) => [...prev, newChar]);
  };

  const editCharacter = (updatedCharacter) => {
    setCharactersArchive((prevCharacters) =>
      prevCharacters.map((char) =>
        char._id === updatedCharacter._id ? updatedCharacter : char
      )
    );
    setShowAddDialogue(false);
  };

  const deleteCharacter = async (character) => {
    try {
      const response = await fetch(`https://csce242server-bfhe.onrender.com/api/characters/${character._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCharactersArchive((prev) => prev.filter((c) => c._id !== character._id));
      } else {
        console.error("Delete failed");
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const handleEdit = (character) => {
    setSelectedCharacter(character);
    setEditMode(true);
    setShowAddDialogue(true);
  };

  const openAddDialogue = () => {
    setEditMode(false);
    setSelectedCharacter(null);
    setShowAddDialogue(true);
  };

  const closeAddDialogue = () => {
    setEditMode(false);
    setSelectedCharacter(null);
    setShowAddDialogue(false);
  };

  return (
    <div className="pageportal">
      <table>
        <thead>
          <tr><th>Characters Archive</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <section id="galleryslideshow">
                <CharactersSlideshow />
              </section>

              <div className="character-grid">
                {characters.map((character) => {
                  const imagePath = character.image ? `https://csce242server-bfhe.onrender.com/images/${character.image}` : null;

                  return (
                    <div key={character._id} className="character">
                      <div className="charcol">
                        {imagePath && <img src={imagePath} alt={character.name} />}
                        <button className="deletebtn clearfix" onClick={() => deleteCharacter(character)}><h4>❌</h4></button>
                        <button className="editbtn" onClick={() => handleEdit(character)}><h4>✎</h4></button>
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
                          <button className="deletebtn clearfix" onClick={() => deleteCharacter(character)}><h4>❌</h4></button>
                          <button className="editbtn" onClick={() => handleEdit(character)}><h4>✎</h4></button>
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
            </td>
          </tr>

          <tr className="buttonRow">
            <td>
              <button className="charbtn" onClick={openAddDialogue}><h4>Add Character</h4></button>

              {showAddDialogue && (
                <AddDialogue
                  closeDialogue={closeAddDialogue}
                  addCharacter={addCharacter}
                  editCharacter={editCharacter}
                  character={selectedCharacter}
                  mode={editMode ? "edit" : "add"}
                />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CharactersContent;
