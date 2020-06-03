import React from 'react';
import { connect } from 'react-redux';

import ClubCentre from './ClubCentre/ClubCentre';
import FixtureScore from './FixtureScore/FixtureScore';
import classes from './FixtureSummary.module.css';

const FixtureSummary = ({ fixture }) => {
  const HomeTeamName = fixture.homeTeam.team_name;
  const AwayTeamName = fixture.awayTeam.team_name;

  return (
    <div className={classes.summary}>
      <ClubCentre
        club={fixture.homeTeam}
        events={fixture.events}
        lineups={fixture.lineups[HomeTeamName]} />
      <FixtureScore
        statusShort={fixture.statusShort}
        homeGoals={fixture.goalsHomeTeam}
        awayGoals={fixture.goalsAwayTeam} />
      <ClubCentre
        club={fixture.awayTeam}
        events={fixture.events}
        lineups={fixture.lineups[AwayTeamName]}
        away />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
  }
}

export default connect(mapStateToProps)(FixtureSummary);
