import  React, { useState } from 'react';

function Search() {
    const {searchText, setSearchText }=useState(true);
  return (
    <div>
       
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
        <div className="search">
          <p>One</p>
          <p>Two</p>
          <p>three</p>
          <p>Four</p>
          <p>Five</p>
        </div>
    </div>
  )
}

export default Search
