import React from 'react';
import { connect } from 'react-redux';

import StatsItem from './StatsItem/StatsItem';
import classes from './BriefStats.module.css';

const BriefStats = ({ stats }) => {
  if (!stats) return null;


  return (
    <div className={classes.briefStats}>
      <StatsItem
        tooltip={'Matchs played'}
        value={stats.matchs.matchsPlayed.total} />
      <StatsItem
        tooltip={'Wins - Loses matches'}
        value={stats.matchs.wins.total - stats.matchs.loses.total} />
      <StatsItem
        tooltip={'Goal difference'}
        value={stats.goals.goalsFor.total - stats.goals.goalsAgainst.total} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.club.stats,
  }
}

export default connect(mapStateToProps)(BriefStats);
