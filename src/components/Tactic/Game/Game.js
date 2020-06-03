import React from 'react';

import Formation from './Formation/Formation';
import Substitutes from './Substitutes/Substitutes';
import classes from './Game.module.css';

const Game = () => {
  return (
    <div className={classes.game}>
      <Substitutes />
      <Formation />
      <Substitutes away />
    </div>
  )
}

export default Game;
