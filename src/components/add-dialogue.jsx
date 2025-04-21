import React, { useState, useEffect, useRef } from "react";
import "./css/CharacterForm.css";

const AddDialogue = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");
    const [originalName, setOriginalName] = useState("");
    const imageInputRef = useRef(null);
    const mode = props.mode || "create";

    useEffect(() => {
        if (props.character && mode === "edit") {
            setInputs(props.character);
            setOriginalName(props.character.name);
        }
    }, [props.character, mode]);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
    
        const formData = new FormData();
        formData.append("name", inputs.name || "");
        formData.append("classcomp", inputs.classcomp || "");
        formData.append("agerace", inputs.agerace || "");
        formData.append("affinity", inputs.affinity || "");
    
        // Append image if it's a new File
        if (inputs.img instanceof File) {
            formData.append("image", inputs.img);
        }
    
        // Include original name if the name has changed in edit mode
        if (mode === "edit" && inputs.name !== originalName) {
            formData.append("originalName", originalName);
        }
    
        // Debug log
        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
    
        const baseUrl = "https://csce242server-bfhe.onrender.com/api/characters";
        const url = mode === "edit"
            ? `${baseUrl}/${encodeURIComponent(originalName)}`
            : baseUrl;
    
        const method = mode === "edit" ? "PUT" : "POST";
    
        try {
            const response = await fetch(url, {
                method: method,
                body: formData,
            });
    
            console.log("Submitting to:", url);
    
            if (response.ok) {
                const data = await response.json();
                if (mode === "edit") {
                    props.editCharacter(data);
                } else {
                    props.addCharacter(data);
                }
                props.closeDialogue();
                setResult("Success!");
                setInputs({});
                if (imageInputRef.current) {
                    imageInputRef.current.value = "";
                }
            } else {
                console.error("Error submitting:", response);
                setResult("Error submitting character");
            }
        } catch (error) {
            console.error("Request failed:", error);
            setResult("Error submitting character");
        }
    };
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <div className="add-dialogue">
            <div>
                <div>
                    <span style={{ float: "right", cursor: "pointer" }} onClick={props.closeDialogue}>
                        ❌
                    </span>
                    <form id="add-property-form" onSubmit={onSubmit}>
                        <h2>{mode === "edit" ? "Edit Character" : "Create A Character"}</h2>
                        <p>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={inputs.name || ""}
                                onChange={handleChange}
                                required
                            />
                        </p>
                        <p>
                            <label htmlFor="classcomp">Class Composition:</label>
                            <input
                                type="text"
                                id="classcomp"
                                name="classcomp"
                                value={inputs.classcomp || ""}
                                onChange={handleChange}
                                required
                            />
                        </p>
                        <p>
                            <label htmlFor="agerace">Age/Race:</label>
                            <input
                                type="text"
                                id="agerace"
                                name="agerace"
                                value={inputs.agerace || ""}
                                onChange={handleChange}
                                required
                            />
                        </p>
                        <p>
                            <label htmlFor="affinity">Affinity:</label>
                            <input
                                type="text"
                                id="affinity"
                                name="affinity"
                                value={inputs.affinity || ""}
                                onChange={handleChange}
                                required
                            />
                        </p>
                        <section className="columns">
                            <p id="img-upload">
                                <label htmlFor="img">Select Image:</label>
                                <input
                                    type="file"
                                    id="img"
                                    name="img"
                                    ref={imageInputRef}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                                {inputs.img && typeof inputs.img !== "string" && (
                                    <p>Selected file: {inputs.img.name}</p>
                                )}
                                {inputs.img && typeof inputs.img === "string" && mode === "edit" && (
                                    <p>Current file: {inputs.img.split("/").pop()}</p>
                                )}
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

export default AddDialogue;
