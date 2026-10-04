import { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Name Input</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <p>Name: {name}</p>
    </div>
  );
};

export default NameInput;