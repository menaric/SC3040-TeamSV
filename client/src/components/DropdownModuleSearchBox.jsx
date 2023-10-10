import React from "react";
import { useState, useEffect } from "react";

function DropdownModuleSearchBox() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const options = [
        "SC1001",
        "SC1002",
        "SC1003",
        "SC1004",
        "SC1005",
        "AD1102",
        "AC1301",
    ]; // Replace with your options

    // Function to handle input changes and filter options
    const handleInputChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setSearchTerm(inputValue);
        const filtered = options.filter((option) =>
            option.toLowerCase().includes(inputValue)
        );
        setSearchResults(filtered);
    };

    // Function to handle option selection
    const handleOptionSelect = (option) => {
        setSearchTerm(option);
        setSearchResults([]);
    };

    return (
        <div className="dropdown-search-box">
            <input
                className="search-box"
                type="text"
                placeholder="Search options..."
                onChange={handleInputChange}
                value={searchTerm}
            />
            {searchResults.length > 0 && (
                <ul className="dropdown-options">
                    {searchResults.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownModuleSearchBox;
