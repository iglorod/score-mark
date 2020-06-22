import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { UserOutlined, EnvironmentFilled } from '@ant-design/icons';

import classes from './SelectedPlayer.module.css';

const SelectedPlayer = (props) => {
  const player = props.away ? props.awayPlayer : props.homePlayer;

  if (!player.player_id) return null;

  return (
    <div className={classes.selectedPlayer}>
      <div>
        <Link
          className={classes.playerIcon}
          to={{
            pathname: '/player',
            state: { id: player.player_id, }
          }}>
          <UserOutlined />
        </Link>
      </div>
      <div>
        <Link
          className={classes.playerName}
          to={{
            pathname: '/player',
            state: { id: player.player_id, }
          }}>
          {player.player_name}
        </Link>
      </div>
      <div className={classes.playerAge}>{player.age} y.o.</div>
      <div className={classes.playerPosition}>{player.position}</div>
      <div className={classes.playerBirthPlace}><EnvironmentFilled />{player.birth_place}, {player.birth_country}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    homePlayer: state.fxt.homePlayer,
    awayPlayer: state.fxt.awayPlayer,
  }
}

export default connect(mapStateToProps)(SelectedPlayer);
