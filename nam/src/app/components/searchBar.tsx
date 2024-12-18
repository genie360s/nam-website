import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string; // Customizable placeholder text
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "🔎 Search this page...",
}) => {
  const [query, setQuery] = useState<string>("");
  const [noResults, setNoResults] = useState<boolean>(false);

  // Reset highlights on the page
  const resetHighlights = () => {
    const allTextElements = document.querySelectorAll(".searchable");
    allTextElements.forEach((element) => {
      const content = element.textContent || "";
      element.innerHTML = content; // Reset to original text
    });
  };

  // Handle search functionality
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);

    if (!searchQuery.trim()) {
      setNoResults(false);
      resetHighlights();
      return;
    }

    const allTextElements = document.querySelectorAll(".searchable");
    let found = false;

    allTextElements.forEach((element) => {
      const content = element.textContent || "";
      const lowerCaseContent = content.toLowerCase();
      const lowerCaseQuery = searchQuery.toLowerCase();

      if (lowerCaseContent.includes(lowerCaseQuery)) {
        found = true;
        const regex = new RegExp(`(${searchQuery})`, "gi");
        element.innerHTML = content.replace(
          regex,
          `<span class="bg-yellow-500">$1</span>`
        );
      } else {
        element.innerHTML = content; // Remove highlights if no match
      }
    });

    setNoResults(!found);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    handleSearch(input);
  };

  return (
    <div className="flex flex-col justify-center items-center my-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        className="rounded-full focus:outline-none border border-brand-copper w-96 bg-transparent px-5 py-2"
      />

      {/* No Results Message */}
      {noResults && (
        <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
          No content found matching your query.
        </div>
      )}
    </div>
  );
};

export default SearchBar;
