import React from 'react';
import { connect } from 'react-redux';

import Team from './Team/Team';
import FieldImage from '../../../assets/images/field.jpg';
import classes from './Formation.module.css';

const Formation = ({ fixture }) => {
  const HomeTeamName = fixture.homeTeam.team_name;
  const homePlayersStats = fixture.players.reduce((resultPlayers, player) => {
    if (player.team_name === HomeTeamName) {
      resultPlayers.push(player);
    }
    return resultPlayers;
  }, []);

  const AwayTeamName = fixture.awayTeam.team_name;
  const awayPlayersStats = fixture.players.reduce((resultPlayers, player) => {
    if (player.team_name === AwayTeamName) {
      resultPlayers.push(player);
    }
    return resultPlayers;
  }, []);

  return (
    <div
      className={classes.field}
      style={{ background: `url(${FieldImage}) no-repeat scroll right top rgba(0,0,0,0)` }}
    >
      <Team
        formation={fixture.lineups[HomeTeamName].formation}
        team={fixture.lineups[HomeTeamName].startXI}
        playersStats={homePlayersStats} />
      <Team
        formation={fixture.lineups[AwayTeamName].formation}
        team={fixture.lineups[AwayTeamName].startXI}
        playersStats={awayPlayersStats}
        away />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
  }
}

export default connect(mapStateToProps)(Formation);
