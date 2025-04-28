import React, { useState, useEffect, useRef } from "react";
import "./css/CharacterForm.css";

const AddDialogue = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");
    const [originalId, setOriginalId] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const imageInputRef = useRef(null);
    const mode = props.mode || "create";

    useEffect(() => {
        if (props.character && mode === "edit") {
            setInputs(props.character);
            setOriginalId(props.character._id);
        } else {
            setInputs({});
            setOriginalId("");
        }
    }, [props.character, mode]);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("");
        setSubmitting(true);

        const formData = new FormData();
        formData.append("name", inputs.name || "");
        formData.append("classcomp", inputs.classcomp || "");
        formData.append("agerace", inputs.agerace || "");
        formData.append("affinity", inputs.affinity || "");

        if (inputs.img instanceof File) {
            formData.append("image", inputs.img);
        }

        const baseUrl = "https://csce242server-bfhe.onrender.com/api/characters";
        const url = mode === "edit" && inputs._id
            ? `${baseUrl}/${inputs._id}`
            : baseUrl;
        const method = mode === "edit" ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            console.log(`Submitting (${method}) to:`, url);

            if (response.ok) {
                const data = await response.json();
                if (mode === "edit") {
                    props.editCharacter(data);  // 🧹 <- refresh the character list after edit
                } else {
                    props.addCharacter(data);
                }
                setResult("Success!");
                setTimeout(() => {
                    props.closeDialogue();
                    resetForm();
                }, 500);
            } else {
                console.error("Server error submitting:", response.status);
                setResult("Error submitting character (server error)");
            }
        } catch (error) {
            console.error("Request failed:", error);
            setResult("Error submitting character (network error)");
        } finally {
            setSubmitting(false);
        }
    };

    const resetForm = () => {
        setInputs({});
        setOriginalId("");
        if (imageInputRef.current) {
            imageInputRef.current.value = "";
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleImageChange = (event) => {
        const { name, files } = event.target;
        setInputs((values) => ({ ...values, [name]: files[0] }));
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
                                disabled={submitting}
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
                                disabled={submitting}
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
                                disabled={submitting}
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
                                disabled={submitting}
                            />
                        </p>
                        <section className="columns">
                            <p id="img-upload">
                                <label htmlFor="img">Select Image:</label>
                                <input
                                    type="file"
                                    id="img"
                                    name="img"
                                    onChange={handleImageChange}
                                    ref={imageInputRef}
                                    disabled={submitting}
                                />
                            </p>
                        </section>
                        <p>
                            <button type="submit" disabled={submitting}>
                                {submitting ? "Saving..." : mode === "edit" ? "Update Character" : "Create Character"}
                            </button>
                        </p>
                        {result && <p>{result}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDialogue;
