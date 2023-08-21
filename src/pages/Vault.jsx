import React from "react";
import Dropdown from "../components/Dropdown";
import SearchBox from "../components/SearchBox";
import { useState, useEffect } from "react";
import ProductContainer from "../components/ProductContainer";

function Vault() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tagQuery, setTagQuery] = useState("All");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleTagChange = (event) => {
    setTagQuery(event.target.value);
  };

  useEffect(() => {
    console.log(searchQuery);
  }, []);
  return (
    <>
      <div className="row">
        <Dropdown onChange={handleTagChange} />
        <SearchBox onChange={handleSearchChange} />
      </div>
      <div className="row" style={{ height: "calc(100% - 3em)", overflow: "hidden"}}>
        <ProductContainer tag={tagQuery} search={searchQuery} />
      </div>
    </>
  );
}

export default Vault;
