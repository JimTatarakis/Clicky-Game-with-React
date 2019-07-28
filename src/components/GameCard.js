import React from 'react';




const GameCard = props => {
    return (
        <div className="col s3 card">
            <div className="card-image">
                <img onClick={() => props.clicked(props.gameCard.id)} id={props.gameCard.id} src={props.gameCard.imageUrl} alt={props.gameCard.id} />
            </div>
        </div>
    )
}

export default GameCard;