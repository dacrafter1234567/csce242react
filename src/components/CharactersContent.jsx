import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/CharactersContent.css";  // ✅ Make sure your styles are correct
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
        const response = await axios.get(
          
            //"http://localhost:3000/api/characters/"
          
            "https://csce242server-bfhe.onrender.com/api/characters"
        );
        setCharactersArchive(response.data);
      })();
    }, []);

    const addCharacter = (newChar) => {
    setCharactersArchive((prev) => [...prev, newChar]);
    };


    const editCharacter = (updatedCharacter) => {
      setCharactersArchive((prev) =>
        prev.map((char) =>
          char.id === updatedCharacter.id ? updatedCharacter : char
        )
      );
    };
    

    const deleteCharacter = async (id) => {
      try {
        const response = await fetch(`https://csce242server-bfhe.onrender.com/api/characters/${id}`, {
          method: "DELETE",
        });
    
        if (response.ok) {
          setCharactersArchive((prev) =>
            prev.filter((character) => character.id !== id)
          );
        } else {
          console.error("Failed to delete character");
        }
      } catch (error) {
        console.error("Error deleting character:", error);
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
            <tr><th>Characters Archive</th></tr>
                <tr><td>

                    <section id="galleryslideshow">
                        <CharactersSlideshow />
                    </section>
            
                    <div className="character-grid">
                    {characters.map((character) => {
    const imagePath = character.image ? `https://csce242server-bfhe.onrender.com/api/images/${character.image}` : null;


    return (
        <div key={character.id} className="character">
            <div className="charcol">
                {imagePath && <img src={imagePath} alt={character.name} />}
                <button className="deletebtn clearfix" onClick={() => deleteCharacter(character.id)}><h4>❌</h4></button>
                <button className="editbtn" onClick={() => handleEdit(character)}><h4>Edit</h4></button>
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
                <button className="deletebtn clearfix" onClick={() => deleteCharacter(character.id)}><h4>❌</h4></button>
                <button className="editbtn" onClick={() => handleEdit(character)}><h4>Edit</h4></button>
            </div>
        </div>
    );
})}


                    </div>
                </td></tr>
                <tr className="buttonRow"><td>
                    <button className="charbtn" onClick={openAddDialogue}><h4>Add Character</h4></button>
                    

                    {showAddDialogue && (
                    <AddDialogue
                        closeDialogue={closeAddDialogue}
                        addCharacter={addCharacter}
                        editCharacter={editCharacter}
                        character={selectedCharacter}
                        mode={editMode ? "edit" : "add"}/>
                    )}
   
                </td></tr>
            </table>
        </div>
    );
  };

export default CharactersContent;
