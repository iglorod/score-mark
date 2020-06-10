import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './PlayerClub.module.css';

const PlayerClub = ({ playerClub }) => {
  if (!playerClub) return null;

  return (
    <div className={classes.playerClub}>
      <img src={playerClub.logo} className={classes.clubLogo} alt={'club'} />
      <Link
        to={{
          pathname: '/club',
          state: { id: playerClub.team_id, }
        }}
        className={classes.clubName}
      >
        {playerClub.name}
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playerClub: state.plr.playerClub,
  }
}

export default connect(mapStateToProps)(PlayerClub);
