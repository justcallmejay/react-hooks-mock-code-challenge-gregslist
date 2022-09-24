import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { searchResults, setListing } ) {

  const [toggleStar, setToggleStar] = useState(true)

  function handleToggleStar() {
    setToggleStar((toggleStar) => !toggleStar)
  }

  function handleDelete(deleteList) {
    const updateList = searchResults.filter((list) => list.id !== deleteList.id)
      setListing(updateList);
  }

  return (
    <main>
      <ul className="cards">
        {searchResults.map(list => 
        <ListingCard 
        // description={list.description} image={list.image} location={list.location}
        handleToggleStar={handleToggleStar}
        toggleStar={toggleStar}
        list={list} handleDelete={handleDelete}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
