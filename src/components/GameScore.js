import React from 'react';

export default function GameScore(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <h4>High Score: {props.highScore} </h4>
                    </div>
                    <div className="col s6">
                        <h4>Current Score: {props.currentScore} </h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}