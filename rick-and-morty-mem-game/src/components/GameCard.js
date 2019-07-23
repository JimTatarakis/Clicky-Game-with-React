import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GameCard extends Component {
    render(){
        const { id, imageUrl } = this.props.gamecard;
        return (
            <div className="col s3">
                <image onClick={this.props.clicked.bind(this, id)} src={ imageUrl }>{id}</image>
            </div>
        )
    }
}

export default GameCard;