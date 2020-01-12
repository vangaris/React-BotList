import React from 'react'
import './card-list.style.css'
import { Card } from '../card/card.component'

export const CardList = props => {
    return (
        <div className="card-list ">
            {props.bots.map((bot) => (
                <Card key={bot.id} card={bot} />
            ))} </div>
    )
}