import React from 'react'
import './card.style.css'

export const Card = props => {
    return (
        <div className='card-container' >
            <img alt='bots' src={`https://robohash.org/${props.card.id}?set=set2&size=180x180`}></img>
            <h2> {props.card.name} </h2>
            <p> {props.card.email} </p>
        </div>
    )
}