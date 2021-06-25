import React from 'react'
import './search.css'
function Search(prop) {
    return (
        <div className='search-box'>
            <input type='text' 
            placeholder='Search'
            onChange={prop.onSearchChange}
            ></input>
        </div>
    )
}

export default Search
