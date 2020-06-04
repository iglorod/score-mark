import React from 'react';
import { connect } from 'react-redux';

import Substitute from './Substitute/Substitute';
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
          <Substitute key={index} player={player} away={away} />
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
