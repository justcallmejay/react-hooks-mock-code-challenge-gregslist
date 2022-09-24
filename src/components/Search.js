import React from "react";

function Search( { findListing, searchListing }) {

  function handleSubmit(e) {
    e.preventDefault()
    // setSearchListing(searchListing)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchListing}
        onChange={findListing}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
