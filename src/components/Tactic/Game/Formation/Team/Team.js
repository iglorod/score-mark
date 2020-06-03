import React from 'react';

import PlayersColumn from './PlayersColumn/PlayersColumn';
import classes from './Team.module.css';

const Team = ({ formation, team, playersStats, away }) => {
  const order = ['G', 'D', 'M', 'F'];
  const showedPlayers = new Set();

  const formationWithGk = ('1-' + formation).split('-');
  if (away) {
    formationWithGk.reverse();
    order.reverse();
  }
  
  return (
    <div className={classes.teamPositions}>
      {
        formationWithGk.map((playersCount, index, arr) => (
          <PlayersColumn
            key={index}
            count={playersCount}
            showedPlayers={showedPlayers}
            team={team}
            order={order}
            playersStats={playersStats}
            away={away}
            width={100 / arr.length} />
        ))
      }
    </div>
  )
}

export default Team;
