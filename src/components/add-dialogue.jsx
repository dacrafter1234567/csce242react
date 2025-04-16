import React, { useState } from "react";
import "./css/CharacterForm.css";

const AddDialogue = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch("http://localhost:3000/api/characters/", {
            //http://localhost:3000/images/
            method: "POST",
            body: formData,
        });

        if (response.status === 200) {
            setResult("Character Sucessfully Added");
            event.target.reset();
            console.log("Attemptinh to add");
            const data = await response.json();
            console.log(data);
            props.addCharacter(data);
            props.closeDialogue();
        } else {
            console.log("Error Adding Character", response);
            setResult(response.message);
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]: value }));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({...values, [name]: value }));
    };

    
    return(
        <div className="add-dialogue">
            <div>
                <div>
                    <span style={{ float: "right", cursor: "pointer" }} onClick={props.closeDialogue}>
                        ❌
                    </span>
                    <form id="add-property-form" onSubmit={onSubmit}>
                        <h2>Create A Character</h2>
                        <p>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={inputs.name|| ""} onChange={handleChange} required />
                        </p>
                        <p>
                            <label htmlFor="name">Class Composition:</label>
                            <input type="text" id="classcomp" name="classcomp" value={inputs.classcomp|| ""} onChange={handleChange} required />
                        </p>
                        <p>
                            <label htmlFor="name">Age/Race:</label>
                            <input type="text" id="agerace" name="agerace" value={inputs.agerace|| ""} onChange={handleChange} required />
                        </p>
                        <p>
                            <label htmlFor="name">Affinity:</label>
                            <input type="text" id="affinity" name="affinity" value={inputs.affinity|| ""} onChange={handleChange} required />
                        </p>
                        <section className="columns">
                            <p id="img-prev-section">
                                <img id="img-prev" src={inputs.img != null ? URL.createObjectURL(inputs.img) : "" } alt="" />
                            </p>
                            <p id="img-upload">
                                <label htmlFor="img">Select Image:</label>
                                <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" /> 
                            </p>
                        </section>
                        <p>
                            <button type="submit">Submit</button>
                        </p>
                    </form>
                    <p>{result}</p>
                </div>
            </div>
        </div>
    );
};

export default AddDialogue