// Dependencies
import React from 'react';
import uuid from 'uuid';

// Imported Components
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import GameArea from './components/GameArea';

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
        imageUrl: './images/1.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/2.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/3.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/4.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/5.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/6.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/7.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/8.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/9.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/10.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/11.png',
        clicked: false
      },
      {
        id: uuid.v4(),
        imageUrl: './images/12.png',
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

  // Changes clicked state to true.
  clicked = (id) => {
    this.setState({
      gameCards: this.state.gameCards.map((gamecard) => {
        if (gamecard.id === id) {
          gamecard.clicked = true
        }
        return gamecard;
      })
    });
  };

  render(){
    return (
      <div className="App">
        < Header />
  
        < Footer />
      </div>
    );
  }

}
export default App;
