import React from 'react';

const CharacterCard = props => {
    const { name, species, image } = props.character;
    // let imageStyle = {
    //     backgroundImage: "url(" + { image } + ")",
    //     backgroundSize: "cover",
    // }
    return (
        <div className="card">
            {/* <div className="card__image" style={imageStyle}></div> */}
            <img className="card__image" src={image} alt={`${name} avatar`}
            // style={{ height: "12vh" }}
            />
            <div className="card__text">
                <p className="card__text--name">{name}</p>
                <p className="card__text--species">{species}</p>
            </div>
        </div >
    );
};

export default CharacterCard;
