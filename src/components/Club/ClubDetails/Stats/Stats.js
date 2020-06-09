import React from 'react';
import { connect } from 'react-redux';

import ComparePercents from '../../../UI/ComparePercents/ComparePercents';

const Stats = ({ stats }) => {
  return (
    <>
      <ComparePercents
        title={'Match wins Home/Away'}
        first={stats.matchs.wins.home}
        last={stats.matchs.wins.away} />
      <ComparePercents
        title={'Match draws Home/Away'}
        first={stats.matchs.draws.home}
        last={stats.matchs.draws.away} />
      <ComparePercents
        title={'Match loses Home/Away'}
        first={stats.matchs.loses.home}
        last={stats.matchs.loses.away} />
      <ComparePercents
        title={'Goals for Home/Away'}
        first={stats.goals.goalsFor.home}
        last={stats.goals.goalsFor.away} />
      <ComparePercents
        title={'Goals against Home/Away'}
        first={stats.goals.goalsAgainst.home}
        last={stats.goals.goalsAgainst.away} />
      <ComparePercents
        title={'Goals for / Goals against'}
        first={stats.goals.goalsFor.total}
        last={stats.goals.goalsAgainst.total} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.club.stats,
  }
}

export default connect(mapStateToProps)(Stats);
