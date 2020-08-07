import React from "react";

import "./SearchBar.styles.scss";

const SearchBar = ({ handleChange }) => (
  <div className='form-container'>
    <span className='fa fa-search'></span>
    <input
      className='input-form'
      type='search'
      placeholder='search jobs by title'
      onChange={handleChange}
    />
  </div>
);

export default SearchBar;
