import React from 'react'

const SearchForm = ({ handleSearchFilter }) => {
  return (
    <form>
      <label htmlFor="search"></label>
      <input name="search" onChange={handleSearchFilter}></input>
    </form>
  )
}

export default SearchForm;
