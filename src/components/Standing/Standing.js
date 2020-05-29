import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { throttle } from 'lodash';

import { Table } from 'antd';

import { leagueStatnding } from '../../FakeData/FakeData';
import ClubName from './ClubName/ClubName';
import ClubForm from './ClubForm/ClubForm';
import classes from './Standing.module.css';

const Standing = ({ leagueId }) => {
  const [teamsData, setTeamsData] = useState([]);
  const [leagueData, setLeagueData] = useState({});
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    // axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`)
    leagueStatnding()
      .then(response => response.api.results.standings)
      .then(data => moveTeamDataToTable(data))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    checkWidth.current();
    window.addEventListener('resize', checkWidth.current);

    return () => {
      checkWidth.current.cancel();
      window.removeEventListener('scroll', checkWidth.current);
    }
  }, [])

  const checkWidth = useRef(throttle(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 576) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  }, 1500));

  const moveTeamDataToTable = (data) => {
    let dataSource = [];

    dataSource = data.map((team, index) => ({
      key: index,
      position: team.rank,
      club: <ClubName team={team} />,
      played: team.all.matchsPlayed,
      win: team.all.win,
      drawn: team.all.draw,
      lose: team.all.lose,
      gf: team.all.goalsFor,
      ga: team.all.goalsAgainst,
      gd: team.goalsDiff,
      points: team.points,
      form: <ClubForm form={team.forme} />,
    }))

    const league = {
      name: data[0].group,
      description: data[0].description,
    }

    setLeagueData(league);
    setTeamsData(dataSource);
  }

  const columns = [
    {
      title: mobileMode ? 'Pos' : 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Club',
      dataIndex: 'club',
      key: 'club',
    },
    {
      title: mobileMode ? 'Pl' : 'Played',
      dataIndex: 'played',
      key: 'played',
    },
    {
      title: mobileMode ? 'W' : 'Win',
      dataIndex: 'win',
      key: 'win',
    },
    {
      title: mobileMode ? 'D' : 'Drawn',
      dataIndex: 'drawn',
      key: 'drawn',
    },
    {
      title: mobileMode ? 'L' : 'Lose',
      dataIndex: 'lose',
      key: 'lose',
    },
    {
      title: 'GF',
      dataIndex: 'gf',
      key: 'gf',
      responsive: ['md'],
    },
    {
      title: 'GA',
      dataIndex: 'ga',
      key: 'ga',
      responsive: ['md'],
    },
    {
      title: 'GD',
      dataIndex: 'gd',
      key: 'gd',
    },
    {
      title: mobileMode ? 'Pts' : 'Points',
      dataIndex: 'points',
      key: 'points',
    },
    {
      title: <div className={classes.teamFormTitle}>Form</div>,
      dataIndex: 'form',
      key: 'form',
      responsive: ['lg'],
      className: classes.teamForm,
    },
  ];

  const tableTitle = () => (
    <div className={classes.tableTitle}>
      <div className={classes.leagueName}>{leagueData.name}</div>
      <div className={classes.leagueDescription}>{leagueData.description}</div>
    </div>
  )

  return (
    <Table
      title={tableTitle}
      loading={teamsData.length === 0}
      className={mobileMode ? classes.mobileTable : classes.largeTable}
      dataSource={teamsData}
      columns={columns}
      pagination={false} />
  )
}

export default Standing;
