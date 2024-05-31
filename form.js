import React, { useState } from "react";

const UserForm = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted Name: ${name}`);
        alert(`Submitted Name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
