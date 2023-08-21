import React from 'react'

function SearchBox({ onChange }) {
  return (
    <input type='text' onChange={onChange} />
  )
}

export default SearchBox