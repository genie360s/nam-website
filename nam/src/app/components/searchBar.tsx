// components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string; // Allows customizable placeholder text
  searchHandler: (query: string) => void; // Function to handle search logic
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "🔎 Search for anything...", searchHandler }) => {
  const [query, setQuery] = useState("");

  // Handle changes in the input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input); // Update the state
    searchHandler(input); // Trigger the search logic
  };

  return (
    <div >
      {/* Magnifying glass icon */}
      
      {/* Input field for search */}
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        className="rounded-full  focus:outline-none border border-brand-copper w-96 bg-transparent px-5 py-2"
       
      />
    </div>
  );
};

export default SearchBar;
