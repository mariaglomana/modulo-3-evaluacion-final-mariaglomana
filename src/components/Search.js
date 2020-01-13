import React from 'react';

const Search = props => {

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    }
    const handleSearchText = event => {
        props.handleSearchText(event.target.value);
    }
    return <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search" className="form__label">
        </label>
        <input
            type="text"
            id="search"
            name="search"
            className="form__input-text"
            ref={props.searchText}
            onChange={handleSearchText} />
    </form>
}

export default Search;