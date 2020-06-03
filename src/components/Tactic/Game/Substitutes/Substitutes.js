import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar } from 'antd';

import classes from './Substitutes.module.css';

const Substitutes = (props) => {
  const { fixture, away } = props;

  const HomeTeamName = fixture.homeTeam.team_name;
  const AwayTeamName = fixture.awayTeam.team_name;

  let substitutes = fixture.lineups[HomeTeamName].substitutes;
  if (away) {
    substitutes = fixture.lineups[AwayTeamName].substitutes;
  }

  return (
    <div className={classes.substitutes}>
      {
        substitutes.map((player, index) => (
          <div key={index} className={classes.player}>
            <div className={classes.playerPos}>
              <Avatar
                shape='square'
                size='small'
                className={away ? classes.awayAvatar : classes.homeAwatar}
              >
                {player.pos}
              </Avatar>
            </div>
            <div>
              <span className={classes.playerNumber}>{player.number}{'.'}</span>
              <Link
                className={classes.playerName}
                to={{
                  pathname: '/player',
                  state: { id: player.player_id }
                }}
              >
                {player.player}
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
  }
}

export default connect(mapStateToProps)(Substitutes);
