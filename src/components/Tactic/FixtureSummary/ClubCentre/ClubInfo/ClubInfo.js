import React from 'react';

import ClubName from './ClubName/ClubName';
import Manager from './Manager/Manager';
import Formation from './Formation/Formation';
import classes from './ClubInfo.module.css';

const ClubInfo = ({ club, lineups, away }) => {
  return (
    <div className={away ? classes.clubInfoAway : classes.clubInfo}>
      <ClubName club={club} />
      <Manager coach={lineups.coach} />
      <Formation formation={lineups.formation} />
    </div>
  )
}

export default ClubInfo;
