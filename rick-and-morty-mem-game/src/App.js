// Dependencies
import React, { Component } from 'react';
import uuid from 'uuid';

// Imported Components
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import GameCards from './components/GameCards';
import GameScore from './components/GameScore';

import Photo_1 from "./components/images/one.png"
import Photo_2 from "./components/images/two.png"
import Photo_3 from "./components/images/three.png"
import Photo_4 from "./components/images/four.png"
import Photo_5 from "./components/images/five.png"
import Photo_6 from "./components/images/six.png"
import Photo_7 from "./components/images/seven.png"
import Photo_8 from "./components/images/eight.png"
import Photo_9 from "./components/images/nine.png"
import Photo_10 from "./components/images/ten.png"
import Photo_11 from "./components/images/eleven.png"
import Photo_12 from "./components/images/twelve.png"

// Imported Styling
import './App.css';

// Sets initial state for game.
class App extends Component {
  state = {
    highScore: 0,
    currentScore: 0,
    gameCards: [
      {
        id: uuid.v4(),
        imageUrl: Photo_1,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_2,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_3,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_4,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_5,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_6,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_7,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_8,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_9,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_10,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_11,
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: Photo_12,
        clicked: false
      },
    ]
  }


  // Shuffles an array, will be used to shuffle after each click.
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Changes score and checks to see if highscore is beat
  changeScore = (currentscore) => {
    currentscore++;
    if (currentscore > this.state.highScore) {
      this.setState({
        highScore: currentscore,
        currentScore: currentscore
      })
    }
    else (
      this.setState({
        currentScore: currentscore
      })
    );
  };

  resetGame = () => {
    this.setState({
      currentScore: 0,
      gameCards: this.state.gameCards.map((gamecard) => {
        if (gamecard.clicked === true){
          this.setState({
            clicked: false
          })
          return gamecard
        }
        return gamecard;
      })
    })
  }

  // Changes clicked state to true.
  clicked = (id) => {
    this.setState({
      gameCards: this.state.gameCards.map((gamecard) => {
        if (gamecard.id === id) {
          if(gamecard.clicked === true){
            alert('try again!')
            window.location.reload();
          }
          gamecard.clicked = true;
          this.changeScore(this.state.currentScore);
        }
        
        return gamecard;
      })
    });
  };

  render(){
    return (
      <div className="App">
        < Header />
        <main>
          <div className="container">
            <div className="row">
              <GameScore currentScore = { this.state.currentScore } highScore = { this.state.highScore } />
            </div>
          </div>
          <div className="container" >
            <div className="row" >
              <GameCards gameCards = {this.shuffle(this.state.gameCards)} shuffle = {this.shuffle} changeScore = {this.changeScore}
            clicked = {this.clicked} />
            </div>
          </div>
        </main>
        < Footer />
      </div>
    );
  }

}
export default App;
