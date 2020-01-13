import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    //console.log(props);
    return (
        <ul className="characters-list">
            {props.characters
                .filter(character =>
                    props.searchText === ''
                    || character.name.toLowerCase().includes(props.searchText.toLowerCase()))
                .map(character => {
                    return (
                        <li key={character.id}>
                            <CharacterCard character={character} />
                        </li>
                    );
                })}
        </ul>
    );
};

export default CharacterList;