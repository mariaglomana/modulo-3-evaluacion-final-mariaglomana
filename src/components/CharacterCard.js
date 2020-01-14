import React from 'react';

const CharacterCard = props => {
    const { name, species, image } = props.character;
    return (
        <div className="card">
            <img className="card__image" src={image} alt={`${name} avatar`} style={{ height: "12vh" }} />
            <p className="card__name">{name}</p>
            <p className="card__species">{species}</p>
        </div>
    );
};

export default CharacterCard;
