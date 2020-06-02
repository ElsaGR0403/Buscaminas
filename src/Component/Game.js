import React, { Component } from 'react';
import Board from './Board';
import Cronometro from './Cronometro';

class Game extends React.Component {
    render() {
        return (
            <div className="game">
              <h1>Buscaminas</h1>
              <h1>¿Crees que puedes ganar?</h1>
              <div className="game-board">
                <Board />
              </div>
              <div className="game-info">
                <Cronometro/>
              </div>
            </div>
          );
    }
}

export default Game;