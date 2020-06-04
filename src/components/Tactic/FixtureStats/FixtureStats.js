import React from 'react';
import { connect } from 'react-redux';

import ClubColors from './ClubsColors/ClubsColors';
import ComparePercents from '../../UI/ComparePercents/ComparePercents';
import classes from './FixtureStats.module.css';

const FixtureStats = ({ fixture }) => {
  return (
    <div className={classes.stats}>
      <ClubColors
        homeName={fixture.homeTeam.team_name}
        awayName={fixture.awayTeam.team_name} />
      {
        Object.entries(fixture.statistics).map(([title, stats], index) => (
          <ComparePercents
            key={index}
            title={title}
            first={stats.home}
            last={stats.away} />
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

export default connect(mapStateToProps)(FixtureStats);
