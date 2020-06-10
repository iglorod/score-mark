import React, { useState, useEffect } from 'react';

import { DoubleRightOutlined } from '@ant-design/icons';

import { fetchTeam } from '../../../../../FakeData/FakeData';
import classes from './TransferClubs.module.css';

const TransferClubs = ({ from, to }) => {
  const [fromTeam, setFromTeam] = useState(null);
  const [toTeam, setToTeam] = useState(null);

  useEffect(() => {
    Promise.all([
      fetchTeam(from.team_id),
      fetchTeam(to.team_id)
    ])
      .then(([fromResponse, toResponse]) => {
        setFromTeam(fromResponse.api.results.teams[0]);
        setToTeam(toResponse.api.results.teams[0]);
      })
  }, [])

  if (!fromTeam || !toTeam ) return null;

  return (
    <div>
      <img src={fromTeam.logo} className={classes.logo} alt={'From team'} />
      <DoubleRightOutlined className={classes.icon} />
      <img src={toTeam.logo} className={classes.logo} alt={'To team'} />
    </div>
  )
}

export default TransferClubs;
