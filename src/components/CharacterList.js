import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';


const CharacterList = props => {
    //console.log(props);
    return (
        <ul className="char-list__wrapper">
            {props.characters
                .filter(character =>
                    props.searchText === ''
                    || character.name.toLowerCase().includes(props.searchText.toLowerCase()))
                .map(character => {
                    return (
                        <li key={character.id} className="char-list__item">
                            <Link
                                to={`/character/${character.id}`}
                                className="">
                                <CharacterCard character={character} />
                            </Link>
                        </li>
                    );
                })}
        </ul>
    );
};

export default CharacterList;