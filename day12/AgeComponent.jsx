import { useState, useEffect } from "react";

export default function AgeComponent({ age = 20 }) {
  const [currentAge, setCurrentAge] = useState(age);
  const [inputAge, setInputAge] = useState("");

  // Synchronize state if the age prop changes
  useEffect(() => {
    setCurrentAge(age);
  }, [age]);

  const handleUpdate = () => {
    if (inputAge.trim() !== "") {
      setCurrentAge(inputAge);
      setInputAge("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Age: {currentAge}</h1>
      <input
        type="number"
        placeholder="Enter new age"
        value={inputAge}
        onChange={(e) => setInputAge(e.target.value)}
      />
      <button onClick={handleUpdate} style={{ marginLeft: "8px" }}>
        Update Age
      </button>
    </div>
  );
}
