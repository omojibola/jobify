import React from "react";

import "./SearchBar.styles.scss";

const SearchBar = () => (
  <div className='form-container'>
    <span class='fa fa-search'></span>
    <input
      className='input-form'
      type='search'
      placeholder='search jobs by title'
    />
    <button>Search</button>
  </div>
);

export default SearchBar;
