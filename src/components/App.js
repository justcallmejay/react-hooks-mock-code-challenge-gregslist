import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listing, setListing] = useState([])

  useEffect(()=> {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(listing => setListing(listing))
  }, [])

  console.log(listing)

  const [searchListing, setSearchListing] = useState("")

  const findListing = (e) => {
    setSearchListing(e.target.value)
  }

  const searchResults = listing.filter(list => {
    return list.description.toLowerCase().includes(searchListing.toLowerCase()) || list.location.toLowerCase().includes(searchListing.toLowerCase())
  })

  return (
    <div className="app">
      <Header findListing={findListing} searchListing={searchListing}/>
      <ListingsContainer searchResults={searchResults} setListing={setListing} />
    </div>
  );
}

export default App;
