import React from 'react';

import Formation from './Formation/Formation';
import Sidebar from './Sidebar/Sidebar';
import PlayersStatistics from './PlayersStatistics/PlayersStatistics';
import classes from './Game.module.css';

const Game = () => {
  return (
    <>
      <div className={classes.game}>
        <Sidebar />
        <Formation />
        <Sidebar away />
      </div>
      <PlayersStatistics />
    </>
  )
}

export default Game;
