import React from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <span>
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      </span>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
