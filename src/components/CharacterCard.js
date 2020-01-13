import React from 'react';
//import { Link } from 'react-router-dom';

const CharacterCard = props => {
    //   const handleChangeButton = () => {
    //     props.handleTaskStatus(props.task.id);
    //   };
    console.log(props);
    const { name, species, image } = props.character;
    return (
        <div className="card">
            <img className="card__image" src={image} alt={`${name} avatar`} style={{ height: "12vh" }} />
            <p className="card__name">{name}</p>
            <p className="card__species">{species}</p>
            {/* <Link to={`/detail/${props.task.id}`} className="card__btn">
                
      </Link> */}
        </div>
    );
};

export default CharacterCard;
