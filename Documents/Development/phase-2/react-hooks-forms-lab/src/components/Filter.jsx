import React from "react";

function Filter({ searchText, onSearchChange }) {
  function handleChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search items..." 
        value={searchText} 
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
