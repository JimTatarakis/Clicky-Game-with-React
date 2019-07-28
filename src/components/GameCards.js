import React from 'react';

import GameCard from './GameCard';

const GameCards = props=>{

    return (
                props.gameCards.map((gamecard) => (
                    <GameCard clicked = {props.clicked} gameCard = {gamecard} />
                ))
                )
}

export default GameCards;