import React from 'react';
//import { Link } from 'react-router-dom';

const CharacterDetail = props => {
    const { image, name, status, species, origin, episodes } = props.character;

    return (
        <React.Fragment>
            {/* <Link to="/">Volver</Link> */}
            <div className="character-detail__wrapper">
                <img className="card__image" src={image} alt={`${name} avatar`} style={{ height: "25vh" }} />
                <h2 className="detail-name">{name}</h2>
                <p className="detail-descr"><span className="detail-descr__bold">Status:</span>{status}</p>
                <p className="detail-descr"><span className="detail-descr__bold">Species:</span>{species}</p>
                <p className="detail-descr"><span className="detail-descr__bold">Origin:</span>{origin}</p>
                <p className="detail-descr"><span className="detail-descr__bold">Episodes:</span>{episodes}</p>
            </div>
        </React.Fragment>
    )
}

export default CharacterDetail;

