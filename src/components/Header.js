import React from "react";
import Search from "./Search";

function Header({ findListing, searchListing }) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search findListing={findListing} searchListing={searchListing}
      />
    </header>
  );
}

export default Header;
