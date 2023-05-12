import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

export default function SearchBar({ product }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const suggestionsHandler = () => {
      const filteredSuggestions = product.filter(
        (item) =>
          item.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.produktnamn.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.info.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSuggestions(filteredSuggestions);
    };

    suggestionsHandler();
  }, [searchTerm, product]);

  const onClickHandler = () => {
    navigate("/productPage", { state: { searchResult: suggestions } });
    setSearchTerm("");
  };
  return (
    <div className="searchWrapper">
      <div className="input-group">
        <input
          type="text"
          className="form-control dropdown-toggle"
          style={{ borderRadius: "10px 0px 0px 10px" }}
          placeholder="Sök"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            style={{ borderRadius: "0px 10px 10px 0px" }}
            type="button"
            id="button-addon2"
            onClick={() => onClickHandler()}
          >
            <Search />
          </button>
        </div>
      </div>
      {searchTerm !== "" && suggestions.length > 0 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton1"
        >
          {suggestions.map((dropdownItem, i) => (
            <li style={{ cursor: "pointer" }} key={i}>
              <button
                onClick={() => {
                  onClickHandler(dropdownItem);
                }}
                className="dropdown-item"
              >
                {dropdownItem.produktnamn}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
