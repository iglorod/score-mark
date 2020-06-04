import React from 'react';

import Formation from './Formation/Formation';
import Substitutes from './Substitutes/Substitutes';
import PlayersStatistics from './PlayersStatistics/PlayersStatistics';
import classes from './Game.module.css';

const Game = () => {
  return (
    <>
      <div className={classes.game}>
        <Substitutes />
        <Formation />
        <Substitutes away />
      </div>
      <PlayersStatistics />
    </>
  )
}

export default Game;
