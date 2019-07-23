import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GameCard from './GameCard';

class GameCards extends Component {
    render() {
        return this.props.gamecards.map((gamecard) => {
            <GameCard key = {gamecard.id} gamecard = {gamecard} 
            shuffle = {this.props.shuffle} changeScore = {this.props.changeScore}
            clicked = {this.props.clicked} />
        })
    }
}

GameCards.propTypes = {
    gamecards: PropTypes.array.isRequired,
    shuffle: PropTypes.func.isRequired,
    changeScore: PropTypes.func.isRequired,
    clicked: PropTypes.func.isRequired
}

export default GameCards;