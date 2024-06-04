import { useState } from "react";
import { Button, Input, TextField } from "@mui/material";

// Define a custom dictionary of words and their definition

const customDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedDefinition, setSuggestedDefinition] = useState("");

  const handleInputSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();

    const foundWord = customDictionary.find(
      (entry) => entry.word.toLowerCase() === lowerCaseTerm
    );
    if (foundWord) {
      setSuggestedDefinition(foundWord.meaning);
    } else {
      setSuggestedDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Dictionary App</h1>
      <div>
        <Input
          type="text"
          value={searchTerm}
          label="Search for a word"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleInputSearch}
          style={{ marginLeft: "1rem" }}
        >
          Search
        </Button>
      </div>
      <p>
        <strong>{"Definition: "}</strong>
        {suggestedDefinition}
      </p>
    </div>
  );
};

export default XDictionary;
