import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="selfie" src={`https://robohash.org/${props.localUser.id}?set=set2&size=180x180`}/>
        <h1> {props.localUser.name} </h1>
        <p> { props.localUser.email } </p>
    </div>
);