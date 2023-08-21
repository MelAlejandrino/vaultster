import React from 'react';
import {Data} from '../Data/Data';

function Dropdown({ onChange }) {
    const uniqueTags = new Set();
  
    Data.forEach((data) => uniqueTags.add(data.tag));
  
    return (
      <select name="" id="" onChange={onChange}>
        <option value="All">All</option>
        {Array.from(uniqueTags).map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    );
  }
  
  export default Dropdown;
