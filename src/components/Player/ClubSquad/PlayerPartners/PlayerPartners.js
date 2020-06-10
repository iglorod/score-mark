import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './PlayerPartners.module.css';

const PlayerPartners = ({ currentId, playerPartners }) => {
  if (playerPartners.length === 0) return null;
  
  return (
    <div className={classes.players}>
      {
        playerPartners.map((player, index) => (
          <div key={index} className={player.player_id === currentId ? classes.currentPlayer : classes.player}>
            <div className={classes.playerNameWrapper}>
              <Link
                to={{
                  pathname: '/player',
                  state: { id: player.player_id }
                }}
                className={classes.playerName}
              >
                {player.player_name}
              </Link>
            </div>

            <div className={classes.playerPosition}>{player.position}</div>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playerPartners: state.plr.playerPartners,
  }
}

export default connect(mapStateToProps)(PlayerPartners);
