import { useState } from "react";
import "./index.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    } else {
      alert("Enter valid input!");
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
        className="input"
      />
      <button onClick={handleSearch} className="button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
