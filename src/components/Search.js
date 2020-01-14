import React from 'react';

const Search = props => {

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    }
    const handleSearchText = event => {
        props.handleSearchText(event.target.value);
    }
    return <form onSubmit={handleSearchSubmit} className="search__form">
        <label htmlFor="search" />
        <input
            type="text"
            id="search"
            name="search"
            className="search__input-text"
            ref={props.searchText}
            onChange={handleSearchText} />
    </form>
}

export default Search;