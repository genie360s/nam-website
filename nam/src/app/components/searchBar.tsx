import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  searchHandler?: (query: string) => void; // Optional external hook
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = " Search",
  searchHandler, // Add the optional searchHandler prop
}) => {
  const [query, setQuery] = useState<string>("");
  const [noResults, setNoResults] = useState<boolean>(false);

  // Reset highlights on the page
  const resetHighlights = () => {
    const allTextElements = document.querySelectorAll(".searchable");
    allTextElements.forEach((element) => {
      const content = element.textContent ?? "";
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
      const content = element.textContent ?? "";
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

    // Trigger external search handler if provided
    if (searchHandler) {
      searchHandler(searchQuery);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    handleSearch(input);
  };

  return (
    <div>
    <div className="flex flex-col justify-center items-center my-4 relative z-50">
      <i className="bi bi-search absolute left-2 text-brand-copper"></i>
      {/* Search Bar */}
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        className="rounded-full focus:outline-none border border-brand-copper w-[15em] bg-transparent px-7 py-1"
      />
    </div>
    <div className="z-50 w-[15em]">
      {/* No Results Message */}
    {noResults && (
        <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg z-50 text-sm">
          No content found matching your query.
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchBar;
