import React from "react";


const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search-bar">

      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      
    </div>
  );
};

export default SearchBar;