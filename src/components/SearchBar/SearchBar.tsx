import React from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface searchBarProps {
  searchTerm: string;
  handleSearchChange: (email: string) => void;
}

const SearchBar = (props: searchBarProps) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={props.searchTerm}
        onChange={(e) => props.handleSearchChange(e.target.value)}
        autoComplete="off"
        spellCheck="false"
        autoFocus
      />
      <button type="button">
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
