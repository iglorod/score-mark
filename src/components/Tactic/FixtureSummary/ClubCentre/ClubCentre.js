import React from 'react';

import ClubLogo from './ClubLogo/ClubLogo';
import ClubInfo from './ClubInfo/ClubInfo';
import Scorers from './Scorers/Scorers';
import classes from './ClubCentre.module.css';

const clubCentre = ({ club, lineups, events, away }) => {
  return (
    <div className={away ? classes.clubCentreAway : classes.clubCentre}>
      <div className={away ? classes.clubDataAway : classes.clubData}>
        <ClubLogo src={club.logo} />
        <ClubInfo club={club} lineups={lineups} away={away} />
      </div>
      <Scorers clubId={club.team_id} events={events} />
    </div>
  )
}

export default clubCentre;
