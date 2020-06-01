import React from 'react';

import classes from './TimeStats.module.css';

const TimeStats = ({ player }) => {
  return (
    <div className={classes.timeStats}>
      <div>{player.team_name}</div>
      <div>
        {player.games.appearences}
        <span>Minutes per Goal</span>
      </div>
      <div>
        {player.games.minutes_played}
        <span>Minutes played</span>
      </div>
    </div>
  )
}

export default TimeStats;
