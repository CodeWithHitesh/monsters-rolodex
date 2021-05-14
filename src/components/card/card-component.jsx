import React from 'react';
import './card.styles.css';

// Individual monster.
export const Card = (props) => {
    return <div className='card-container'>
        <img
            class="img-center"
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=set2`}
            width="180" height="180"
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
};

export default Card;