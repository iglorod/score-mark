import React, { useState, useEffect } from 'react';

import HomeTeam from './Team/HomeTeam/HomeTeam';
import AwayTeam from './Team/AwayTeam/AwayTeam';
import FixtureStatus from './FixtureStatus/FixtureStatus';
import classes from './FixtureItem.module.css';

import { fixturePredictions } from '../../../FakeData/FakeData';

const FixtureItem = ({ fixture }) => {
  const [predictions, setPredictions] = useState(null);

  useEffect(() => {
    fixturePredictions()
      .then(response => response.api.results.predictions[0])
      .then(predictions => setPredictions(predictions))
  }, [])


  return (
    <div className={classes.fixture}>
      <HomeTeam fixture={fixture} winningPercent={predictions ? predictions.winning_percent.home : '0'} />
      <FixtureStatus fixture={fixture} />
      <AwayTeam fixture={fixture} winningPercent={predictions ? predictions.winning_percent.away : '0'} />
    </div>
  )
}

export default FixtureItem;
